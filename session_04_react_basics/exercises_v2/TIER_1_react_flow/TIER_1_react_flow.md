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
- typeof null trả về "object" do một lỗi của JavaScript. Thực tế null không phải là object nhưng kết quả này vẫn được giữ để đảm bảo tương thích ngược.
