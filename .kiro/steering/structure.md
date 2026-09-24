# Structure

## Cấu trúc thư mục
```
/
├─ index.html              # HTML gốc của Vite
├─ package.json
├─ vite.config.ts
├─ tailwind.config.js
├─ tsconfig.json
├─ .kiro/                  # steering + specs
├─ public/                 # tài nguyên tĩnh (favicon, ảnh public)
└─ src/
   ├─ main.tsx             # entry point
   ├─ App.tsx              # ghép các section lại
   ├─ index.css            # import Tailwind directives
   ├─ components/          # các UI component tái sử dụng
   │  ├─ Navbar.tsx
   │  ├─ Hero.tsx
   │  ├─ About.tsx
   │  ├─ Skills.tsx
   │  ├─ Projects.tsx
   │  ├─ Contact.tsx
   │  └─ Footer.tsx
   └─ data/                # dữ liệu nội dung
      └─ profile.ts        # thông tin cá nhân, kỹ năng, dự án
```

## Quy ước đặt tên
- Component: PascalCase, một component mỗi file.
- File dữ liệu và tiện ích: camelCase.
- Mỗi section của trang là một component riêng trong `components/`.

## Nguyên tắc tổ chức
- Nội dung tách khỏi trình bày: sửa thông tin cá nhân chỉ cần đụng `src/data/profile.ts`.
- `App.tsx` chỉ lắp ghép, không chứa logic hay nội dung cứng.
- Giữ component nhỏ và tập trung một trách nhiệm.
