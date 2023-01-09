import { combineReducers } from 'redux';
import { filtersReducer } from './slice.js/filtersSlice';
import { todoListReducer } from './slice.js/todoListSlice';

export const rootReducer = combineReducers({
  todoList: todoListReducer,
  filters: filtersReducer,
});
