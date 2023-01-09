import { configureStore } from '@reduxjs/toolkit';
import { filtersSlice } from './slice.js/filtersSlice';
import { todoListSlice } from './slice.js/todoListSlice';

export const store = configureStore({
  reducer: {
    todoList: todoListSlice.reducer,
    filters: filtersSlice.reducer,
  },
  devTools: true,
});
