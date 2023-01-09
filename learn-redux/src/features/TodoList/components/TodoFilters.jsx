import React from 'react';
import { useDispatch } from 'react-redux';

function TodoFilters() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: 'filters/setStatus',
            payload: 'all',
          })
        }
      >
        All
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'filters/setStatus',
            payload: 'completed',
          })
        }
      >
        Completed
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'filters/setStatus',
            payload: 'notCompleted',
          })
        }
      >
        Not Completed
      </button>
    </div>
  );
}

export default TodoFilters;
