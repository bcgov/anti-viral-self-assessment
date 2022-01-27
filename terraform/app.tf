
resource "aws_s3_bucket" "bucket_logs" {
  bucket = "${local.namespace}-bucket-logs"
  acl    = "log-delivery-write"
}
resource "aws_s3_bucket" "app" {
  bucket = var.app_sources_bucket
  acl    = "private"

  logging {
    target_bucket = aws_s3_bucket.bucket_logs.id
    target_prefix = "${var.app_sources_bucket}/"
  }

  versioning {
    enabled = true
  }
}

resource "aws_s3_bucket_policy" "app" {
  bucket = aws_s3_bucket.app.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.app.arn}/*"
        Principal = {
          AWS = aws_cloudfront_origin_access_identity.app.iam_arn
        }
      },
      {
        Effect   = "Allow"
        Action   = "s3:ListBucket"
        Resource = aws_s3_bucket.app.arn
        Principal = {
          AWS = aws_cloudfront_origin_access_identity.app.iam_arn
        }
      }
    ]
  })
}