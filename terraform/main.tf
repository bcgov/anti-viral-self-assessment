terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.49.0"
    }
  }

  backend "s3" {
    key     = "terraform.tfstate"
    encrypt = true
  }
}

provider "aws" {
  region = var.region
  default_tags {
    tags = {
      Environment = var.target_env
      Project     = var.project_code
      Author      = "FreshWorks Studio"
    }
  }
}

provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
  default_tags {
    tags = {
      Environment = var.target_env
      Project     = var.project_code
      Author      = "FreshWorks Studio"
    }
  }
}

locals {
  namespace        = "${var.project_code}-${var.target_env}"
  app_name         = "${local.namespace}-app"

  has_domain = var.domain != ""
}