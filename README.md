# Web Profile cá nhân - Kiro University Challenge

Web profile cá nhân dạng single-page, tĩnh, xây bằng **React 18 + Vite + TypeScript (strict) + Tailwind CSS**.

## Tech
- **React 18** - function component + hooks.
- **TypeScript** - strict mode, không dùng `any`.
- **Vite** - build tool.
- **Tailwind CSS** - ưu tiên utility class.
- **Vitest + fast-check** - property-based testing cho logic validation.

## Cấu trúc thư mục
```
/
├─ README.md                  # tài liệu này
├─ index.html                 # HTML gốc của Vite
├─ src/                       # mã nguồn ứng dụng
│  ├─ App.tsx
│  ├─ components/
│  ├─ data/profile.ts
│  └─ lib/
├─ docs/
│  └─ kiro-lessons.md         # bằng chứng áp dụng từng bài Kiro University
├─ infra/                     # Terraform: host trang tĩnh trên AWS (S3 + CloudFront)
│  └─ README.md               # hướng dẫn deploy hạ tầng
├─ powers/
│  └─ portfolio-a11y/         # Kiro power tự đóng gói (accessibility WCAG AA)
│     └─ README.md            # hướng dẫn chia sẻ / cài power
└─ .kiro/                     # steering, specs, hooks, agents, settings
```

## Chạy dự án
```
npm install      # cài dependencies
npm run dev      # dev server (chạy thủ công, không dùng trong tác vụ tự động)
npm run build    # build production -> dist/
npm run preview  # xem thử bản build
npm run lint     # kiểm lint
npm test         # chạy property-based test
```

## Áp dụng Kiro University
Chi tiết đầy đủ (kèm đường dẫn file) ở [`docs/kiro-lessons.md`](docs/kiro-lessons.md):

| Bài | Nội dung | Vị trí chính |
| --- | --- | --- |
| 1 | Steering documents | `.kiro/steering/` |
| 2 | Spec-driven development | `.kiro/specs/personal-profile/` |
| 3 | Hooks | `.kiro/hooks/typecheck-on-save.json` |
| 4 | Property-based testing | `src/lib/validateContact.pbt.test.ts` |
| 5 | Powers | power `terraform` (đã cài) |
| 6 | MCP | `.kiro/settings/mcp.json` |
| 7 | Custom agents | `.kiro/agents/portfolio-dev.json` |
| Bonus 2 | Package a Kiro power | `powers/portfolio-a11y/` |

## Hạ tầng (tuỳ chọn)
Trang tĩnh có thể host trên AWS bằng Terraform trong `infra/` (S3 private + CloudFront + OAC).
Xem [`infra/README.md`](infra/README.md).
