variable "project_code" {}
variable "app_sources" {}
variable "target_env" {}
variable "tz" {}
variable "domain" {}
variable "app_sources_bucket" {}
variable "max_filesize_mb" {}

variable "target_aws_account_id" {}

variable "region" {
  default = "ca-central-1"
}
