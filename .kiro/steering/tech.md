# Tech

## Ngăn xếp công nghệ
- **Ngôn ngữ:** TypeScript (strict mode).
- **Framework:** React 18.
- **Build tool:** Vite.
- **Styling:** Tailwind CSS. Ưu tiên utility classes; tránh CSS inline và file CSS rời trừ khi cần thiết.
- **Package manager:** npm.

## Quy ước code
- Component viết dạng function component + hooks. Không dùng class component.
- Đặt tên component theo PascalCase, file component trùng tên component (ví dụ `Hero.tsx`).
- Props phải có kiểu (interface hoặc type) rõ ràng; tránh `any`.
- Ưu tiên `const` và arrow function cho component nội bộ nhỏ; export named export cho component.
- Dữ liệu nội dung (thông tin cá nhân, danh sách dự án, kỹ năng) tách ra file dữ liệu riêng trong `src/data/`, không hardcode rải rác trong JSX.

## Accessibility (bắt buộc)
- Dùng thẻ HTML ngữ nghĩa: `header`, `nav`, `main`, `section`, `footer`.
- Mọi ảnh có `alt`. Mọi input có `label` liên kết.
- Đảm bảo tương phản màu đạt WCAG AA.

## Lệnh thường dùng
- Cài dependencies: `npm install`
- Chạy dev server: `npm run dev`
- Build production: `npm run build`
- Preview bản build: `npm run preview`
- Lint: `npm run lint`

> Lưu ý: KHÔNG tự chạy dev server hay watch mode trong tác vụ tự động — chỉ chạy `npm run build` để xác minh.
