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

Câu B1

1. Element: body, header, table
2. Class: .active
3. ID: #about
4. Descendant: nav a
5. Pseudo-class: nav a:hover

Câu B2
- Phần 1
+ Hộp 1 (content-box): chiều rộng thực tế = 350px (đo từ DevTools)
+ Hộp 2 (border-box): chiều rộng thực tế = 300px (đo từ DevTools)
+ Giải thích sự khác biệt: content-box cộng thêm padding và border vào width nên hộp to hơn
- phần 2
+ Không dùng border-box: 288 + 548 + 288 = 1124px > 1000px

Bài B3 

1. 
- p {color: black;} Specificity: (0,0,1)
- .text {color: blue;} Specificity: (0,1,0)
- .highlight {color: green;} Specificity: (0,1,0)
- p.text {color: orange;} Specificity: (0,1,1)
- p.highlight {color: purple;} Specificity: (0,1,1)
- .text.highlight {color: brown;} Specificity: (0,2,0)
- #demo {color: red;} Specificity: (1,0,0)
- p#demo {color: pink;} Specificity: (1,0,1)
- #demo.text {color: gray;} Specificity: (1,1,0)
- p#demo.text.highlight {color: cyan;} Specificity: (1,2,1)
2. 
- Màu cuối cùng là cyan vì rule "p#demo.text.highlight" có specificity cao nhất:
3. 
- Nếu đổi thứ tự rules thì kết quả không đổi vì rule "p#demo.text.highlight" vẫn có specificity cao nhất

Câu C1

1. 
- Sidebar = 300 + 40 + 2 = 342px
- content = 660 + 60 + 2 = 722px
2. 
- Layout vỡ vì Sidebar + content = 342 + 722 = 1064px > 960px không đủ chỗ để đặt sidebar và content trên cùng 1 hàng.
3. 
- 2 cách sửa
+ Cách 1 — Dùng border-box
+ Cách 2 — Không dùng border-box: giảm width

Câu C2

1. "Sản phẩm A" (h2)
- container → kế thừa font-size: 14px
- card .title → đổi thành 20px
- card → kế thừa color: blue
- #featured .title → đổi thành red
- highlight { color: green !important; } → !important ưu tiên
→ Font-size: 20px, color: green
2. "Mô tả sản phẩm" (p trong card featured)
- card → color: blue
- card p { color: inherit; } → p lấy màu từ cha (.card)
→ Color = blue
3. "Sản phẩm B" (h2) có font-size = 20px và color = blue
- container → kế thừa 14px
- card .title → đổi thành 20px
- card → kế thừa color: blue
→ Font-size: 20px, color: blue
4. "Mô tả sản phẩm B" (p.highlight) có color = green
- card → color: blue
- highlight { color: green !important; }→ !important ưu tiên
→ Color = green