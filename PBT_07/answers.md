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
+ [1, 2, 3, 4]
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