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