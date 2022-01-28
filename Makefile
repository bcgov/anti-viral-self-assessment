#!make
export PROJECT = avsa
ENV_NAME ?= dev
LZ2_PROJECT = ph4uto
TF_WORKSPACE_NAME = $(LZ2_PROJECT)-$(ENV_NAME)-$(PROJECT)
APP_SRC_BUCKET = $(PROJECT)-$(ENV_NAME)-app
TZ=America/Los_Angeles
MAX_FILESIZE=15

TERRAFORM_DIR = terraform
export AWS_REGION ?= ca-central-1
export BOOTSTRAP_ENV=terraform/bootstrap

ifeq ($(ENV_NAME), main)
export ENV_NAME=dev
endif

ifeq ($(ENV_NAME), dev)
CLOUDFRONT_ID=ES6O0GJR12MDR
endif

ifeq ($(ENV_NAME), test)
CLOUDFRONT_ID=E2DBVSML8NK90J
endif

AWS_SA_ROLE_ARN=arn:aws:iam::433404605500:role/PBMMOps-BCGOV_dev_Project_Role_AVSA_SA_Role

define TFVARS_DATA
target_env = "$(ENV_NAME)"
tz = "$(TZ)"
project_code = "$(PROJECT)"
app_sources = "build/app"
app_sources_bucket = "$(APP_SRC_BUCKET)"
max_filesize_mb = "$(MAX_FILESIZE)"
domain = "$(DOMAIN)"
endef
export TFVARS_DATA

define TF_BACKEND_CFG
workspaces { name = "$(TF_WORKSPACE_NAME)" }
hostname     = "app.terraform.io"
organization = "bcgov"
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

test: 
	@echo "+\n++ Make: Running unit tests...\n+"
	@yarn test



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
	@echo AWS_SA_ROLE_ARN=$(AWS_SA_ROLE_ARN)
	@echo
	@echo ./$(TERRAFORM_DIR)/.auto.tfvars:
	@echo "$$TFVARS_DATA"
	@echo
	@echo ./$(TERRAFORM_DIR)/backend.hcl:
	@echo "$$TF_BACKEND_CFG"

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

deploy-app-manual: deploy-app
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
