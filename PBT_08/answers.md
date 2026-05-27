Câu A1

- 3 cách
1. Function Declaration
```javascript
function tinhThueBaoHiem(luong) {

    let thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };

}
```
2. Function Expression
```javascript
const tinhThueBaoHiem = function(luong) {

    let thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };

};
```
3. Arrow Function
```javascript
const tinhThueBaoHiem = (luong) => {

    let thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };

};
```
- Hoisting
1. Function Declaration: Có hoisting
```javascript
sayHello();

function sayHello() {

    console.log("Hello");

}
```
2. Function Expression: Không hoisting đầy đủ
```javascript
sayHello();

const sayHello = function() {

    console.log("Hello");

};
```
3. Arrow Function: Không hoisting đầy đủ
```javascript
sayHello();

const sayHello = () => {

    console.log("Hello");

};
```

Câu A2

1. output
- đoạn 1
+ console.log(c.increment());  // 1
+ console.log(c.increment());  // 2
+ console.log(c.increment());  // 3
+ console.log(c.decrement());  // 2
+ console.log(c.getCount());   // 2
- đoạn 2
+ var: 3
+ var: 3
+ var: 3
+ let: 0
+ let: 1
+ let: 2
2. Tại sao var và let cho kết quả khác nhau trong vòng lặp setTimeout
- đoạn 1
+ Biến count được các hàm nhớ lại nhờ closure nên giá trị tăng/giảm liên tục.
- đoạn 2
+ var dùng chung 1 biến i
+ → vòng lặp xong thì i = 3
+ → tất cả setTimeout đều in 3
+ let tạo biến mới mỗi vòng lặp
+ → nhớ riêng 0, 1, 2

Câu A3
```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. Lấy các số chẵn                    → [2, 4, 6, 8, 10]
nums.filter(n => n % 2 === 0);
// 2. Nhân mỗi số với 3                  → [3, 6, 9, ..., 30]
nums.map(n => n * 3);
// 3. Tính tổng tất cả                   → 55
nums.reduce((sum, n) => sum + n, 0);
// 4. Tìm số đầu tiên > 7               → 8
nums.find(n => n > 7);
// 5. Kiểm tra CÓ số > 10 không         → false
nums.some(n => n > 10);
// . Kiểm tra TẤT CẢ đều > 0           → true
nums.every(n => n > 0);
// 7. Tạo mảng "Số X là [chẵn/lẻ]"      → ["Số 1 là lẻ", "Số 2 là chẵn", ...]
nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);
// 8. Đảo ngược mảng (không mutate gốc)  → [10, 9, ..., 1]
[...nums].reverse();
```

Câu A4

```javascript
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: { ram: 8, storage: 256, color: "Titan" }
};

// Destructuring
const { name, price, specs: { ram, color } } = product;
console.log(name, price, ram, color);  // iPhone 16 25990000 8 Titan
console.log(specs);                     // ReferenceError: specs is not defined

// Spread
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price);            // 23990000
console.log(updated.sale);             // true
console.log(product.price);            // 25990000 (object gốc không đổi)

// Spread gotcha
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram);        // 16 Vì spread chỉ copy nông, specs vẫn dùng chung object
```