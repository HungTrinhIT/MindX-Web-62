import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function FormTodo() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch({
            type: 'todoList/addTodoList',
            payload: {
              index: new Date().toISOString(),
              name,
              completed: false,
            },
          })
        }
      >
        Add
      </button>
    </div>
  );
}

export default FormTodo;
