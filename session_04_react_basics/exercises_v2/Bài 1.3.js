// String (chuỗi)
let hoTen = "Nguyễn Văn A";
let diaChi = 'Hà Nội';
let template = `Sinh viên ${hoTen}`;

console.log(typeof hoTen);    // "string"
console.log(hoTen.length);    // 13

// Number (số)
let tuoi = 20;
let diem = 8.5;
let am = -5;
let voCuc = Infinity;

console.log(typeof tuoi);     // "number"

// Boolean (đúng/sai)
let laNam = true;
let coMat = false;

console.log(typeof laNam);    // "boolean"

// Null và Undefined
let chuaNhap = null;           // chủ động gán rỗng
let chuaKhoiTao;               // chưa gán giá trị

console.log(chuaNhap);        // null
console.log(chuaKhoiTao);     // undefined
console.log(typeof chuaNhap); // "object" (bug nổi tiếng của JS!)

// Array (mảng)
let monHoc = ["HTML", "CSS", "JS"];
console.log(typeof monHoc);   // "object"
console.log(Array.isArray(monHoc)); // true

// Object (đối tượng)
let sinhVien = {
    ten: "Minh",
    tuoi: 20,
    lop: "CNTT-K65"
};
console.log(typeof sinhVien); // "object"

// 1. Tạo 5 biến với 5 kiểu dữ liệu khác nhau
let ten = "Sơn";          // String
let tuoiSV = 20;          // Number
let daDangKy = true;      // Boolean
let ghiChu = null;        // Null
let diemTB;               // Undefined

// 2. Dùng typeof để kiểm tra
console.log(typeof ten);
console.log(typeof tuoiSV);
console.log(typeof daDangKy);
console.log(typeof ghiChu);
console.log(typeof diemTB);

// 3. Thử typeof null
console.log(typeof null);