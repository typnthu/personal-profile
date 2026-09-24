---
name: a11y-portfolio
description: Áp dụng khi xây hoặc review một web profile cá nhân dạng single-page bằng React + Tailwind, để đảm bảo accessibility đạt WCAG AA — semantic HTML, alt cho ảnh, label cho input, tương phản màu, và điều hướng bàn phím.
---

# Accessible portfolio (React + Tailwind)

Skill này đóng gói quy tắc accessibility cho web profile cá nhân single-page.
Kích hoạt khi dựng hoặc review các section (Hero, About, Skills, Projects, Contact, Footer)
hoặc khi có yêu cầu liên quan tới a11y / WCAG.

## Cấu trúc trang bằng thẻ ngữ nghĩa
- Bọc thanh điều hướng trong `<header>` + `<nav>`; nội dung chính trong một `<main>` duy nhất.
- Mỗi section là một `<section>` có `aria-labelledby` trỏ tới id của heading trong nó.
- Kết thúc trang bằng `<footer>`. Tránh dùng `<div>` cho các vùng có vai trò ngữ nghĩa.
- Giữ thứ tự heading liên tục: một `<h1>` cho tên/tiêu đề trang, các section dùng `<h2>`.

```tsx
<section aria-labelledby="projects-heading">
  <h2 id="projects-heading">Dự án</h2>
  {/* ... */}
</section>
```

## Ảnh và media
- Mọi `<img>` phải có `alt`. Ảnh trang trí thuần tuý dùng `alt=""` (không bỏ trống thuộc tính).
- Icon truyền tải ý nghĩa cần `aria-label`; icon trang trí đặt `aria-hidden="true"`.

## Form liên hệ
- Mọi input có `<label htmlFor>` liên kết đúng `id`. Không thay label bằng chỉ placeholder.
- Báo lỗi validation qua `aria-invalid` và `aria-describedby` trỏ tới thông báo lỗi.
- Nút submit là `<button type="submit">` với nhãn rõ ràng.

```tsx
<label htmlFor="email">Email</label>
<input id="email" name="email" type="email" aria-invalid={!!error}
       aria-describedby={error ? "email-error" : undefined} />
{error && <p id="email-error" role="alert">{error}</p>}
```

## Màu sắc và tương phản (WCAG AA)
- Text thường đạt tỉ lệ tương phản tối thiểu 4.5:1; text lớn tối thiểu 3:1.
- Với Tailwind, ghép nền/chữ đã kiểm chứng (ví dụ `bg-white text-slate-800`,
  `bg-slate-900 text-slate-100`). Tránh chữ xám nhạt trên nền sáng như `text-gray-400`.
- Không dùng riêng màu sắc để truyền đạt trạng thái — kèm text hoặc icon.

## Bàn phím và focus
- Chỉ dùng phần tử tương tác gốc (`<a>`, `<button>`) để có hành vi bàn phím sẵn có.
- Giữ focus ring hiển thị: dùng `focus-visible:ring-2 focus-visible:ring-offset-2`,
  không đặt `outline-none` mà thiếu thay thế.
- Cung cấp link "skip to content" trỏ tới `<main>` cho người dùng bàn phím.

## Checklist review nhanh
- [ ] Có đúng một `<main>`, các vùng dùng thẻ ngữ nghĩa.
- [ ] Mọi ảnh có `alt` hợp lý; icon trang trí `aria-hidden`.
- [ ] Mọi input có label liên kết; lỗi được công bố cho screen reader.
- [ ] Cặp màu nền/chữ đạt tương phản AA.
- [ ] Điều hướng và submit hoạt động bằng bàn phím, focus nhìn thấy được.
