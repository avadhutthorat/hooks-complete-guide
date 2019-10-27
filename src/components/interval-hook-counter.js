import React, { useState, useEffect } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  const tick = () => {
    setCount(prevState => prevState + 1);
  };
  return <div>{count}</div>;
};

export default IntervalHookCounter;
