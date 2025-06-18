const todoInput = document.getElementById('todo-input');
const listContainer = document.getElementById('list-container');

function addTodo() {
    if (todoInput.value.trim() === '') {
        return;
    } else {
        let li = document.createElement('li');
        li.innerHTML = todoInput.value;
        li.className = "todo-item";
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        span.className = "delete-btn";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    todoInput.value = '';
    saveData();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
