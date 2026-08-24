# Ý tưởng thiết kế — French Vocab Study

## Ba hướng phong cách

### 1. Carnet de Provence
**Giới thiệu ngắn:** Một cuốn sổ học tiếng Pháp có chất liệu giấy, các tấm thẻ cắt dán và nét mực tinh tế. Không khí ấm, trí thức và thân thiện, giúp việc ôn lặp lại bớt khô khan.

**Xác suất:** 0.07

### 2. Métro Mémoire
**Giới thiệu ngắn:** Lấy cảm hứng từ hệ thống biển chỉ dẫn Paris hiện đại: tuyến học rõ ràng, nhịp độ nhanh và các điểm dừng kiến thức. Tạo cảm giác tiến bộ theo lộ trình.

**Xác suất:** 0.03

### 3. Atelier Linguistique
**Giới thiệu ngắn:** Không gian xưởng thực hành ngôn ngữ với bố cục biên tập, bề mặt gỗ sáng và các nhãn dán màu. Cảm giác chủ động, linh hoạt và có tính khám phá.

**Xác suất:** 0.09

---

## Hướng được chọn: Carnet de Provence

### Design Movement
**Editorial scrapbook và French stationery**: giao diện như một cuốn carnet cá nhân được biên soạn kỹ, pha trộn sự chỉn chu của ấn phẩm học thuật với các chi tiết cắt dán thủ công.

### Core Principles
1. **Học bằng nhịp điệu:** mỗi chế độ học là một “trang” có mục tiêu rõ, một thao tác chính và phản hồi tức thời.
2. **Chất liệu có chủ đích:** nền giấy ngà, nét viền mực xanh đậm và những mảng màu như nhãn dán thay cho khung thẻ công nghệ lạnh.
3. **Tiến độ nhìn thấy được:** thanh tiến độ, số từ đã ôn và trạng thái trả lời luôn hiện diện nhưng không lấn át nội dung.
4. **Tập trung vào từ:** từ tiếng Pháp chiếm vai trò thị giác trung tâm; nghĩa, loại từ và ví dụ xuất hiện theo thứ bậc hỗ trợ.

### Color Philosophy
Nền **papier crème** tạo sự thư thái khi học lâu. Xanh mực **encre marine** mang cảm giác tin cậy và liên tưởng đến ghi chú viết tay; vàng mù tạt **moutarde** dùng như tín hiệu chú ý và hành động; xanh sage nhạt biểu thị câu trả lời chính xác. Màu sắc ưu tiên ấm, mờ nhẹ, tuyệt đối tránh gradient tím hoặc hiệu ứng phát sáng công nghệ.

### Layout Paradigm
Sử dụng bố cục **bàn học mở**: thanh điều hướng bên trái hoạt động như gáy sổ, khu vực nội dung là tờ giấy chính, và một cột hẹp bên phải ghi lại phiên học/tiến độ. Các mô-đun không bị giam trong một lưới card đều tăm tắp; thay vào đó là các mảng giấy lệch nhịp, vùng luyện tập trung tâm rộng rãi và các nhãn dán theo ngữ cảnh.

### Signature Elements
1. **Góc giấy gập** và đường viền chấm mực xuất hiện ở flashcard, vùng bài tập và thẻ thống kê.
2. **Nhãn băng keo giấy (washi tape)** dùng cho tiêu đề chế độ học, chủ đề và gợi ý.
3. **Dấu tròn kết quả** với ký hiệu đúng/sai như con dấu trên vở bài tập.

### Interaction Philosophy
Tương tác cần gần gũi như học với sổ tay: lật flashcard có chuyển động xoay mỏng; nút “Đã nhớ” và “Cần ôn” phản hồi bằng con dấu màu; câu trả lời trong bài tập nhận xét rõ ràng bằng ngôn ngữ hỗ trợ thay vì chỉ đổi màu.

### Animation
Chuyển động ngắn, có cảm giác vật lý và không gây phân tâm: flashcard lật trong 240ms với `cubic-bezier(0.23, 1, 0.32, 1)`; các nhãn, thẻ nhỏ trượt vào 160–220ms; con dấu đúng/sai nảy nhẹ ở mức `scale(0.95)` đến `scale(1)`. Tôn trọng `prefers-reduced-motion` và không tạo hiệu ứng liên tục khi người học đang đọc.

### Typography System
**Fraunces** cho từ tiếng Pháp, tiêu đề lớn và các điểm nhấn biên tập; **Manrope** cho hướng dẫn, nút và nội dung tiếng Việt để giữ độ rõ ở cỡ nhỏ. Từ đang học dùng Fraunces 600–700; tiêu đề trang dùng Manrope 700 chữ hoa thưa nhẹ; phần giải thích dùng Manrope 400–500, line-height rộng.

### Brand Essence
**Một carnet học tiếng Pháp biến dữ liệu từ vựng thành các phiên ôn ngắn, rõ và có cảm hứng — dành cho người học muốn tiến bộ đều mỗi ngày thay vì học dồn.**

Tính cách thương hiệu: **ấm áp, dí dỏm, có tổ chức**.

### Brand Voice
Tiêu đề, CTA và microcopy ngắn, cụ thể, khích lệ nhưng không sáo rỗng. Tránh các lời chào chung chung hoặc lời hứa phóng đại.

Ví dụ:
- “Một từ nữa, rồi bạn có thể gọi tên điều đang nghĩ bằng tiếng Pháp.”
- “Quên cũng được — đánh dấu để gặp lại từ này đúng lúc.”

### Wordmark & Logo
Biểu tượng **mẩu giấy gấp thành dấu sắc `é`**, kết hợp một dấu nháy xanh mực hình cánh chim. Wordmark “carnet” dùng Fraunces nghiêng tùy biến; logo chỉ là biểu tượng không có chữ để dùng trong header và favicon.

### Signature Brand Color
**Encre Marine — #163A5F**: xanh mực sâu, dùng cho điều hướng, chữ chủ đạo và đường viền nhận diện.

## Style Decisions

- **Quy tắc màu nhấn:** Encre Marine là màu mực chủ đạo; Moutarde chỉ dành cho hành động/điểm chú ý, Sage dành cho phản hồi đúng/hỗ trợ, và nâu đỏ chỉ được dùng như nét mực sửa bài hiếm khi cần biểu thị sai.
- **Quy tắc chất liệu:** mọi bề mặt học và tiến độ cần gợi cảm giác giấy, sổ ghi, băng keo, con dấu hoặc phần lề vở; tránh các khối thống kê mang cảm giác SaaS.
- **Quy tắc logo:** biểu tượng phải thể hiện rõ mẩu giấy gấp thành dấu sắc và nét chim mực xanh; wordmark “carnet” mang tính biên tập, không dùng kiểu chữ mặc định.
- **Gáy sổ & điều hướng:** thanh trái hoạt động như mục lục dán giấy, có đường chỉ lề, dấu chỉ mục và tab giấy cắt; không được trở thành sidebar SaaS thông thường.
- **Ảnh học tập:** ảnh bàn học luôn được xử lý như ảnh dán vào carnet bằng băng keo, mép cắt nhẹ, bóng giấy và chú thích mực nhỏ.
- **Mẩu giấy học:** các lựa chọn chế độ dưới ảnh bìa được bố trí như giấy rời trên bàn học; dùng lệch nhẹ, băng keo và nếp gấp thay vì một lưới ứng dụng đồng đều.
- **Tông giấy:** các màu phụ chỉ là giấy cũ nhạt; Encre Marine, kem, mù tạt và xanh sage luôn dẫn dắt thị giác.
- **Sổ điểm:** tiến độ và thống kê được trình bày như dấu mực, con dấu và cột sổ, không như widget năng suất tiêu chuẩn.
- **Chỉ mục chủ đề:** các chủ đề là những mẩu giấy rời xếp chồng, có mép cắt và băng keo washi lệch nhẹ; tránh một danh sách sản phẩm đồng nhất.
- **Tab đang chọn:** trạng thái chọn trong gáy sổ phải giống tab giấy được ghim vào lề, không dùng kiểu tô nền của sidebar SaaS.
- **Dấu ghi phiên:** số liệu phiên học dùng đường kẻ sổ, dấu chấm mực, viền con dấu và ghi chú viết tay để thể hiện tiến độ.
- **Gáy sổ:** cột trái là mục lục vật lý có đường chỉ lề, dấu ghim và các tab giấy dán; nhóm đang mở phải nhô ra như một nhãn được kéo khỏi mép sổ.
- **Giấy học:** các lựa chọn chế độ tạo thành những tờ ghi chú có kích thước và vị trí lệch nhịp có kiểm soát, thay vì một dãy thẻ bằng nhau.
- **Ghi chép tiến độ:** khu vực phiên học thêm ghi chú mực nhỏ, dấu tick và số phiên viết tay để giữ cảm giác nhật ký học tập.
- **Chỉ mục từ vựng:** danh sách từ theo chủ đề là trang chỉ mục carnet, dùng đường kẻ sổ, số thứ tự ở lề, mép giấy gấp và các mẩu từ lệch nhịp; không trình bày như bảng dữ liệu phẳng.
- **Số liệu phiên:** phần trăm và các số liệu học tập phải là con dấu hoặc ghi chép sổ tay có đường kẻ, tránh cảm giác bảng điều khiển năng suất.
- **Giọng ghi chú:** phần mô tả ngắn trong danh sách từ cần như lời nhắc ở lề sổ, cụ thể và ấm áp; tránh văn phong hướng dẫn trung tính khi không cần thiết.
