# Design — Personal Profile

## Tổng quan
Web profile là ứng dụng React single-page, dựng bằng Vite + TypeScript, style bằng Tailwind CSS. Không có backend. Toàn bộ nội dung lấy từ một file dữ liệu tập trung `src/data/profile.ts`. Trang gồm nhiều section được lắp ghép trong `App.tsx`.

## Kiến trúc
```
main.tsx
  └─ App.tsx
       ├─ Navbar
       ├─ main
       │   ├─ Hero
       │   ├─ About
       │   ├─ Skills
       │   ├─ Projects
       │   └─ Contact
       └─ Footer
```

Luồng dữ liệu: `profile.ts` export một object `profile` → các component import và render. Không có state toàn cục; chỉ Contact form có state cục bộ cho input và lỗi validation.

## Mô hình dữ liệu
```ts
// src/data/profile.ts
export interface Project {
  name: string;
  description: string;
  url?: string;
  tags?: string[];
}

export interface SocialLink {
  label: string;   // ví dụ "GitHub"
  url: string;
}

export interface Profile {
  name: string;
  title: string;        // tiêu đề nghề nghiệp
  tagline: string;      // câu ngắn ở hero
  about: string;        // đoạn giới thiệu
  email: string;
  skills: string[];
  projects: Project[];
  socials: SocialLink[];
}
```

## Thiết kế component
- **Navbar:** thanh cố định (`sticky top-0`), danh sách link dạng anchor `#about`, `#skills`, `#projects`, `#contact`; cuộn mượt qua CSS `scroll-behavior: smooth`. Trên mobile hiển thị dạng gọn.
- **Hero:** hiển thị `name`, `title`, `tagline` và nút CTA dẫn tới `#contact`. Dùng `<section>` với heading `h1`.
- **About:** render `profile.about` trong `<section id="about">`.
- **Skills:** map `profile.skills` thành các thẻ (pill). `<section id="skills">`.
- **Projects:** map `profile.projects` thành card; nếu có `url` render link mở tab mới với `rel="noopener noreferrer"`. `<section id="projects">`.
- **Contact:** hiển thị `email` + `socials`; kèm form (name, email, message) với validation phía client. `<section id="contact">`.
- **Footer:** copyright + năm hiện tại.

## Xử lý form Contact (validation)
State cục bộ với `useState`:
- Trường: `name`, `email`, `message`.
- Quy tắc: name không rỗng; email đúng định dạng regex cơ bản; message không rỗng.
- WHEN submit không hợp lệ → set object `errors`, hiển thị thông báo cạnh từng field, không "gửi".
- WHEN submit hợp lệ → hiển thị thông báo cảm ơn (không có backend, chỉ mô phỏng client-side).
- Mỗi input có `<label htmlFor>` liên kết và `aria-invalid` khi lỗi.

## Styling
- Tailwind utility classes. Bảng màu tối giản (nền sáng, chữ đậm tương phản cao đạt WCAG AA).
- Responsive: dùng breakpoint `md:` cho layout desktop; mặc định mobile-first.
- Spacing nhất quán qua thang Tailwind.

## Accessibility
- Cấu trúc: `header > nav`, `main > section*`, `footer`.
- Heading theo thứ bậc: `h1` ở Hero, `h2` cho mỗi section.
- Link ngoài có nhãn rõ ràng; ảnh (nếu có) có `alt`.

## Ngoài phạm vi
- Không có backend, không lưu trữ dữ liệu form thật.
- Không đa ngôn ngữ, không CMS.
