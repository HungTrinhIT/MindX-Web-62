export const todoSelector = (state) => {
  const filters = state.filters;
  const todo = state.todoList;

  let newTodo;

  switch (filters.status) {
    case 'all':
      newTodo = todo;
      break;

    case 'completed':
      newTodo = todo.filter((item) => item.completed);
      break;

    case 'notCompleted':
      newTodo = todo.filter((item) => !item.completed);
      break;

    default:
      newTodo = todo;
      break;
  }

  return newTodo.filter((item) =>
    item.name.toLowerCase().includes(filters.search.toLowerCase())
  );
};

export const searchSelector = (state) => state.filters.search;
