import {createTodo} from "./createElements.js";

const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("input-text");

export let allTodos = getTodos();

updateTodoList();

todoForm.addEventListener('submit', function(event){
    event.preventDefault();
    addTodo();
});

function addTodo(){
    const todoText = todoInput.value.trim();
    todoInput.value = ""
    if(todoText.length > 0){
        const todoObject = {
            text: todoText,
            completed: false
        }

        allTodos.push(todoObject);
        updateTodoList();
        saveTodos();
    }

}

export function changeAllTodos(newAllTodos){
    allTodos = newAllTodos;
}

export function updateTodoList(){
    todoList.innerHTML = "";
    for (let i = 0; i < allTodos.length; i++) {
        const text = allTodos[i];
        todoList.append(createTodo(text, i));
    }

}

export function saveTodos(){
    const todosJson = JSON.stringify(allTodos);
    localStorage.setItem("todos", todosJson);
}

function getTodos(){
    let todos = localStorage.getItem("todos") || "[]";
    if (todos == "undefined") { todos = "[]" }
    return JSON.parse(todos);
}

