Câu A1

1. DOM Tree
```
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        └── li.todo-item.completed
            └── "Learn CSS"
```
2. querySelector
- Chọn thẻ <h1>
document.querySelector("h1");
- Chọn input trong form
document.querySelector("#todoForm input");
- Chọn tất cả .todo-item
document.querySelectorAll(".todo-item");
- Chọn link đang active
document.querySelector("nav .active");
- Chọn <li> đầu tiên trong #todoList
document.querySelector("#todoList li");
- Chọn tất cả <a> bên trong <nav>
document.querySelectorAll("nav a");

Câu A2

- Giải thích sự khác nhau
| innerHTML | textContent |
|------------|---------|
| Đọc/ghi HTML | Chỉ đọc/ghi text |
| Có thể render thẻ HTML | Không render HTML |
| Chậm hơn | Nhanh hơn |
| Có nguy cơ XSS	 | An toàn hơn |
- Ví dụ 
+ innerHTML
```javascript
document.querySelector("#box").innerHTML =
    "<h2>Hello</h2>";
```
+ textContent
```javascript
document.querySelector("#box").textContent =
    "<h2>Hello</h2>";
```

- Câu hỏi bảo mật
+ Vì innerHTML sẽ chạy code HTML/JS mà user nhập vào.
+ Code minh họa
```html
<img src=x onerror="alert('Hacked!')">
```
```javascript
const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput;
```

- Sửa
+ Dùng textContent:
```javascript
const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput;
```

Câu A3

- Khi click vào button output
+ BUTTON
+ INNER
+ OUTER
- Nếu dùng e.stopPropagation() Output
+ BUTTON
