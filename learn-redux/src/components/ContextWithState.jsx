import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const CalculatorContext = createContext();

function ContextWithState() {
  const [value, setValue] = useState(0);

  return (
    <CalculatorContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      <p>Context With State</p>
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

  return <div>{calCtx.value}</div>;
}

function Increase() {
  const calCtx = useContext(CalculatorContext);

  return <button onClick={() => calCtx.setValue((prev) => prev + 1)}>+</button>;
}

function Decrease() {
  const calCtx = useContext(CalculatorContext);

  return <button onClick={() => calCtx.setValue((prev) => prev - 1)}>-</button>;
}

export default ContextWithState;
