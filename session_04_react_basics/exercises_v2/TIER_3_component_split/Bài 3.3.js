// ===== Truyền mảng vào hàm =====
function tinhDiemTB(diemList) {
    let tong = 0;
    for (let diem of diemList) {
        tong += diem;
    }
    return tong / diemList.length;
}

let diemSV = [7, 8, 6.5, 9, 7.5];
console.log("Điểm TB:", tinhDiemTB(diemSV));

// ===== Trả về mảng =====
function laySoChan(arr) {
    let ketQua = [];
    for (let so of arr) {
        if (so % 2 === 0) {
            ketQua.push(so);
        }
    }
    return ketQua;
}

let soNgauNhien = [1, 4, 7, 2, 9, 6, 3, 8];
console.log("Số chẵn:", laySoChan(soNgauNhien));

// ===== Hàm callback (hàm truyền vào hàm khác) =====
function xuLyMang(arr, hamXuLy) {
    let ketQua = [];
    for (let item of arr) {
        ketQua.push(hamXuLy(item));
    }
    return ketQua;
}

// Nhân đôi mỗi phần tử
let mangGoc = [1, 2, 3, 4, 5];
let mangDoi = xuLyMang(mangGoc, x => x * 2);
console.log("Nhân đôi:", mangDoi); // [2, 4, 6, 8, 10]

// Chuyển thành chuỗi
let mangChuoi = xuLyMang(mangGoc, x => `Số ${x}`);
console.log("Chuỗi:", mangChuoi);



function timSoLonNhat(arr) {
    let max = arr[0];

    for (let so of arr) {
        if (so > max) {
            max = so;
        }
    }

    return max;
}

console.log(timSoLonNhat([4, 7, 2, 9, 1, 5])); // 9

function demSoAm(arr) {
    let dem = 0;

    for (let so of arr) {
        if (so < 0) {
            dem++;
        }
    }

    return dem;
}

console.log(demSoAm([-2, 5, -1, 8, -7])); // 3

function locDiemCao(arr, diemCan) {
    let ketQua = [];

    for (let diem of arr) {
        if (diem >= diemCan) {
            ketQua.push(diem);
        }
    }

    return ketQua;
}

let diemMoi  = [7, 8.5, 4, 9, 6, 5.5];
console.log(locDiemCao(diemMoi , 7)); // [7, 8.5, 9]