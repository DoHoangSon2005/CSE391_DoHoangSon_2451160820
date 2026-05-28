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

Câu C1

- Code đã sửa
```javascript
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = 0;

document.querySelector("#incrementBtn").addEventListener("click", function () {

    count++;

    countDisplay.textContent = count;

    const li = document.createElement("li");

    li.textContent = "Count changed to " + count;

    li.addEventListener("click", function () {
        deleteHistory(this);
    });

    historyList.append(li);
});

document.querySelector("#decrementBtn").addEventListener("click", function () {

    count--;

    countDisplay.textContent = count;
});

document.querySelector("#resetBtn").addEventListener("click", () => {

    count = 0;

    countDisplay.textContent = count;

    historyList.innerHTML = "";
});

function deleteHistory(element) {

    element.parentNode.removeChild(element);
}

document.querySelector("#clearHistory").addEventListener("click", () => {

    const items = historyList.querySelectorAll("li");

    items.forEach(item => {
        item.remove();
    });
});

window.addEventListener("beforeunload", () => {

    localStorage.setItem("count", count);

    localStorage.setItem("history", historyList.innerHTML);
});

window.addEventListener("load", () => {

    count = Number(localStorage.getItem("count")) || 0;

    countDisplay.textContent = count;

    historyList.innerHTML = localStorage.getItem("history") || "";
});
```

Câu C2

1. 
- Tại sao bind event lên 1000 elements riêng lẻ là BAD PRACTICE?
+ Tốn RAM
+ Chậm hơn
+ Khó maintain
+ Khi thêm element mới phải bind lại event
- Event Delegation giải quyết thế nào?
+ Thay vì bind từng element → bind 1 event lên thẻ cha.
2. 
+ DocumentFragment là vùng nhớ tạm:
+ Thêm elements vào fragment không render ngay
+ Không gây reflow/repaint mỗi lần append
+ Sau khi build xong toàn bộ 1000 phần tử, chỉ append fragment vào DOM thật 1 lần duy nhất
