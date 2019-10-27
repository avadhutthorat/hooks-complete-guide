import React, { useState, useEffect } from "react";

const UseEffectConditionalHookCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("updating state");
    document.title = `you have clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Count {count} times
      </button>
    </div>
  );
};

export default UseEffectConditionalHookCounter;
