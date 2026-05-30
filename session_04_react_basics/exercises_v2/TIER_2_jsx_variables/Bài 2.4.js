// ===== WHILE - kiểm tra điều kiện trước =====
let so = 1;
while (so <= 5) {
    console.log("Số:", so);
    so++;
}

// ===== WHILE - nhập cho đến khi đúng =====
// Giả lập: nhập số cho đến khi > 0
let nhap = -1;
let lanThu = 0;

while (nhap <= 0) {
    lanThu++;
    nhap = Math.floor(Math.random() * 10) - 3; // Random từ -3 đến 6
    console.log(`Lần thử ${lanThu}: ${nhap}`);
}
console.log(`Đã tìm thấy số dương: ${nhap}`);

// ===== DO...WHILE - chạy ít nhất 1 lần =====
let luaChon;
do {
    luaChon = Math.floor(Math.random() * 4) + 1;
    console.log("Lựa chọn:", luaChon);
} while (luaChon !== 3);

console.log("Đã chọn 3!");

// ===== BREAK và CONTINUE =====
// Break - dừng vòng lặp
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i); // In 1, 2, 3, 4
}

// Continue - bỏ qua lần lặp hiện tại
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue; // Bỏ qua số chẵn
    console.log(i); // Chỉ in số lẻ
}

let n = 5;
let giaiThua = 1;

while (n > 0) {
    giaiThua *= n;
    n--;
}

console.log("Giai thừa =", giaiThua);

let a = 0;
let b = 1;

while (b <= 1000) {
    let temp = a + b;
    a = b;
    b = temp;
}

console.log("Số Fibonacci đầu tiên > 1000 là:", b);

for (let i = 2; i <= 50; i++) {
    let laSoNguyenTo = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            laSoNguyenTo = false;
            break;
        }
    }

    if (laSoNguyenTo) {
        console.log(i);
    }
}