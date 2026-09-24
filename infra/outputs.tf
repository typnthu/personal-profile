output "bucket_name" {
  description = "Tên S3 bucket lưu file trang."
  value       = aws_s3_bucket.site.id
}

output "cloudfront_domain_name" {
  description = "Domain mặc định của CloudFront — mở URL này để xem trang."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "cloudfront_url" {
  description = "URL HTTPS đầy đủ của trang."
  value       = "https://${aws_cloudfront_distribution.site.domain_name}"
}

output "cloudfront_distribution_id" {
  description = "ID distribution — dùng để tạo cache invalidation khi cập nhật nội dung."
  value       = aws_cloudfront_distribution.site.id
}
