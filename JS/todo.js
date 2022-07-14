const todoForm = document.querySelector("#todo-form");
//const todoForm = document.getElementById("todo-form");
const todoList = document.querySelector("#todo-list");
//const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");
//const const todoInput = document.querySelector("#todo-form input");

const FIXEDVALUE = "Write a to do and Press Enter.";
const TODOS_KEY = "todos"
let toDos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodo(newTodo) {
   const li = document.createElement("li");
   li.id = newTodo.id;
   const span = document.createElement("span");
   const button = document.createElement("button");
   button.innerText = "❌";
   span.innerText = newTodo.text;
   button.addEventListener("click", todoDelete);
   li.appendChild(span);
   li.appendChild(button);
   todoList.appendChild(li);
}

function todoDelete(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", todoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);

if (saveTodos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}