const todoInput = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

const todoCount = document.querySelector("#todoCount");

const filterButtons = document.querySelectorAll(".filter-btn");

const clearCompletedBtn = document.querySelector("#clearCompleted");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";

function renderTodos() {

    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (currentFilter === "active") {

        filteredTodos = todos.filter(todo => !todo.completed);

    } else if (currentFilter === "completed") {

        filteredTodos = todos.filter(todo => todo.completed);

    }

    filteredTodos.forEach(todo => {

        const li = document.createElement("li");

        li.classList.add("todo-item");

        li.dataset.id = todo.id;

        const span = document.createElement("span");

        span.classList.add("todo-text");

        if (todo.completed) {
            span.classList.add("completed");
        }

        span.textContent = todo.text;

        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "❌";

        deleteBtn.classList.add("delete-btn");

        li.appendChild(span);

        li.appendChild(deleteBtn);

        todoList.appendChild(li);

    });

    updateCount();

    saveTodos();

}

function saveTodos() {

    localStorage.setItem("todos", JSON.stringify(todos));

}

function updateCount() {

    const activeTodos = todos.filter(todo => !todo.completed);

    todoCount.textContent =
        activeTodos.length + " items left";

}

function addTodo() {

    const text = todoInput.value.trim();

    if (text === "") {
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(todo);

    todoInput.value = "";

    renderTodos();

}

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {
        addTodo();
    }

});

todoList.addEventListener("click", function(e) {

    const li = e.target.closest(".todo-item");

    if (!li) return;

    const id = Number(li.dataset.id);

    const todo = todos.find(t => t.id === id);

    if (e.target.classList.contains("todo-text")) {

        todo.completed = !todo.completed;

        renderTodos();

    }

    if (e.target.classList.contains("delete-btn")) {

        todos = todos.filter(t => t.id !== id);

        renderTodos();

    }

});

todoList.addEventListener("dblclick", function(e) {

    if (!e.target.classList.contains("todo-text")) {
        return;
    }

    const li = e.target.closest(".todo-item");

    const id = Number(li.dataset.id);

    const todo = todos.find(t => t.id === id);

    const input = document.createElement("input");

    input.type = "text";

    input.value = todo.text;

    li.replaceChild(input, e.target);

    input.focus();

    input.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            todo.text = input.value.trim();

            renderTodos();

        }

    });

});

filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        currentFilter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        renderTodos();

    });

});

clearCompletedBtn.addEventListener("click", function() {

    todos = todos.filter(todo => !todo.completed);

    renderTodos();

});

renderTodos();