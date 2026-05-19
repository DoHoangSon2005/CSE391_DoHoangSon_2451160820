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