const addItem = (todos, input, render) => {
  const newItemText = input.value.trim();

  if (newItemText === '') {
    return;
  }

  const newTodo = {
    description: newItemText,
    completed: false,
    index: todos.length,
  };

  todos.push(newTodo);
  input.value = '';
  render();
};

export default addItem;
