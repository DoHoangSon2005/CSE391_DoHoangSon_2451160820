Bài 0.1

1. File .jsx khác gì file .js?
- .js → JavaScript thông thường.
- .jsx → JavaScript + JSX (cú pháp giống HTML trong React).
2. Tại sao phải export default App?
- Để file khác có thể import và sử dụng component App.
3. Thử xóa export default → chuyện gì xảy ra?
- React sẽ báo lỗi khi import:
```
The requested module './App.jsx' does not provide an export named 'default'
```
- Vì main.jsx không lấy được component App.

Bài 0.2

1. Viết component UserProfile
```jsx
function UserProfile() {
    return (
        <div className="profile">
            <h1>Hồ sơ cá nhân</h1>

            <img
                src="photo.jpg"
                alt="Ảnh đại diện"
            />

            <table>
                <tbody>
                    <tr>
                        <td>Họ tên:</td>
                        <td>Minh</td>
                    </tr>

                    <tr>
                        <td>Email:</td>
                        <td>minh@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserProfile;
```

2. Viết component ProductInfo
```jsx
function ProductInfo() {
    return (
        <div className="product">
            <h2>iPhone 15</h2>

            <p className="price">
                25.000.000đ
            </p>

            <ul>
                <li>Màn hình: 6.1 inch</li>
                <li>Camera: 48MP</li>
                <li>Pin: 3349 mAh</li>
            </ul>

            <button>Mua ngay</button>
        </div>
    );
}

export default ProductInfo;
```