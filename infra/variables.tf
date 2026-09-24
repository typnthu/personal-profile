variable "aws_region" {
  description = "AWS region for the S3 bucket."
  type        = string
  default     = "ap-southeast-1"
}

variable "bucket_name" {
  description = "Globally unique name for the S3 bucket that stores the site files."
  type        = string
}

variable "project_name" {
  description = "Project name used for tagging resources."
  type        = string
  default     = "personal-profile"
}

variable "index_document" {
  description = "Default root object served by CloudFront."
  type        = string
  default     = "index.html"
}
