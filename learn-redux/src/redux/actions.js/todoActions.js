export const addTodoList = (payload) => {
  return {
    type: 'todoList/addTodoList',
    payload: payload,
  };
};

export const markCompleted = (payload) => {
  return {
    type: 'todoList/markCompleted',
    payload: payload,
  };
};
