const statusUpdate = (index) => {
  let todos = JSON.parse(localStorage.getItem('todos'));
  todos.forEach((todo) => {
    if (todo.index.toString() === index) {
      todo.completed === true
        ? (todo.completed = false)
        : (todo.completed = true);
    }
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};
export default statusUpdate;
