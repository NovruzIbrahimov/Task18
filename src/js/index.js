const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', function() {
    if (todoInput.value.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = todoInput.value;
        todoList.appendChild(listItem);

        todoInput.value = '';  

        
        listItem.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });
    }
});






