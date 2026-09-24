# ---------------------------------------------------------------------------
# Upload nội dung build (dist/) lên S3
# ---------------------------------------------------------------------------
# Quét toàn bộ file trong ../dist và upload từng file, tự suy ra content_type.
locals {
  dist_path = "${path.module}/../dist"

  content_types = {
    ".html"  = "text/html"
    ".css"   = "text/css"
    ".js"    = "application/javascript"
    ".json"  = "application/json"
    ".svg"   = "image/svg+xml"
    ".png"   = "image/png"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".gif"   = "image/gif"
    ".ico"   = "image/x-icon"
    ".txt"   = "text/plain"
    ".webp"  = "image/webp"
    ".woff"  = "font/woff"
    ".woff2" = "font/woff2"
    ".map"   = "application/json"
  }
}

resource "aws_s3_object" "site_files" {
  for_each = fileset(local.dist_path, "**")

  bucket       = aws_s3_bucket.site.id
  key          = each.value
  source       = "${local.dist_path}/${each.value}"
  etag         = filemd5("${local.dist_path}/${each.value}")
  content_type = lookup(local.content_types, try(regex("\\.[^.]+$", each.value), ""), "application/octet-stream")
}
