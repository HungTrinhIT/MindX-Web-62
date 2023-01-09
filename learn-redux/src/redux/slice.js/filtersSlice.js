import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //all, completed, not completed
  status: 'all',
  search: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

//immutable, mutable
// export const filtersReducer = (state = initialState, action) => {
//   let newState;
//   switch (action.type) {
//     case 'filters/setStatus':
//       newState = {
//         ...state,
//         status: action.payload,
//       };
//       return newState;

//     case 'filters/setSearch':
//       newState = {
//         ...state,
//         search: action.payload,
//       };
//       return newState;

//     default:
//       return state;
//   }
// };
