function addOnKeydown(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}

  let todo = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
   }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
  }];

  document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

  renderTodoList();

 function renderTodoList() {
  let todoListHTML = '';

  todo.forEach((valueObject, index) => {
    const { name, dueDate } = valueObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate} </div>
      <button class="delete-todo-btn js-delete-button">Delete</button>
    `;
    todoListHTML += html;
  });
  console.log(todoListHTML);

  document.querySelector('.js-display')
  .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todo.splice(index, 1);
      renderTodoList();
    });
  });
}



function addTodo() {
  const addBtn = document.querySelector('.js-input-value');
  const name = addBtn.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todo.push({
    name,
    dueDate
  });

  addBtn.value = '';

  renderTodoList();
}