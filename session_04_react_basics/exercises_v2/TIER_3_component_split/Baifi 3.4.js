// ===== Global Scope =====
let bienToanCuc = "Tôi ở ngoài cùng";

function hamA() {
    console.log(bienToanCuc); // Truy cập được
}

hamA();
console.log(bienToanCuc); // Truy cập được

// ===== Local Scope =====
function hamB() {
    let bienLocal = "Tôi chỉ trong hamB";
    console.log(bienLocal); // OK
}

hamB();
// console.log(bienLocal); // ❌ Lỗi! Không truy cập được

// ===== Block Scope (let/const) =====
if (true) {
    let trongBlock = "Chỉ trong if";
    const cungTrongBlock = "Cũng chỉ trong if";
    var varTrongBlock = "Tôi thoát ra ngoài!"; // var không bị block scope
}

// console.log(trongBlock);        // ❌ Lỗi
// console.log(cungTrongBlock);    // ❌ Lỗi
console.log(varTrongBlock);       // ✅ "Tôi thoát ra ngoài!"

// ===== Closure đơn giản =====
function taoBoDem() {
    let dem = 0;
    
    return function() {
        dem++;
        return dem;
    };
}

let boDem = taoBoDem();
console.log(boDem()); // 1
console.log(boDem()); // 2
console.log(boDem()); // 3

// Mỗi lần gọi taoBoDem() sẽ tạo bộ đếm mới
let boDem2 = taoBoDem();
console.log(boDem2()); // 1 (bắt đầu lại)


let x = 10;

function test() {
    console.log(x);
    let x = 20;
    console.log(x);
}

function taoMayTinh() {
    return {
        cong(a, b) {
            return a + b;
        },

        tru(a, b) {
            return a - b;
        },

        nhan(a, b) {
            return a * b;
        },

        chia(a, b) {
            return a / b;
        }
    };
}

let mayTinh = taoMayTinh();

console.log(mayTinh.cong(5, 3));   
console.log(mayTinh.tru(5, 3));    
console.log(mayTinh.nhan(5, 3));   
console.log(mayTinh.chia(6, 3));   