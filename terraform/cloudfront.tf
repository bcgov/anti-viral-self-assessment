# CloudFront distribution that routes and caches the app and the api

output "public_url" {
  value = aws_cloudfront_distribution.app.domain_name
}

locals {
  s3_origin_id  = "app"
}

data "aws_cloudfront_cache_policy" "optimized" {
  name = "Managed-CachingOptimized"
}

data "aws_cloudfront_cache_policy" "disabled" {
  name = "Managed-CachingDisabled"
}

data "aws_acm_certificate" "domain" {
  count    = local.has_domain ? 1 : 0
  provider = aws.us-east-1
  domain   = var.domain
  statuses = ["ISSUED"]
}

resource "aws_cloudfront_origin_access_identity" "app" {
  comment = local.app_name
}

// TODO there is repetition in these two response javascript files for security headers.
// Best approach would probably be imports and webpack as part of the build process
// to generate these files. Maybe. I could also just put an "if" condition in 
// a single file but I didn't like the idea of encoding the domain knowledge of 
// the structure of _next apps in two places, rather than just
// having it here in the CF origin config
resource "aws_cloudfront_function" "response_immutable" {
  name    = "${local.namespace}-cf-response-immutable"
  runtime = "cloudfront-js-1.0"
  comment = "Add security and immutable caching headers"
  code    = file("${path.module}/cloudfront/response-immutable.js")
}

resource "aws_cloudfront_function" "response_nocache" {
  name    = "${local.namespace}-cf-response-nocache"
  runtime = "cloudfront-js-1.0"
  comment = "Add security and no-cache caching headers"
  code    = file("${path.module}/cloudfront/response-nocache.js")
}

resource "aws_cloudfront_function" "request" {
  name    = "${local.namespace}-cf-request"
  runtime = "cloudfront-js-1.0"
  comment = "Next request handler"
  code    = file("${path.module}/cloudfront/request.js")
}

resource "aws_cloudfront_distribution" "app" {
  comment = local.app_name

  aliases = local.has_domain ? [var.domain] : []

  wait_for_deployment = false
  
  origin {
    domain_name = aws_s3_bucket.app.bucket_regional_domain_name
    origin_id   = local.s3_origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.app.cloudfront_access_identity_path
    }
  }

  # We only need the US/Canada
  price_class = "PriceClass_100"

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  // Serve the root directory uncached (it has the nextjs .html files in)
  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    target_origin_id       = local.s3_origin_id
    cache_policy_id        = data.aws_cloudfront_cache_policy.disabled.id
    viewer_protocol_policy = "redirect-to-https"

    function_association {
      event_type   = "viewer-response"
      function_arn = aws_cloudfront_function.response_nocache.arn
    }

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.request.arn
    }
  }

  // Cache _next directory
  ordered_cache_behavior {
    path_pattern           = "/_next/*"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    target_origin_id       = local.s3_origin_id
    cache_policy_id        = data.aws_cloudfront_cache_policy.optimized.id
    viewer_protocol_policy = "redirect-to-https"

    function_association {
      event_type   = "viewer-response"
      function_arn = aws_cloudfront_function.response_immutable.arn
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = local.has_domain ? false : true

    acm_certificate_arn      = local.has_domain ? data.aws_acm_certificate.domain[0].arn : null
    minimum_protocol_version = local.has_domain ? "TLSv1.2_2019" : null
    ssl_support_method       = local.has_domain ? "sni-only" : null
  }

  custom_error_response {
    error_code         = 404
    response_code      = 404
    response_page_path = "/404.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}