import React, { useState, useEffect } from "react";

const UseEffectHookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you have clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Count {count} times
      </button>
    </div>
  );
};

export default UseEffectHookCounter;
