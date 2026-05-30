// ===== Function Expression =====
const tinhBinhPhuong = function(so) {
    return so * so;
};

console.log(tinhBinhPhuong(5)); // 25

// ===== Arrow Function (ES6) =====
const tinhLapPhuong = (so) => {
    return so * so * so;
};

console.log(tinhLapPhuong(3)); // 27

// Arrow function viết ngắn (1 dòng)
const tinhChuVi = (a, b) => 2 * (a + b);
console.log(tinhChuVi(5, 3)); // 16

// Arrow function với 1 tham số (không cần ngoặc)
const inRa = x => console.log("Giá trị:", x);
inRa(42);

// ===== So sánh 3 cách viết =====

// Cách 1: Function Declaration
function cong1(a, b) {
    return a + b;
}

// Cách 2: Function Expression
const cong2 = function(a, b) {
    return a + b;
};

// Cách 3: Arrow Function
const cong3 = (a, b) => a + b;

console.log(cong1(1, 2)); // 3
console.log(cong2(1, 2)); // 3
console.log(cong3(1, 2)); // 3


const laNamNhuan = (nam) =>
    nam % 4 === 0 && (nam % 100 !== 0 || nam % 400 === 0);

console.log(laNamNhuan(2024)); 
console.log(laNamNhuan(2025));  


const chuyenDoiNhietDo = (doC) => (doC * 9 / 5) + 32;

console.log(chuyenDoiNhietDo(0));   
console.log(chuyenDoiNhietDo(25));  


const daoNguocChuoi = (str) =>
    str.split("").reverse().join("");

console.log(daoNguocChuoi("hello")); 
console.log(daoNguocChuoi("React")); 