import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markCompleted } from '../../../redux/actions.js/todoActions';
import { todoSelector } from '../../../redux/selector';

function List() {
  const todoList = useSelector(todoSelector);
  const dispatch = useDispatch();

  return (
    <div>
      {todoList.map((item) => (
        <div
          style={{
            textDecoration: item.completed ? 'line-through' : 'none',
          }}
          key={item.index}
          onClick={() => dispatch(markCompleted(item))}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default List;
