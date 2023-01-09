import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  todoList: [
    {
      index: 1,
      name: 'Learn React',
      completed: true,
    },
    {
      index: 2,
      name: 'Learn Redux',
      completed: false,
    },
  ],
  filters: {
    //all, completed, not completed
    status: 'all',
    search: '',
  },
};

//immutable, mutable
const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'todoList/addTodoList':
      newState = {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
      return newState;

    case 'filters/setStatus':
      newState = {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
      return newState;

    default:
      return state;
  }
};

const composedEnhancer = composeWithDevTools();

export const store = createStore(reducer, composedEnhancer);
