// ===== IF/ELSE cơ bản =====
let diem = 7.5;

if (diem >= 8) {
    console.log("Giỏi");
} else if (diem >= 6.5) {
    console.log("Khá");
} else if (diem >= 5) {
    console.log("Trung bình");
} else {
    console.log("Yếu");
}

// ===== Kiểm tra nhiều điều kiện =====
let tuoi = 20;
let coGPLX = true;

if (tuoi >= 18 && coGPLX) {
    console.log("Được phép lái xe");
} else if (tuoi >= 18 && !coGPLX) {
    console.log("Cần thi lấy bằng");
} else {
    console.log("Chưa đủ tuổi");
}

// ===== Toán tử 3 ngôi (Ternary) =====
let so = 10;
let ketQua = (so % 2 === 0) ? "Số chẵn" : "Số lẻ";
console.log(ketQua);

// ===== Kiểm tra giá trị rỗng =====
let ten = "";

if (!ten) {
    console.log("Chưa nhập tên");
} else {
    console.log("Xin chào", ten);
}

let diemXepLoai = 8.5;

if (diemXepLoai < 0 || diemXepLoai > 10) {
    console.log("Điểm không hợp lệ");
} else if (diemXepLoai >= 9) {
    console.log("Xuất sắc");
} else if (diemXepLoai >= 8) {
    console.log("Giỏi");
} else if (diemXepLoai >= 7) {
    console.log("Khá");
} else if (diemXepLoai >= 5) {
    console.log("Trung bình");
} else {
    console.log("Yếu");
}

let nam = 2024;

if (nam % 4 === 0 && (nam % 100 !== 0 || nam % 400 === 0)) {
    console.log(nam + " là năm nhuận");
} else {
    console.log(nam + " không phải năm nhuận");
}

let laNamNhuan =
    nam % 4 === 0 &&
    (nam % 100 !== 0 || nam % 400 === 0);

console.log(laNamNhuan);