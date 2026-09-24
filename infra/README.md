# Infrastructure - Host trang tĩnh trên AWS bằng Terraform

Kiến trúc: **S3 (private) + CloudFront + Origin Access Control (OAC)**, HTTPS qua domain
mặc định `*.cloudfront.net`. Region: `ap-southeast-1` (Singapore).

## Tài nguyên được tạo
- `aws_s3_bucket` - bucket private lưu file trang.
- `aws_s3_bucket_public_access_block`/`ownership_controls`/`versioning` - khoá public, bật versioning.
- `aws_cloudfront_origin_access_control` - OAC để CloudFront đọc S3 private.
- `aws_cloudfront_distribution` - CDN + HTTPS, redirect HTTP→HTTPS, SPA fallback về index.html.
- `aws_s3_bucket_policy` - chỉ cho phép distribution này đọc object.
- `aws_s3_object` (for_each) - upload toàn bộ `../dist`.

## Yêu cầu
- Terraform CLI >= 1.6 - https://developer.hashicorp.com/terraform/install
- AWS CLI đã cấu hình credential (`aws configure`) với quyền tạo S3 + CloudFront + IAM policy.

## Các bước deploy

1. Build trang tĩnh (từ thư mục gốc dự án):
   ```
   npm run build
   ```
   Lệnh này tạo thư mục `dist/` mà Terraform sẽ upload.

2. Chuẩn bị biến:
   ```
   cd infra
   cp terraform.tfvars.example terraform.tfvars
   ```
   Sửa `bucket_name` trong `terraform.tfvars` thành tên DUY NHẤT toàn cầu.

3. Khởi tạo và xem trước:
   ```
   terraform init
   terraform plan
   ```

4. Áp dụng:
   ```
   terraform apply
   ```
   CloudFront cần ~5–15 phút để triển khai. Sau khi xong, URL trang nằm ở
   output `cloudfront_url`.

## Cập nhật nội dung sau này
Sau khi sửa trang và `npm run build`:
```
terraform apply
```
Terraform sẽ upload lại các file thay đổi. Để CloudFront phục vụ ngay bản mới
(bỏ cache), tạo invalidation:
```
aws cloudfront create-invalidation --distribution-id <cloudfront_distribution_id> --paths "/*"
```

## Xoá toàn bộ hạ tầng
```
terraform destroy
```

> Lưu ý: `terraform.tfvars` và các file state bị `.gitignore` - không commit chúng.
