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
1. Khác nhau:
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
1. semantic:
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

Câu C1
```html
<!-- header: phần đầu trang -->
<header>
    <!-- nav: menu điều hướng -->
    <nav>
        <a href="#">Trang chủ</a>
        <a href="#">Sản phẩm</a>
        <a href="#">Liên hệ</a>
    </nav>
</header>

<main> <!-- main: nội dung chính -->

    <!-- breadcrumb: điều hướng đường dẫn -->
    <nav aria-label="breadcrumb"> <!-- nav vì là điều hướng -->
        <ol> <!-- ol vì có thứ tự -->
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Điện thoại</a></li>
            <li>iPhone 16</li>
        </ol>
    </nav>

    <!-- khu vực ảnh sản phẩm -->
    <section>
        <h2>Ảnh sản phẩm</h2>

        <div> <!-- div: nhóm nhiều ảnh -->
            <img src="https://placehold.co/200" alt="ảnh 1">
            <img src="https://placehold.co/200" alt="ảnh 2">
            <img src="https://placehold.co/200" alt="ảnh 3">
            <img src="https://placehold.co/200" alt="ảnh 4">
            <img src="https://placehold.co/200" alt="ảnh 5">
        </div>
    </section>

    <!-- thông tin sản phẩm -->
    <section>
        <h1>iPhone 16</h1> <!-- h1: tên sản phẩm chính -->
        <p>Giá: 25.990.000đ</p>
        <p>Đánh giá: ⭐⭐⭐⭐☆</p>
        <p>Mô tả sản phẩm...</p>
    </section>

    <!-- bảng thông số -->
    <section>
        <h2>Thông số kỹ thuật</h2>

        <table border="1"> <!-- table: dữ liệu dạng bảng -->
            <tr>
                <th>Thông số</th>
                <th>Chi tiết</th>
            </tr>
            <tr>
                <td>Màn hình</td>
                <td>6.7 inch</td>
            </tr>
            <tr>
                <td>Camera</td>
                <td>48MP</td>
            </tr>
        </table>
    </section>

    <!-- đánh giá / bình luận -->
    <section>
        <h2>Đánh giá</h2>

        <article> <!-- article: 1 bình luận -->
            <p>Người dùng A: Sản phẩm tốt</p>
        </article>

        <article>
            <p>Người dùng B: Đáng mua</p>
        </article>
    </section>

</main>

<!-- sidebar -->
<aside> <!-- aside: nội dung phụ -->
    <h2>Sản phẩm tương tự</h2>

    <article>
        <p>iPhone 15</p>
    </article>

    <article>
        <p>Samsung S24</p>
    </article>
</aside>

<!-- footer -->
<footer>
    <p>© 2026 Shop</p>
</footer>
```

Câu C2
+ Dùng div cho mọi thứ có thể giúp viết nhanh lúc đầu, nhưng về lâu dài là một lựa chọn kém về kỹ thuật. Về SEO, các công cụ tìm kiếm như Google dựa vào semantic HTML để hiểu cấu trúc trang. Nếu chỉ dùng div, Google khó phân biệt đâu là nội dung chính, đâu là menu hay footer, dẫn đến việc index kém hiệu quả hơn. Về Accessibility, semantic HTML giúp trang web có cấu trúc rõ ràng, dễ điều hướng và thân thiện hơn với người dùng, đặc biệt là khi truy cập trên nhiều thiết bị khác nhau.Một ví dụ cụ thể: khi xây dựng trang sản phẩm, nếu dùng article cho mỗi sản phẩm, Google có thể hiểu đây là một nội dung độc lập, từ đó cải thiện khả năng hiển thị trên kết quả tìm kiếm. Đồng thời, Đồng thời, cấu trúc trang cũng rõ ràng hơn so với một loạt div không có ý nghĩa.Tuy nhiên, không phải lúc nào div cũng sai. Trong thực tế, div vẫn rất phù hợp khi dùng làm container để nhóm các phần tử phục vụ cho layout hoặc styling bằng CSS.

Câu D (Chú ý chất lượng míc thấp và âm thanh nhỏ nên cần cho âm lượng cao để nghe)
https://drive.google.com/file/d/1HRZUwvt8Big2zs7_w5ue7N-yoe4QbaFU/view?usp=sharing
