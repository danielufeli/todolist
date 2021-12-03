import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import statusUpdate from './updateTodos.js';

function component() {
  let todos = [
    {
      index: 1,
      description: 'Buy a Laptop',
      completed: false,
    },
    {
      index: 2,
      description: 'Attend AOT LAgos Event',
      completed: false,
    },
    {
      index: 3,
      description: 'Work on Javascript',
      completed: false,
    },
  ];
  const todoInput = document.querySelector('.todo-input');
  const todoButton = document.querySelector('.todo-button');
  const todoList = document.querySelector('.todoList');

  document.addEventListener('DOMContentLoaded', getTodos);
  todoButton.addEventListener('click', addTodo);
  todoList.addEventListener('click', deleteCheck);

  function addTodo(event) {
    event.preventDefault();
    const newTodo = document.createElement('li');
    newTodo.classList.add('task');
    const completedCheck = document.createElement('INPUT');
    completedCheck.setAttribute('type', 'checkbox');
    completedCheck.classList.add('check');
    newTodo.appendChild(completedCheck);
    saveLocalTodos({
      description: todoInput.value,
      index: 0,
      completed: false,
    });
    const textDescription = document.createElement('INPUT');
    textDescription.setAttribute('type', 'text');
    textDescription.setAttribute('value', todoInput.value);
    newTodo.appendChild(textDescription);
    const moveButton = document.createElement('button');
    moveButton.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    newTodo.appendChild(moveButton);
    todoList.appendChild(newTodo);
    todoInput.value = '';
  }

  function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
      const todo = item.parentElement;
      todo.remove();
    }

    if (item.classList[0] === 'check') {
      const todo = item.parentElement;
      const checkbox = todo.querySelector('input');
      statusUpdate(checkbox.id);
      todo.classList.toggle('completed');
    }
  }

  function saveLocalTodos(todo) {
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function getTodos() {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.map((todo, i) => {
      const newTodo = document.createElement('li');
      newTodo.classList.add('task');
      if (todo.completed === true) newTodo.classList.add('completed');
      const completedCheck = document.createElement('INPUT');
      completedCheck.setAttribute('type', 'checkbox');
      completedCheck.setAttribute('id', todo.index);
      if (todo.completed === true) completedCheck.setAttribute('checked', true);
      completedCheck.classList.add('check');
      newTodo.appendChild(completedCheck);
      const textDescription = document.createElement('INPUT');
      textDescription.setAttribute('type', 'text');
      textDescription.setAttribute('value', todo.description);
      newTodo.appendChild(textDescription);
      const moveButton = document.createElement('button');
      moveButton.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
      newTodo.appendChild(moveButton);
      todoList.appendChild(newTodo);
      todoInput.value = '';
    });
  }
}

document.body.appendChild(component());
