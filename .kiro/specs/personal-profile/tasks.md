# Tasks — Personal Profile

- [ ] 1. Khởi tạo dự án và cấu hình nền tảng
  - Tạo dự án Vite React + TypeScript, cài Tailwind CSS.
  - Cấu hình `tailwind.config.js`, `index.css` với các directive Tailwind.
  - Bật `scroll-behavior: smooth` toàn cục.
  - _Requirements: 7.1, 7.2_

- [ ] 2. Tạo mô hình và dữ liệu nội dung
  - Tạo `src/data/profile.ts` với interface `Profile`, `Project`, `SocialLink` và một object `profile` dùng nội dung placeholder.
  - _Requirements: 3.2, 4.2, 5.3_

- [ ] 3. Xây Navbar
  - Component navbar cố định với link tới các section, cuộn mượt, responsive.
  - _Requirements: 1.1, 1.2, 1.3_

- [ ] 4. Xây Hero
  - Hiển thị name, title, tagline, nút CTA tới Contact.
  - _Requirements: 2.1, 2.2_

- [ ] 5. Xây About
  - Section giới thiệu lấy nội dung từ dữ liệu.
  - _Requirements: 3.1, 3.2_

- [ ] 6. Xây Skills
  - Render danh sách kỹ năng dạng thẻ từ dữ liệu.
  - _Requirements: 4.1, 4.2_

- [ ] 7. Xây Projects
  - Render card dự án; link mở tab mới an toàn.
  - _Requirements: 5.1, 5.2, 5.3_

- [ ] 8. Xây Contact + validation form
  - Hiển thị email + socials; form với validation client-side, thông báo lỗi cạnh field, thông báo thành công.
  - _Requirements: 6.1, 6.2, 6.3, 7.3_

- [ ] 9. Xây Footer và lắp ghép App
  - Footer với năm hiện tại; ghép mọi section trong `App.tsx` dùng HTML ngữ nghĩa.
  - _Requirements: 7.2_

- [ ] 10. Kiểm tra accessibility & responsive, chạy build
  - Rà soát alt/label/heading/tương phản; chạy `npm run build` để xác minh.
  - _Requirements: 7.1, 7.2, 7.3_

- [ ] 11. (Correctness) Property-based tests cho validation form
  - Tách logic validate ra `src/lib/validateContact.ts`; viết PBT với fast-check + vitest
    mã hoá các property bất biến; chạy `npm test`.
  - _Requirements: 6.2, 6.3_
