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
Trường hợp 1: Không submit được do thuộc tính required bắt buộc phải nhập, nhưng ô đang để trống
Trường hợp 2: Không submit được do type="email" yêu cầu đúng định dạng email (phải có @), nhưng giá trị "abc" không hợp lệ
Trường hợp 3: Không submit được do giá trị nhập là 15 vượt quá max="10" nên bị lỗi
Trường hợp 4: Không submit được do pattern=[0-9]{10} yêu cầu đúng 10 chữ số, nhưng "abc123" không đúng định dạng
Trường hợp 5: Không submit được do minlength="8" yêu cầu ít nhất 8 ký tự, nhưng "123" chỉ có 3 ký tự