# Requirements — Personal Profile

## Giới thiệu
Tài liệu này mô tả yêu cầu cho web profile cá nhân: một trang single-page, tĩnh, responsive, giới thiệu bản thân, kỹ năng, dự án và cách liên hệ. Yêu cầu viết theo cú pháp EARS (Easy Approach to Requirements Syntax).

## Requirement 1 — Điều hướng
**User Story:** Là người xem, tôi muốn có thanh điều hướng để nhảy nhanh tới từng phần của trang.

#### Acceptance Criteria
1. WHEN người dùng tải trang THE SYSTEM SHALL hiển thị thanh navbar cố định ở đầu trang với link tới các section: About, Skills, Projects, Contact.
2. WHEN người dùng nhấp vào một link trên navbar THE SYSTEM SHALL cuộn mượt tới section tương ứng.
3. WHEN xem trên màn hình hẹp (mobile) THE SYSTEM SHALL thu gọn navbar thành menu phù hợp và vẫn truy cập được bằng bàn phím.

## Requirement 2 — Phần Hero / giới thiệu nhanh
**User Story:** Là người xem, tôi muốn thấy ngay tên và định hướng nghề nghiệp khi vào trang.

#### Acceptance Criteria
1. WHEN người dùng tải trang THE SYSTEM SHALL hiển thị tên, tiêu đề nghề nghiệp và một câu tagline ngắn ở phần đầu tiên.
2. THE SYSTEM SHALL cung cấp nút hành động chính dẫn tới phần Contact hoặc Projects.

## Requirement 3 — Giới thiệu bản thân (About)
**User Story:** Là người xem, tôi muốn đọc phần giới thiệu để hiểu về người này.

#### Acceptance Criteria
1. THE SYSTEM SHALL hiển thị một đoạn mô tả bản thân trong section About.
2. THE SYSTEM SHALL lấy nội dung About từ file dữ liệu `src/data/profile.ts`, không hardcode trong JSX.

## Requirement 4 — Kỹ năng (Skills)
**User Story:** Là nhà tuyển dụng, tôi muốn xem nhanh các kỹ năng nổi bật.

#### Acceptance Criteria
1. THE SYSTEM SHALL hiển thị danh sách kỹ năng dưới dạng nhãn/thẻ trong section Skills.
2. WHEN danh sách kỹ năng thay đổi trong dữ liệu THE SYSTEM SHALL tự phản ánh mà không cần sửa JSX.

## Requirement 5 — Dự án (Projects)
**User Story:** Là người xem, tôi muốn xem các dự án tiêu biểu kèm liên kết.

#### Acceptance Criteria
1. THE SYSTEM SHALL hiển thị danh sách dự án, mỗi dự án gồm tên, mô tả ngắn và link (nếu có).
2. WHEN một dự án có link THE SYSTEM SHALL mở link trong tab mới với thuộc tính an toàn (`rel="noopener noreferrer"`).
3. THE SYSTEM SHALL lấy dữ liệu dự án từ `src/data/profile.ts`.

## Requirement 6 — Liên hệ (Contact)
**User Story:** Là người xem, tôi muốn có cách liên hệ với chủ nhân profile.

#### Acceptance Criteria
1. THE SYSTEM SHALL hiển thị các link liên hệ (email và mạng xã hội) trong section Contact.
2. WHEN người dùng gửi form liên hệ với dữ liệu không hợp lệ THE SYSTEM SHALL hiển thị thông báo lỗi validation ngay cạnh trường liên quan.
3. WHEN người dùng gửi form với dữ liệu hợp lệ THE SYSTEM SHALL hiển thị thông báo xác nhận đã gửi.

## Requirement 7 — Responsive & Accessibility
**User Story:** Là người dùng trên mọi thiết bị, tôi muốn trang hiển thị tốt và truy cập được.

#### Acceptance Criteria
1. THE SYSTEM SHALL hiển thị đúng bố cục trên cả mobile và desktop (responsive-first).
2. THE SYSTEM SHALL dùng thẻ HTML ngữ nghĩa (`header`, `nav`, `main`, `section`, `footer`).
3. THE SYSTEM SHALL đảm bảo mọi ảnh có `alt`, mọi input có `label`, và tương phản màu đạt WCAG AA.
