// ===== FOR cơ bản =====
// In từ 1 đến 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// ===== Tính tổng 1 đến 100 =====
let tong = 0;
for (let i = 1; i <= 100; i++) {
    tong += i;
}
console.log("Tổng 1+2+...+100 =", tong);

// ===== Lặp qua mảng =====
let monHoc = ["HTML", "CSS", "JavaScript", "React"];

for (let i = 0; i < monHoc.length; i++) {
    console.log(`Môn ${i + 1}: ${monHoc[i]}`);
}

// ===== FOR...OF (cách viết ngắn hơn) =====
for (let mon of monHoc) {
    console.log("Học:", mon);
}

// ===== FOR...IN (cho object) =====
let sinhVien = {
    ten: "Minh",
    tuoi: 20,
    lop: "CNTT-K65"
};

for (let key in sinhVien) {
    console.log(`${key}: ${sinhVien[key]}`);
}

// ===== Vòng lặp lồng nhau =====
// Bảng cửu chương
for (let i = 2; i <= 9; i++) {
    console.log(`\n=== Bảng ${i} ===`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let mang = [4, 7, 2, 9, 1, 5];
let max = mang[0];

for (let i = 1; i < mang.length; i++) {
    if (mang[i] > max) {
        max = mang[i];
    }
}

console.log("Số lớn nhất:", max);

let dem = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        dem++;
    }
}

console.log("Có", dem, "số chia hết cho 3");