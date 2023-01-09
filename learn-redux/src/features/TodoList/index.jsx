import React from 'react';
import FormTodo from './components/FormTodo';
import List from './components/List';
import TodoFilters from './components/TodoFilters';

function TodoList() {
  return (
    <div>
      <FormTodo />
      <TodoFilters />
      <List />
    </div>
  );
}

export default TodoList;
