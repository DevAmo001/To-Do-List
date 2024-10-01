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

  renderTodoList();

 function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todo.length; i++) {
    const valueObject = todo[i];
    const { name, dueDate } = valueObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate} </div>
      <button onclick="
          todo.splice(${i}, 1);
          renderTodoList();
      " class="delete-todo-btn">Delete</button>
    `;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-display')
  .innerHTML = todoListHTML;
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