Bài 1.1

1. Tại sao component chỉ render 1 lần?
- Vì lúc mới mở trang React chỉ gọi component một lần để tạo giao diện ban đầu.
2. Khi nào nó sẽ render lại?
- Khi:
```javascript
setState(...)
```
- được gọi.

Bài 1.3 

3. Thử `typeof null` → giải thích kết quả
typeof null trả về "object" do một lỗi của JavaScript. Thực tế null không phải là object nhưng kết quả này vẫn được giữ để đảm bảo tương thích ngược.

Bài 1.4

1. Tính diện tích hình tròn với banKinh = 5 (PI * r²)
- Diện tích hình tròn: 78.53981633974483
2. Kiểm tra sinh viên đậu/tốt nghiệp: diemTB >= 5 && soTinChi >= 120
- Đủ điều kiện tốt nghiệp: true
3. Dùng template literal in ra: "Sinh viên [ten] đạt điểm [diem]"
- Sinh viên Minh đạt điểm 8.5