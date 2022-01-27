terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.49.0"
    }
  }

  backend "local" {}
}

provider "aws" {
  region  = var.region
}