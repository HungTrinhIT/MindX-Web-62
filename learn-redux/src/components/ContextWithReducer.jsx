import React, { createContext, useReducer, useContext } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return { count: 0 };
  }
}

const CalculatorContext = createContext();

function ContextWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CalculatorContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <p>Context With Reducer</p>
      <div
        style={{ width: 100, display: 'flex', justifyContent: 'space-between' }}
      >
        <Increase />
        <ShowValue />
        <Decrease />
      </div>
    </CalculatorContext.Provider>
  );
}

function ShowValue() {
  const calCtx = useContext(CalculatorContext);

  return <div>{calCtx.state.count}</div>;
}

function Increase() {
  const calCtx = useContext(CalculatorContext);

  return (
    <button onClick={() => calCtx.dispatch({ type: 'increment' })}>+</button>
  );
}

function Decrease() {
  const calCtx = useContext(CalculatorContext);

  return (
    <button onClick={() => calCtx.dispatch({ type: 'decrement' })}>-</button>
  );
}

export default ContextWithReducer;
