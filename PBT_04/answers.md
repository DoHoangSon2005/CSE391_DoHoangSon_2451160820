Câu 1
| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|----------|---------------------------|-------------------|------------------|----------|
| `static` | Có | Mặc định, "nằm yên tại chỗ" | Có | Mặc định |
| `relative` | Có | Dịch chuyển so với vị trí gốc  | Có | Dịch nhẹ, làm mốc cho absolute |
| `absolute` | Không | Bay ra khỏi layout, bám theo cha relative | Có | Badge, dropdown, tooltip |
| `fixed` | Không | Dính vào viewport | Không | Chat button, modal overlay |
| `sticky` | Có → khi dính Viewport | Bình thường → dính khi scroll | Có → đến ngưỡng → chuyển thành fixed → không| Sticky header, sidebar |

- Câu hỏi thêm:
+ Khi nào `absolute` tham chiếu `body`?: Khi không có parent nào có position khác static.
+ Khi nào tham chiếu parent?: Khi parent nào có position relative hoặc absolute, fixed, sticky.
+ Nearest positioned ancestor là gì?: Là phần tử cha gần nhất có position khác static. absolute sẽ dùng phần tử đó làm mốc tọa độ.

Câu 2
- Trường hợp 1
→ 4 item → nằm trên 1 hàng, mỗi item rộng bằng nhau
```html
[1] [2] [3] [4]
```
- Trường hợp 2
→ 6 items → 1 hàng chứa 2 item = 3 hàng 2 cột
```html
[1] [2]
[3] [4]
[5] [6]
```
- Trường hợp 3
→ 3 item → 1 hàng, item đầu trái, item cuối phải, item giữa ở giữa
```html
[1]        [2]        [3]
```
- Trường hợp 4
→ 3 items → 3 cột
cột 1 = 200px
cột 2 = tự giãn
cột 3 = 200px
```html
[200px] [ rộng còn lại ] [200px]
```
- Trường hợp 5
→ 7 item → 3 hàng 3 cột, Item 7 nằm hàng cuối cột đầu
```html
[1] [2] [3]
[4] [5] [6]
[7]
```

Câu C1

1. Navigation bar ngang (logo + menu + buttons)
- Dùng: Flexbox
- Vì: Flexbox tốt cho sắp xếp các item theo 1 hàng ngang, dễ căn giữa và spacing

2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
- Dùng: Grid
- Vì: Grid phù hợp layout dạng hàng + cột đều nhau

3. Layout blog: main content + sidebar
- Dùng: Kết hợp cả hai
- Vì: Grid để chia bố cục. Bên trong từng phần có thể dùng Flexbox để căn chỉnh item

4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)
- Dùng: Grid
- Vì: Grid có thể tạo nhiều cột đều nhau dễ dàng

5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)
- Dùng: Flexbox
- Vì: Flexbox column giúp nút luôn dính đáy

Câu C2

1. 
- Nguyên nhân: Nội dung mỗi card dài ngắn khác nhau nên chiều cao khác nhau.
Nút "Mua" không được đẩy xuống đáy card.
2. 
- Nguyên nhân: Dùng display: flex nhưng chưa dùng justify-content, align-items nên item vẫn ở góc trái trên.
3. 
- Nguyên nhân: Flexbox mặc định cho phép item co (flex-shrink: 1), nên sidebar bị ép nhỏ khi content dài.