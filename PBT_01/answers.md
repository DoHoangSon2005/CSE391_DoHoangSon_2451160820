Câu A1
1. Các bước khi truy cập https://shopee.vn:
+ B1.Trình duyệt gửi request từ client
+ B2.Request đi qua router → nhà mạng → Internet
+ B3.Server nhận request tại data center
+ B4.Server xử lý yêu cầu
+ B5.Server trả về response
+ B6.Trình duyệt nhận dữ liệu
+ B7.Render giao diện trên màn hình
– Nguồn: 01_introduction_html_universe.md  phần "Cuộc hành trình 0.3 giây"
2. Tab Network hiển thị:
+ Danh sách các request
+ Status Code
+ Loại tài nguyên
+ Thời gian tải
+ Kích thước file
+ Ảnh trong screenshots
+ Nguồn: 01_introduction_html_universe.md phần 4.3. Developer Tools (F12) — "Kính hiển vi" cho website

Câu A2
1. Lỗi:
+ Dùng div thay vì header, nav, main, footer 
+ Không có article cho sản phẩm  
+ Không có thẻ heading h1  
+ Ảnh không có alt
+ Nguồn: 04_visible_part_html.md phần Semantic HTML5 — "Thẻ có ý nghĩa”
2. Sửa:
```html
<header>
    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>
<main>
    <article>
        <h1>iPhone 16 Pro</h1>
        <p>25.990.000đ</p>
        <img src="iphone.jpg" alt="iPhone 16 Pro">
    </article>
</main>
<footer>
    © 2026 ShopTLU
</footer>
```
Câu A3
1. Kết quả hiển thị: 

Hộp 1

Text A Text B

Hộp 2

Text C Text D

Hộp 3

2. Giải thích:
+ div là block-Chiếm cả dòng
+ span và strong là inline-Chỉ chiếm nội dung
+ Nguồn: 04_visible_part_html.md phần Block vs Inline — Hai loại element cơ bản

Câu A4
1.Khác nhau:
+ thead: Tiêu đề cột  
+ tbody: Dữ liệu chính  
+ tfoot: Tổng kết  
+ Nguồn: 05_tables_hyperlinks.md phần Table — Bảng dữ liệu
2. Không nên dùng table để layout:
+ Khó bảo trì  
+ Kém linh hoạt
+ Sai mục đích (table chỉ dùng cho hàng cột)  

Câu B3
+ Lỗi 1: Dòng 1 — Thiếu !DOCTYPE html — Sửa !DOCTYPE thành !DOCTYPE html
+ Lỗi 2: Dòng 4 — Thẻ title không đóng — Thêm /title
+ Lỗi 3: Dòng 5 — Sai charset utf8 — Sửa thành UTF-8
+ Lỗi 4: Dòng 8 — Thẻ h1 không đóng — Sửa thành /h1
+ Lỗi 5: Dòng 12 — Thẻ a không đóng — Thêm /a
+ Lỗi 6: Dòng 20 — Ảnh thiếu dấu ngoặc kép và thiếu alt — Thêm src="..." và alt
+ Lỗi 7: Dòng 22 — Sai thứ tự thẻ b — Sửa thành strong đúng vị trí
+ Lỗi 8: Dòng 31 — Table không có thead — Thêm thead
+ Lỗi 9: Dòng 29,30 — Table dùng td cho header — Sửa thành th
+ Lỗi 10: Dòng 40 — Dùng 2 thẻ main — Thay cái thứ 2 bằng aside
+ Lỗi 11: Dòng 45 — Thẻ p trong footer không đóng — Thêm /p
+ Lỗi 12: Thiếu ngôn ngữ trong html — Thêm lang="vi"

Câu B4
1.semantic:
+ header: Dùng cho phần đầu trang gồm menu, logo, thanh tìm kiếm
+ section: Dùng cho phần nội dung sản phẩm gồm ảnh, thông số, đánh giá
+ footer: Dùng cho phần cuối trang gồm thông tin liên hệ, thông tin khác
2.table:
+ Trang sử dụng ul, li thay vì table để hiển thị danh mục sản phẩm
+ Không dùng thead, tbody
3.form:
+ action: /tim-kiem
+ method: không được khai báo mặc định của là GET
+ input types: input id="skw" type="text"
