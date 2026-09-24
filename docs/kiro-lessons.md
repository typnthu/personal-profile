# Kiro University Challenge — Bằng chứng áp dụng các bài học

Dự án: **Web profile cá nhân** (React + Vite + TypeScript + Tailwind CSS).

Tài liệu này liệt kê nơi mỗi bài học được thể hiện trong repo, để tham chiếu khi nộp bài thi cuối.

## Bài 1 — Steering documents
- `.kiro/steering/product.md` — sản phẩm, mục đích, đối tượng người dùng.
- `.kiro/steering/tech.md` — ngăn xếp công nghệ, quy ước code, quy tắc accessibility, lệnh build.
- `.kiro/steering/structure.md` — cấu trúc thư mục và quy ước tổ chức.

## Bài 2 — Spec-driven development
- `.kiro/specs/personal-profile/requirements.md` — 7 requirements theo cú pháp EARS.
- `.kiro/specs/personal-profile/design.md` — kiến trúc, data model, thiết kế form.
- `.kiro/specs/personal-profile/tasks.md` — các task triển khai, mỗi task trỏ về requirement.

## Bài 3 — Hooks
- `.kiro/hooks/typecheck-on-save.json` — hook `PostFileSave`, matcher `\.(ts|tsx)$`,
  chạy `npx tsc --noEmit` mỗi khi lưu file TypeScript để bắt lỗi kiểu sớm.

## Bài 4 — Property-based testing (IDE)
- `src/lib/validateContact.ts` — logic validation tách riêng để test được.
- `src/lib/validateContact.pbt.test.ts` — 4 property test (fast-check + vitest) mã hoá
  quy tắc luôn-đúng của form (Requirement 6.2 / 6.3).
- Chạy: `npm test`. PBT đầy đủ tích hợp trong Kiro IDE ở pha design.

## Bài 5 — Powers
- Power `terraform` đã được cài trong môi trường (verified power).
- Powers nạp công cụ/kỹ năng theo từ khoá; xem `https://kiro.dev/docs/powers/`.
- Lưu ý: powers là công cụ bên thứ ba, chỉ cài từ nguồn tin cậy.

## Bài 6 — MCP (Model Context Protocol) — ĐÃ KẾT NỐI ✅
- Cấu hình đang hoạt động tại `.kiro/settings/mcp.json`:
  server `fetch` dùng `uvx mcp-server-fetch` (bản mẫu lưu ở `docs/mcp.json`).
- `uv`/`uvx` đã cài (v0.12.18) tại `C:\Users\ADMIN\.local\bin`, có trong PATH cấp user.
- Đã verify: `uvx mcp-server-fetch` trả về `initialize` hợp lệ (mcp-fetch v1.30.0);
  server kết nối thành công trong Kiro sau khi restart.
- Ghi chú: lần chạy đầu `uvx` tải ~44 package (lxml, cryptography, pywin32...) nên
  có thể chậm/timeout; sau khi đã cache thì kết nối nhanh.
- MCP server là bên thứ ba — chỉ dùng nguồn tin cậy.

## Cách chạy dự án
- Cài: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Test (PBT): `npm test`
