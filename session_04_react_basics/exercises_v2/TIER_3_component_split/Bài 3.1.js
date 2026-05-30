// ===== Khai báo hàm =====
function chaoHoi() {
    console.log("Xin chào các bạn!");
    console.log("Chào mừng đến với môn CSE391");
}

// Gọi hàm
chaoHoi();
chaoHoi(); // Gọi lại được nhiều lần

// ===== Hàm có tham số =====
function chaoTen(ten) {
    console.log(`Xin chào ${ten}!`);
}

chaoTen("Minh");
chaoTen("An");
chaoTen("Linh");

// ===== Hàm có nhiều tham số =====
function tinhTong(a, b) {
    let ketQua = a + b;
    console.log(`${a} + ${b} = ${ketQua}`);
    return ketQua; // Trả về giá trị
}

let tong = tinhTong(5, 3);
console.log("Kết quả:", tong);

// ===== Hàm với giá trị mặc định =====
function tinhDienTich(r, pi = 3.14) {
    return pi * r * r;
}

console.log("Diện tích (r=5):", tinhDienTich(5));
console.log("Diện tích (r=5, PI chính xác):", tinhDienTich(5, Math.PI));

function kiemTraChanLe(so) {
    if (so % 2 === 0) {
        return "Chẵn";
    }
    return "Lẻ";
}

console.log(kiemTraChanLe(10));
console.log(kiemTraChanLe(7));

function tinhGiaiThua(n) {
    let giaiThua = 1;

    for (let i = 1; i <= n; i++) {
        giaiThua *= i;
    }

    return giaiThua;
}

console.log(tinhGiaiThua(5));

function timMax(a, b, c) {
    let max = a;

    if (b > max) max = b;
    if (c > max) max = c;

    return max;
}

console.log(timMax(4, 7, 2));
console.log(timMax(10, 5, 15));