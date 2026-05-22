const foods = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 }
];


const hasTip = true;

const day = "Wednesday";

let subtotal = 0;

console.log("╔══════════════════════════════════════╗");
console.log("║         HÓA ĐƠN NHÀ HÀNG           ║");
console.log("╠══════════════════════════════════════╣");

for (let i = 0; i < foods.length; i++) {

    let food = foods[i];

    let total = food.price * food.quantity;

    subtotal += total;

    console.log(
        `║ ${i + 1}. ${food.name} x${food.quantity} = ${total.toLocaleString()}đ`
    );
}

console.log("╠══════════════════════════════════════╣");

let discountPercent = 0;

if (subtotal > 1000000) {
    discountPercent = 15;
}
else if (subtotal > 500000) {
    discountPercent = 10;
}

if (day === "Wednesday") {
    discountPercent += 5;
}

let discount = subtotal * discountPercent / 100;

let afterDiscount = subtotal - discount;

let vat = afterDiscount * 0.08;

let tip = 0;

if (hasTip) {
    tip = afterDiscount * 0.05;
}

let finalTotal = afterDiscount + vat + tip;

console.log(
    `║ Tổng cộng: ${subtotal.toLocaleString()}đ`
);

console.log(
    `║ Giảm giá (${discountPercent}%): -${discount.toLocaleString()}đ`
);

console.log(
    `║ VAT (8%): ${vat.toLocaleString()}đ`
);

console.log(
    `║ Tip (5%): ${tip.toLocaleString()}đ`
);

console.log("╠══════════════════════════════════════╣");

console.log(
    `║ THANH TOÁN: ${finalTotal.toLocaleString()}đ`
);

console.log("╚══════════════════════════════════════╝");
