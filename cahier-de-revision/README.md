# Cahier de révision

Sổ ôn tiếng Pháp theo phong cách carnet của app này: phiên ôn hằng ngày có lặp lại ngắt quãng, bài học (Hiểu → Luyện → Lỗi hay gặp), kho 1198 từ theo 8 chủ điểm, hội thoại nhập vai.

- `index.html`: trang hoàn chỉnh, mở trực tiếp bằng trình duyệt.
- `src/`: mã nguồn để dựng lại trang
  - `shell2.html`: giao diện (CSS + khung trang)
  - `units.js`: dữ liệu các buổi học (UNITS)
  - `vocab.json`: kho từ vựng và hội thoại (LEX)
  - `app2.js`: logic ứng dụng

Dựng lại `index.html`:

```sh
cd src && { cat shell2.html; echo "<script>"; cat units.js; echo; printf "const LEX="; cat vocab.json; echo ";"; cat app2.js; echo "</script>"; } > ../body.html
```
(rồi bọc `body.html` trong `<!doctype html>…<body>…</body></html>`).

Tiến độ học lưu trong localStorage của trình duyệt (`fr-carnet-v2`).
