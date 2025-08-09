import { allTodos, changeAllTodos, saveTodos, updateTodoList } from "./main.js";

function confirmDelete(todoText){
    const answer = window.confirm(`Deletar a tarefa: "${todoText}"?`)
    return answer;
}

function deleteTodo(todoIndex){
    const newAllTodos = allTodos.filter((_, i)=> i !== todoIndex);
    changeAllTodos(newAllTodos);
    saveTodos();
    updateTodoList();
}

function createDeleteButton(li, todoText, todoIndex){
    const deleteButton = li.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        if (confirmDelete(todoText)) { deleteTodo(todoIndex);}
    })
}

function createCheckbox(li, todoIndex, todo){
    const checkbox = li.querySelector("input");
    checkbox.addEventListener("change", ()=> {
        allTodos[todoIndex].completed = checkbox.checked;
        saveTodos();
    })
    checkbox.checked = todo.completed;
}

export function createTodo(todo, todoIndex){
    const todoId = "todo-" + todoIndex;
    const todoText = todo.text;
    const li = document.createElement('li');
    li.classList.add('todo');
    li.innerHTML = `
                <input type="checkbox" id="${todoId}">

                <label for="${todoId}" class="custom-checkbox">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                </label>

                <label for="${todoId}" class="todo-text">${todoText}</label>

                <button class="delete-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>    
    `
    createDeleteButton(li, todoText, todoIndex);
    createCheckbox(li, todoIndex, todo);

    return li
}