const tasks = [
    {
      description: 'Todays To Do',
      completed: false,
      index: 1,
    },
    {
      description: 'Add to your list...',
      completed: false,
      index: 2,
    },
    {
      description: 'wash the dishes',
      completed: true,
      index: 3,
    },
    {
      description: 'complete To Do list project',
      completed: false,
      index: 4,
    },
    {
      description: 'Clear all completed',
      completed: false,
      index: 5,
    },
  ];
  
  function renderTasks() {
    const todoList = document.getElementById('todo-list');
  
    tasks.forEach((task) => {
      const listItem = document.createElement('li');
      listItem.textContent = task.description;
      todoList.appendChild(listItem);
    });
  }
  
  document.addEventListener('DOMContentLoaded', renderTasks);
  