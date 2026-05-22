Câu A1

1. Đoạn 1
- Output:
+ undefined
- Giải thích:
+ var bị hoisting
+ Biến được tạo trước nhưng chưa gán giá trị
+ Nên in ra undefined

2. Đoạn 2
- Output:
+ ReferenceError
- Giải thích:
+ let cũng hoisting nhưng không được dùng trước khi khai báo
+ Gọi trước → lỗi

3. Đoạn 3
- Output:
+ TypeError
- Giải thích:
+ const không thể gán lại giá trị

4. Đoạn 4
- Output:
+ (4) [1, 2, 3, 4]
- Giải thích:
+ const không cho đổi biến
+ Nhưng vẫn sửa được nội dung bên trong array/object

5. Đoạn 5
- Output:
+ Trong block: 2
+ Ngoài block: 1
- Giải thích:
+ let có block scope
+ Biến trong block khác biến bên ngoài

Câu A2

- console.log(typeof null);        // "object"
- console.log(typeof undefined);   // "undefined"
- console.log(typeof NaN);         // "number"
- console.log("5" + 3);            // "53"
- console.log("5" - 3);            // 2
- console.log("5" * "3");          // 15
- console.log(true + true);        // 2
- console.log([] + []);            // ""
- console.log([] + {});            // "[object Object]"
- console.log({} + []);            // "[object Object]"
- Giải thích
+ "5" + 3 = "53" vì dấu + dùng để nối chuỗi, "5" là string, 3 bị đổi thành "3" , nối lại thành "53"
+ "5" - 3 = 2 vì dấu - chỉ dùng cho toán học, 5 - 3 = 2

Câu A3

- console.log(5 == "5");           // true
- console.log(5 === "5");          // false
- console.log(null == undefined);  // true
- console.log(null === undefined); // false
- console.log(NaN == NaN);         // false
- console.log(0 == false);         // true
- console.log(0 === false);        // false
- console.log("" == false);        // true
- Giải thích
+ == so sánh giá trị, JavaScript tự ép kiểu dữ liệu
+ === so sánh cả giá trị và kiểu dữ liệu, JavaScript không tự ép kiểu dữ liệu
- Nên dùng
+ === vì chính xác hơn, không bị lỗi do ép kiểu

Cây A4

- Các giá trị falsy
+ false
+ 0
+ -0
+ 0n
+ ""
+ null
+ undefined
+ NaN
+ document.all
- Đáp án
+ if ("0") console.log("A");    // In
+ if ("") console.log("B");     // Không in
+ if ([]) console.log("C");     // In
+ if ({}) console.log("D");     // In
+ if (null) console.log("E");   // Không in
+ if (0) console.log("F");      // Không in
+ if (-1) console.log("G");     // In
+ if (" ") console.log("H");    // In
- Kết quả
+ A
+ C
+ D
+ G
+ H

Câu A5
```javascript
// Cách 1
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
// Cách 2
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
// Cách 3
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```

Câu C1

- Lỗi 1 — Thiếu ;
+ Sửa: return "Phần trăm giảm không hợp lệ"
+ thành: return "Phần trăm giảm không hợp lệ";
+ Giải thích: thiếu dấu ; cuối dòng. JS vẫn chạy được nhưng không đúng chuẩn
Lỗi 2 — Không kiểm tra input có phải số không
+ Sửa: const gia = tinhGiaGiamGia("100000", 20) 
+ thành:

if (isNaN(giaBan) || isNaN(phanTramGiam)) {
    return "Input không hợp lệ";
}

+ Giải thích: "100000" là string, nên cần validate dữ liệu đầu vào
- Lỗi 3 — Dùng = thay vì ===
+ Sửa: if (giaSauGiam = 0)
+ thành: if (giaSauGiam === 0)
+ Giải thích: = là gán giá trị, === mới là so sánh
- Lỗi 4 — Thiếu ; ở console.log
+ Sửa: console.log("Sản phẩm miễn phí!")
+ thành: console.log("Sản phẩm miễn phí!");
+ Giải thích: thiếu dấu ; cuối dòng. JS vẫn chạy được nhưng không đúng chuẩn
- Lỗi 5 — var trong vòng lặp với setTimeout
+ Sửa: for (var i = 0; i < 5; i++) {
+ thành: for (let i = 0; i < 5; i++) {
+ Giải thích: var không có block scope, Callback trong setTimeout dùng chung biến i
- Lỗi 6 — Nên ép kiểu Number
+ Sửa: const gia = tinhGiaGiamGia("100000", 20)
+ thành: 

giaBan = Number(giaBan);

phanTramGiam = Number(phanTramGiam);

+ Giải thích: Đảm bảo phép tính luôn dùng number.