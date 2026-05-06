Câu A1
1. Inline CSS (trong thẻ) 
+ Ví dụ: 
```html
<h1 style="color: red; font-size: 24px;">Tiêu đề</h1>
```
+ Ưu điểm: Nhanh, Dễ debug
+ Nhược điểm: Khó bảo trì, code rối, không tái sử dụng
+ Dùng: Test nhanh, sửa lỗi nhỏ

2. Internal CSS (trong style)
+ Ví dụ: 
```html
<head>
    <style>
        h1 { color: red; font-size: 24px; }
    </style>
</head>
```
+ Ưu điểm: Dễ quản lý, không cần file riêng
+ Nhược điểm: Chỉ dùng cho 1 trang, không tái sử dụng
+ Dùng: Prototype, dự án nhỏ

3. External CSS (file riêng)
+ Ví dụ: 
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```
+ Ưu điểm: Dễ bảo trì, tái sử dụng được
+ Nhược điểm: Phải load file CSS
+ Dùng: Website, dự án lớn

Câu A2
1. h1                           → Chọn: ShopTLU
2. .price                       → Chọn: 25.990.000đ, 45.990.000đ
3. #app header                  → Chọn: ShopTLU, Home, Products, About
4. nav a:first-child             → Chọn: Home
5. .product.featured h2         → Chọn: MacBook Pro
6. article > p                  → Chọn: 25.990.000đ, Mô tả sản phẩm..., 45.990.000đ, Mô tả sản phẩm...
7. a[href="/"]                  → Chọn: Home
8. .top-bar.dark h1              → Chọn: ShopTLU

Câu A3
1. Trường hợp 1: 
- Chiều rộng hiển thị = width + padding×2 + border×2 = 400 + 20×2 + 5×2 = 450px
- Không gian chiếm trên trang = 450 + margin×2 = 450 + 10×2 = 470px
2. Trường hợp 2:
- Chiều rộng hiển thị = 400px
- Content thực tế = width − padding×2 − border×2 = 400 − 20×2 − 5×2 = 350px
- Không gian chiếm = width + margin×2 = 400 + 10×2 = 420px
3. Trường hợp 3:
- Khoảng cách giữa box-a và box-b = = 40px
- Margin Collapse chỉ lấy giá trị lớn hơn không cộng dồn
4. Nâng cao:
- Khoảng cách = 40 - 10 = 30px

Câu A4
1. 
- Rule A: (0, 0, 1)
- Rule B: (0, 1, 0)
- Rule C: (1, 0, 0)
- Rule D: (0, 1, 1)
2. 
- Element sẽ có màu đỏ
- Vì rule C có id →  specificity lớn hơn các rule còn lại
3. 
- Element sẽ có màu cam
- Vì có inline → Inline luôn ưu tiên hơn CSS bình thường
4. 
- Element sẽ có màu đen
- Vì !important ưu tiên cao nhất
