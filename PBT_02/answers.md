Câu A1
+ type="text" → Ô nhập văn bản → Có thể dùng minlength, maxlength → Dùng nhập họ tên
+ type="email" → Ô nhập email → Tự kiểm tra có @ → Dùng đăng ký tài khoản
+ type="password" → Ô nhập mật khẩu (ẩn ký tự) → Dùng minlength, pattern → Dùng đăng nhập
+ type="number" → Ô nhập số (có nút tăng/giảm) → Dùng min, max → Dùng nhập số lượng sản phẩm
+ type="tel" → Ô nhập số điện thoại → Dùng pattern → Dùng nhập SĐT giao hàng
+ type="date" → Ô chọn ngày (calendar) → Dùng min, max → Dùng chọn ngày nhận hàng
+ type="color" → Bảng chọn màu → Không validation → Dùng chọn màu sản phẩm
+ type="range" → Thanh kéo (slider) → Dùng min, max → Dùng lọc giá sản phẩm
+ type="file" → Upload file → Dùng accept, multiple → Dùng upload ảnh đánh giá
+ type="url" → Ô nhập link → Tự kiểm tra http/https → Dùng nhập website người bán

Câu A2
+ Trường hợp 1: Không submit được do thuộc tính required bắt buộc phải nhập, nhưng ô đang để trống
+ Trường hợp 2: Không submit được do type="email" yêu cầu đúng định dạng email (phải có @), nhưng giá trị "abc" không hợp lệ
+ Trường hợp 3: Không submit được do giá trị nhập là 15 vượt quá max="10" nên bị lỗi
+ Trường hợp 4: Không submit được do pattern=[0-9]{10} yêu cầu đúng 10 chữ số, nhưng "abc123" không đúng định dạng
+ Trường hợp 5: Không submit được do minlength="8" yêu cầu ít nhất 8 ký tự, nhưng "123" chỉ có 3 ký tự

Câu A3

1. 
+ label giúp liên kết với input thông qua for và id. Khi click vào label thì con trỏ sẽ tự động vào ô input giúp người dùng biết chức năng của ô nhập.
2. 
+ Dùng khi có nhiều input cùng một nhóm thông tin. fieldset dùng để nhóm các ô nhập, legend là tiêu đề của nhóm.
+ Ví dụ: Nhóm thông tin tài khoản trong form đăng ký
```html
<fieldset>
    <legend>Thông tin tài khoản</legend>
    <label for="username">Tên đăng nhập:</label>
    <input type="text" id="username" name="username">
    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password">
</fieldset>
```
3. 
+ Dùng khi phần tử không có chữ hiển thị nhưng vẫn cần mô tả chức năng, ví dụ nút chỉ có icon.
4. 
+ Vì label đã mô tả đầy đủ rồi. Nếu dùng thêm aria-label sẽ bị trùng thông tin, gây rối.

Câu A4

1. 
+ Giúp ảnh chỉ tải khi cuộn tới gần vị trí của ảnh 
+ tăng tốc độ load trang, tiết kiệm dữ liệu.
+ Không nên dùng cho ảnh quan trọng ở đầu trang vì cần hiển thị ngay.
2. 
+ dùng nhiều source trong video Vì mỗi trình duyệt hỗ trợ định dạng khác nhau, nên cần nhiều nguồn để đảm bảo video chạy được.
+ Format phổ biến: MP4, WebM, OGG.
3. 
+ Mô tả nội dung ảnh và hiển thị khi ảnh lỗi.
+ Ví dụ: iPhone 16: alt="iPhone 16 màu đen", Ảnh trang trí: alt="", Biểu đồ: alt="Biểu đồ doanh thu Q1/2026"

Câu A5 
1. Cách 1: img
+ Dùng khi chỉ cần hiển thị ảnh đơn giản, không cần chú thích.
+ Ví dụ: Ảnh logo website trên header, anh icon nhỏ trong nút bấm
2. Cách 2: figure
+ Dùng khi ảnh cần có mô tả hoặc chú thích đi kèm.
+ Ví dụ: Ảnh sản phẩm kèm tên và giá, anh biểu đồ kèm mô tả nội dung