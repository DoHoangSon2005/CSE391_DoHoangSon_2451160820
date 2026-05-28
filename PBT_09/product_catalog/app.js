const products = [

    {
        id: 1,
        name: "iPhone 16",
        price: 25990000,
        category: "phone",
        image: "https://placehold.co/200",
        rating: 4.5,
        inStock: true
    },

    {
        id: 2,
        name: "Samsung S24",
        price: 22990000,
        category: "phone",
        image: "https://placehold.co/200",
        rating: 4.4,
        inStock: true
    },

    {
        id: 3,
        name: "MacBook Pro",
        price: 45990000,
        category: "laptop",
        image: "https://placehold.co/200",
        rating: 4.8,
        inStock: true
    },

    {
        id: 4,
        name: "Dell XPS",
        price: 35990000,
        category: "laptop",
        image: "https://placehold.co/200",
        rating: 4.6,
        inStock: true
    },

    {
        id: 5,
        name: "AirPods Pro",
        price: 6990000,
        category: "accessory",
        image: "https://placehold.co/200",
        rating: 4.3,
        inStock: true
    },

    {
        id: 6,
        name: "Galaxy Buds",
        price: 3490000,
        category: "accessory",
        image: "https://placehold.co/200",
        rating: 4.1,
        inStock: true
    },

    {
        id: 7,
        name: "iPad Air",
        price: 16990000,
        category: "tablet",
        image: "https://placehold.co/200",
        rating: 4.5,
        inStock: true
    },

    {
        id: 8,
        name: "Xiaomi Pad 6",
        price: 7990000,
        category: "tablet",
        image: "https://placehold.co/200",
        rating: 4.2,
        inStock: true
    },

    {
        id: 9,
        name: "ThinkPad X1",
        price: 32990000,
        category: "laptop",
        image: "https://placehold.co/200",
        rating: 4.7,
        inStock: true
    },

    {
        id: 10,
        name: "Pixel 9",
        price: 19990000,
        category: "phone",
        image: "https://placehold.co/200",
        rating: 4.6,
        inStock: true
    },

    {
        id: 11,
        name: "Apple Watch",
        price: 9990000,
        category: "accessory",
        image: "https://placehold.co/200",
        rating: 4.4,
        inStock: true
    },

    {
        id: 12,
        name: "Galaxy Tab",
        price: 12990000,
        category: "tablet",
        image: "https://placehold.co/200",
        rating: 4.3,
        inStock: true
    }

];

let filteredProducts = [...products];

let cartCount = 0;

const header = document.createElement("div");
header.className = "header";

const title = document.createElement("h1");
title.textContent = "Product Catalog";

const cart = document.createElement("div");
cart.className = "cart";

cart.innerHTML = "🛒";

const badge = document.createElement("span");
badge.className = "badge";
badge.textContent = "0";

cart.appendChild(badge);

header.appendChild(title);
header.appendChild(cart);

document.body.appendChild(header);

const controls = document.createElement("div");
controls.className = "controls";

const searchInput = document.createElement("input");
searchInput.placeholder = "Search products...";

const categories = ["all", "phone", "laptop", "tablet", "accessory"];

categories.forEach(category => {

    const button = document.createElement("button");

    button.textContent = category;

    button.addEventListener("click", () => {
        filterByCategory(category);
    });

    controls.appendChild(button);

});

const sortSelect = document.createElement("select");

sortSelect.innerHTML = `
    <option value="">Sort</option>
    <option value="price-asc">Giá tăng</option>
    <option value="price-desc">Giá giảm</option>
    <option value="name">Tên A-Z</option>
    <option value="rating">Rating cao nhất</option>
`;

const darkBtn = document.createElement("button");

darkBtn.textContent = "Dark Mode";

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});

controls.appendChild(searchInput);
controls.appendChild(sortSelect);
controls.appendChild(darkBtn);

document.body.appendChild(controls);

const productContainer = document.createElement("div");

productContainer.id = "productContainer";

document.body.appendChild(productContainer);

function renderProducts(data) {

    productContainer.innerHTML = "";

    data.forEach(product => {

        const card = document.createElement("div");

        card.className = "card";

        const img = document.createElement("img");
        img.src = product.image;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.textContent =
            product.price.toLocaleString() + "đ";

        const rating = document.createElement("p");
        rating.textContent =
            "⭐ " + product.rating;

        const button = document.createElement("button");
        button.textContent = "Thêm giỏ";

        button.addEventListener("click", (e) => {

            e.stopPropagation();

            cartCount++;

            badge.textContent = cartCount;

        });

        card.addEventListener("click", () => {

            showModal(product);

        });

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(rating);
        card.appendChild(button);

        productContainer.appendChild(card);

    });

}

searchInput.addEventListener("input", () => {

    const keyword =
        searchInput.value.toLowerCase();

    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );

    renderProducts(filteredProducts);

});

function filterByCategory(category) {

    if (category === "all") {

        filteredProducts = [...products];

    } else {

        filteredProducts = products.filter(product =>
            product.category === category
        );

    }

    renderProducts(filteredProducts);

}

sortSelect.addEventListener("change", () => {

    const value = sortSelect.value;

    if (value === "price-asc") {

        filteredProducts.sort((a, b) =>
            a.price - b.price
        );

    }

    else if (value === "price-desc") {

        filteredProducts.sort((a, b) =>
            b.price - a.price
        );

    }

    else if (value === "name") {

        filteredProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
        );

    }

    else if (value === "rating") {

        filteredProducts.sort((a, b) =>
            b.rating - a.rating
        );

    }

    renderProducts(filteredProducts);

});

function showModal(product) {

    const modal = document.createElement("div");

    modal.className = "modal";

    const content = document.createElement("div");

    content.className = "modal-content";

    content.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}">
        <p>Giá: ${product.price.toLocaleString()}đ</p>
        <p>Category: ${product.category}</p>
        <p>Rating: ${product.rating}</p>
    `;

    modal.appendChild(content);

    document.body.appendChild(modal);

    modal.addEventListener("click", () => {
        modal.remove();
    });

}

renderProducts(products);