function createCart() {

    let items = [];
    let discount = 0;

    return {

        addItem(product, quantity = 1) {

            const existingItem = items.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({
                    ...product,
                    quantity: quantity
                });
            }

        },

        removeItem(productId) {

            items = items.filter(item => item.id !== productId);

        },

        updateQuantity(productId, newQuantity) {

            const item = items.find(item => item.id === productId);

            if (item) {
                item.quantity = newQuantity;
            }

        },

        getTotal() {

            let total = items.reduce((sum, item) => {
                return sum + (item.price * item.quantity);
            }, 0);

            total = total - discount;

            return total;

        },

        applyDiscount(code) {

            const total = items.reduce((sum, item) => {
                return sum + (item.price * item.quantity);
            }, 0);

            if (code === "SALE10") {
                discount = total * 0.1;
            }
            else if (code === "SALE20") {
                discount = total * 0.2;
            }
            else if (code === "FREESHIP") {
                discount = 30000;
            }
            else {
                console.log("Mã giảm giá không hợp lệ");
            }

        },

        printCart() {

            console.log("===== GIỎ HÀNG =====");

            console.table(items.map(item => ({
                "Sản phẩm": item.name,
                "SL": item.quantity,
                "Đơn giá": item.price.toLocaleString() + "đ",
                "Tổng": (item.price * item.quantity).toLocaleString() + "đ"
            })));

            console.log(
                "Tổng cộng:",
                this.getTotal().toLocaleString() + "đ"
            );

        },

        getItemCount() {

            return items.reduce((sum, item) => {
                return sum + item.quantity;
            }, 0);

        },

        clearCart() {

            items = [];
            discount = 0;

        }

    };

}

const cart = createCart();

cart.addItem(
    { id: 1, name: "iPhone 16", price: 25990000 },
    1
);

cart.addItem(
    { id: 3, name: "AirPods Pro", price: 6990000 },
    2
);

cart.addItem(
    { id: 1, name: "iPhone 16", price: 25990000 },
    1
);

cart.printCart();

cart.applyDiscount("SALE10");

cart.printCart();

console.log("Số SP:", cart.getItemCount());

cart.removeItem(3);

console.log("Sau xóa:", cart.getItemCount());