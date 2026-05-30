Bài 1.1

1. Tại sao component chỉ render 1 lần?
- Vì lúc mới mở trang React chỉ gọi component một lần để tạo giao diện ban đầu.
2. Khi nào nó sẽ render lại?
- Khi state thay đổi (setState, useState), props thay đổi hoặc component cha render lại.

Bài 1.2

1. Chạy BadCounter → nhấn nút → thấy gì?
→ Giá trị trong Console tăng (1, 2, 3, ...) nhưng số trên màn hình vẫn là 0.
2. Chạy GoodCounter → nhấn nút → thấy gì?
→ Số trên màn hình tăng lên (1, 2, 3, ...) sau mỗi lần nhấn.
3. Mở Console → thấy log "render"几次?
→ Mỗi lần gọi setCount() thì component sẽ render lại 1 lần (ở chế độ development có thể thấy nhiều hơn do React Strict Mode).
