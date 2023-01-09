import React from 'react';
import { useSelector } from 'react-redux';

function List() {
  const todoList = useSelector((state) => state.todoList);

  return (
    <div>
      {todoList.map((item) => (
        <div key={item.index}>{item.name}</div>
      ))}
    </div>
  );
}

export default List;
