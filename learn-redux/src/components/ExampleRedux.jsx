import React from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

function ExampleRedux() {
  return (
    <Provider store={store}>
      <p>Example Redux</p>
      <div
        style={{ width: 100, display: 'flex', justifyContent: 'space-between' }}
      >
        <Increase />
        <ShowValue />
        <Decrease />
      </div>
    </Provider>
  );
}

function ShowValue() {
  const count = useSelector((state) => state.count);

  return <div>{count}</div>;
}

function Increase() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch({ type: 'increment' })}>+</button>;
}

function Decrease() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch({ type: 'decrement' })}>-</button>;
}

export default ExampleRedux;
