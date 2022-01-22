#!make
export PROJECT := $(or $(PROJECT),avsa)
ENV_NAME ?= dev
PROJECT_CODE = avsa
NAMESPACE = $(PROJECT_CODE)-$(ENV_NAME)
APP_SRC_BUCKET = $(NAMESPACE)-app
TZ=America/Los_Angeles
MAX_FILESIZE=15

TERRAFORM_DIR = terraform
export AWS_REGION ?= ca-central-1
export BOOTSTRAP_ENV=terraform/bootstrap

define TFVARS_DATA
target_env = "$(ENV_NAME)"
tz = "$(TZ)"
project_code = "$(PROJECT_CODE)"
app_sources = "build/app"
app_sources_bucket = "$(APP_SRC_BUCKET)"
max_filesize_mb = "$(MAX_FILESIZE)"
domain = "$(DOMAIN)"
endef
export TFVARS_DATA

define TF_BACKEND_CFG
region="$(AWS_REGION)"
bucket="$(NAMESPACE)-tf-state"
dynamodb_table="$(NAMESPACE)-tf-lock"
endef
export TF_BACKEND_CFG

####################################################################
## Local Development
####################################################################

run:
	@echo "+\n++ Make: Running locally ...\n+"
	@yarn dev

lint:
	@echo "+\n++ Make: Linting app...\n+"
	@yarn lint

format-check:
	@echo "+\n++ Make: Checking app formatting...\n+"
	@yarn format:check

build:
	@echo "+\n++ Make: Building static files...\n+"
	@yarn build && yarn export



####################################################################
## Testing commands
####################################################################

a11y-test:
	yarn a11y-test

format-a11y-results:
	yarn format-a11y-results

####################################################################
## AWS Deployment
####################################################################

# Deployment CMD
tag-dev:
ifdef comment
	@git tag -fa dev -m "Deploy dev: $(comment)"
else
	@git tag -fa dev -m "Deploy dev: $(git rev-parse --abbrev-ref HEAD)"
endif
	@git push --force origin refs/tags/dev:refs/tags/dev

tag-test:
ifdef comment
	@git tag -fa test -m "Deploy test: $(comment)"
else
	@git tag -fa test -m "Deploy test: $(git rev-parse --abbrev-ref HEAD)"
endif
	@git push --force origin refs/tags/test:refs/tags/test

print-env:
	@echo NAMESPACE=$(NAMESPACE)
	@echo AWS_SA_ROLE_ARN=$(AWS_SA_ROLE_ARN)
	@echo
	@echo ./$(TERRAFORM_DIR)/.auto.tfvars:
	@echo "$$TFVARS_DATA"
	@echo
	@echo ./$(TERRAFORM_DIR)/backend.hcl:
	@echo "$$TF_BACKEND_CFG"

bootstrap:
	## Set-up a S3 bucket for storing terraform state.
	## Only needs to be run once per environment, globally.
	terraform -chdir=$(BOOTSTRAP_ENV) init -input=false \
		-reconfigure \
		-backend-config='path=$(ENV_NAME).tfstate'
	terraform -chdir=$(BOOTSTRAP_ENV) apply -auto-approve -input=false \
		-var='namespace=$(NAMESPACE)'

write-config-tf:
	@echo "$$TFVARS_DATA" > $(TERRAFORM_DIR)/.auto.tfvars
	@echo "$$TF_BACKEND_CFG" > $(TERRAFORM_DIR)/backend.hcl

init-tf: write-config-tf
	# Initializing the terraform environment
	@terraform -chdir=$(TERRAFORM_DIR) init -input=false \
		-reconfigure \
		-backend-config=backend.hcl

deploy: init-tf 
	# Creating all AWS infrastructure.
	@terraform -chdir=$(TERRAFORM_DIR) apply -auto-approve -input=false

deploy-app:
	aws s3 sync ./terraform/build/app s3://$(APP_SRC_BUCKET) --delete
	aws --region $(AWS_REGION) cloudfront create-invalidation --distribution-id $(CLOUDFRONT_ID) --paths "/*"

plan: init-tf
	# Creating all AWS infrastructure.
	@terraform -chdir=$(TERRAFORM_DIR) plan

force-unlock: init-tf
	terraform -chdir=$(TERRAFORM_DIR) force-unlock $(LOCK_ID)

destroy: init-tf
	terraform -chdir=$(TERRAFORM_DIR) destroy

pre-build:
	mkdir -p ./terraform/build

build-prod-app: pre-build
	rm -r ./terraform/build/app || true
	yarn 
	yarn build
	mv ./out ./terraform/build/app
