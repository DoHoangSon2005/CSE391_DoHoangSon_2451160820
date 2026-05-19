TRACK A

Câu A1

1. Layout 
+ <768px
┌───────┐
│ Box 1 │
├───────┤
│ Box 2 │
├───────┤
│ Box 3 │
├───────┤
│ Box 4 │
└───────┘
+ 768px - 991px
┌───────┬───────┐
│ Box 1 │ Box 2 │
├───────┼───────┤
│ Box 3 │ Box 4 │
└───────┴───────┘
+ ≥992px
┌────┬────┬────┬────┐
│ B1 │ B2 │ B3 │ B4 │
└────┴────┴────┴────┘
2. 
| Kích thước | < 768px | 768px - 991px | ≥ 992px |
|------------|---------|---------------|---------|
| Số cột | 1 cột | 2 cột | 4 cột |
| Box layout | Box 1 xuống hàng, Box 2 xuống hàng... | 2 box mỗi hàng | 4 box cùng 1 hàng |
3. Câu hỏi thêm:
- col-md-6
+ md = breakpoint tablet (≥768px)
+ 6 = chiếm 6/12 cột của grid
- -> Từ kích thước tablet trở lên, element chiếm nửa hàng
- col-sm-12
+ Vì Bootstrap làm theo kiểu Mobile-First

Câu A2
1. 
- d-none: ẩn element (display: none)
- d-md-block: từ màn hình md trở lên (≥768px) thì hiện lại dưới dạng block
+ -> Tablet/Desktop (≥768px) hiện, Mobile (<768px) ẩn

2. 
- mt-3
+ m = margin
+ t = top
+ 3 = mức spacing
+ → Thêm margin-top.

- mb-4
+ b = bottom
+ → Thêm margin-bottom.

- ms-2
+ s = start (trái)
+ → Margin bên trái.

- px-4
+ p = padding
+ x = trái + phải
+ → Padding ngang.

- py-5
+ y = trên + dưới
+ → Padding dọc.

- mb-auto
+ → Margin-bottom tự động (auto).
+ Dùng để canh vị trí flexbox/layout.

3. 

- .container
```html
<div class="container">
``` 
+ Có chiều rộng giới hạn theo breakpoint
+ Giữa màn hình
+ Desktop không full màn hình

+ → Dùng phổ biến nhất.

- .container-fluid
```html
<div class="container-fluid">
``` 
+ Luôn rộng 100%
+ Full chiều ngang màn hình

+ → Dùng cho banner, hero section.

- .container-md
```html
<div class="container-md">
``` 
+ Mobile: full width
+ Từ md (≥768px) trở lên:
+ Có max-width giống .container
+ → Responsive linh hoạt hơn.

Câu C1

1. Bạn muốn đổi màu `$primary` từ xanh mặc định sang `#E63946`. Giải thích quy trình (cần công cụ gì, modify file nào).
- quy trình:
+ Cài Bootstrap bằng npm hoặc tải source SCSS
+ Tạo file SCSS riêng, ví dụ style.scss
+ Override biến $primary
+ Import Bootstrap
+ Compile SCSS → CSS
- Cần công cụ:
+ Node.js
+ Sass compiler
+ Bootstrap source SCSS
- modify file style.scss
2. Tại sao KHÔNG nên override trực tiếp `.btn-primary { background: red; }` mà nên dùng SASS variables?
- Vì:
+ Chỉ đổi được 1 component
+ Các class khác dùng màu primary vẫn màu cũ
+ Khó maintain khi project lớn
+ Bootstrap update dễ bị lỗi ghi đè
- Dùng SASS variables tốt hơn vì:
+ Bootstrap sẽ tự đổi: .btn-primary, .bg-primary, .text-primary,... giúp đồng bộ toàn bộ giao diện, dễ quản lý và chuyên nghiệp hơn.

Câu C2

- CSS
```html
.navbar {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    background: black;
}

.nav-links {
    display: flex;
    gap: 16px;
}

.card {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
}

.card img {
    width: 100%;
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
    }

    .nav-links {
        flex-direction: column;
    }
}
``` 

- Bootstrap
```html
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container">
        <a class="navbar-brand" href="#">Shop</a>
    </div>
</nav>

<div class="card" style="width: 18rem;">
    <img src="image.jpg" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">iPhone 16</h5>
        <p class="card-text">25.990.000đ</p>
    </div>
</div>
``` 

- So Sánh
+ Số dòng CSS cần viết: CSS thuần Nhiều hơn
+ Thời gian phát triển: CSS thuần Chậm hơn
+ Khả năng tùy biến: CSS thuần linh hoạt hơn

- Khi nào nên dùng Bootstrap
+ Dự án nhỏ
+ Prototype
+ Người mới học frontend

- Khi nào không nên dùng Bootstrap
+ Website cần design riêng biệt 
+ UI phức tạp
+ Project lớn 