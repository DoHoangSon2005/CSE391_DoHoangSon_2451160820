// ===== Toán tử số học =====
let a = 10, b = 3;

console.log("Cộng:", a + b);      // 13
console.log("Trừ:", a - b);       // 7
console.log("Nhân:", a * b);      // 30
console.log("Chia:", a / b);      // 3.333...
console.log("Chia lấy dư:", a % b); // 1
console.log("Lũy thừa:", a ** b); // 1000

// ===== Toán tử chuỗi =====
let ho = "Nguyễn";
let ten = "Minh";
let hoTen = ho + " " + ten;      // Nối chuỗi
console.log(hoTen);

// Template literal (cách hay hơn)
let loiChao = `Xin chào ${hoTen}!`;
console.log(loiChao);

// ===== Toán tử so sánh =====
console.log(5 == "5");    // true  (so sánh giá trị)
console.log(5 === "5");   // false (so sánh giá trị + kiểu)
console.log(5 != "5");    // false
console.log(5 !== "5");   // true

console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(10 >= 10);    // true

// ===== Toán tử logic =====
let diem = 7.5;
let soBuoiHoc = 12;

// AND (&&) - cả hai đều đúng
console.log(diem >= 5 && soBuoiHoc >= 10); // true

// OR (||) - một trong hai đúng
console.log(diem >= 8 || soBuoiHoc >= 10); // true

// NOT (!) - đảo ngược
console.log(!(diem < 5));  // true

let banKinh = 5;
let dienTich = Math.PI * banKinh ** 2;

console.log("Diện tích hình tròn:", dienTich);

let diemTB = 7.2;
let soTinChi = 125;

let totNghiep = diemTB >= 5 && soTinChi >= 120;

console.log("Đủ điều kiện tốt nghiệp:", totNghiep);

let tenSV = "Minh";
let diemSV = 8.5;

console.log(`Sinh viên ${tenSV} đạt điểm ${diemSV}`);