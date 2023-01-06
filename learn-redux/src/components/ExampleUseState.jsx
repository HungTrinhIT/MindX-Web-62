import React from 'react';
import { useState } from 'react';

function ExampleUseState() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Example State</p>
      <div
        style={{ width: 100, display: 'flex', justifyContent: 'space-between' }}
      >
        <Increase setValue={setValue} />
        <ShowValue value={value} />
        <Decrease setValue={setValue} />
      </div>
    </div>
  );
}

function ShowValue({ value }) {
  return <div>{value}</div>;
}

function Increase({ setValue }) {
  return <button onClick={() => setValue((prev) => prev + 1)}>+</button>;
}

function Decrease({ setValue }) {
  return <button onClick={() => setValue((prev) => prev - 1)}>-</button>;
}

export default ExampleUseState;
