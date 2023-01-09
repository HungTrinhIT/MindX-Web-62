import { createSlice } from '@reduxjs/toolkit';

const initialState = [
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
];

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodoList: (state, action) => {
      state.push(action.payload);
      // return [...state, action.payload];
      return state;
    },
    markCompleted: (state, action) => {
      const newState = state.map((item) => {
        if (item.index === action.payload.index) {
          return {
            ...item,
            completed: !action.payload.completed,
          };
        } else {
          return item;
        }
      });
      return newState;
    },
  },
});

export const { addTodoList, markCompleted } = todoListSlice.actions;

// export const todoListReducer = (state = initialState, action) => {
//   let newState;
//   switch (action.type) {
//     case 'todoList/addTodoList':
//       newState = [...state, action.payload];
//       return newState;

//     case 'todoList/markCompleted':
//       newState = state.map((item) => {
//         if (item.index === action.payload.index) {
//           return {
//             ...item,
//             completed: !action.payload.completed,
//           };
//         } else {
//           return item;
//         }
//       });
//       return newState;

//     default:
//       return state;
//   }
// };
