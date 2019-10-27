import React, { useState } from "react";

const HookCounterOne = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <label htmlFor="count">Count {count}</label> <br />
      <button onClick={() => setCount(initialCount)}>Reset</button> <br />
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment by 1
      </button>
      <br />
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Decrement by 1
      </button>
      <br />
      <button onClick={() => setCount(prevCount => prevCount + 5)}>
        Increment by 5
      </button>
      <br />
    </div>
  );
};

export default HookCounterOne;
