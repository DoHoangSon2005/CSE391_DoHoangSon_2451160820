// ===== SWITCH cơ bản =====
let ngay = 3;

switch (ngay) {
    case 1:
        console.log("Thứ Hai");
        break;
    case 2:
        console.log("Thứ Ba");
        break;
    case 3:
        console.log("Thứ Tư");
        break;
    case 4:
        console.log("Thứ Năm");
        break;
    case 5:
        console.log("Thứ Sáu");
        break;
    case 6:
        console.log("Thứ Bảy");
        break;
    case 0:
        console.log("Chủ Nhật");
        break;
    default:
        console.log("Ngày không hợp lệ");
}

// ===== SWITCH với nhóm case =====
let thang = 5;
let soNgay;

switch (thang) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        soNgay = 31;
        break;
    case 4: case 6: case 9: case 11:
        soNgay = 30;
        break;
    case 2:
        soNgay = 28; // Giả sử không nhuận
        break;
    default:
        soNgay = -1;
}

console.log(`Tháng ${thang} có ${soNgay} ngày`);

let so1 = 10;
let so2 = 5;
let phepTinh = "*";

switch (phepTinh) {
    case "+":
        console.log(so1 + so2);
        break;
    case "-":
        console.log(so1 - so2);
        break;
    case "*":
        console.log(so1 * so2);
        break;
    case "/":
        if (so2 !== 0) {
            console.log(so1 / so2);
        } else {
            console.log("Không thể chia cho 0");
        }
        break;
    default:
        console.log("Phép tính không hợp lệ");
}