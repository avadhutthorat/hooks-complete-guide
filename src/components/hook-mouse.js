import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const setMousePosition = e => {
    console.log("In setMousePosition");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("In use effect");
    window.addEventListener("mousemove", setMousePosition);
  }, []);
  return (
    <div>
      <h4>Mouse position</h4>
      <h3>Mouse X : {x}</h3>
      <h3>Mouse Y : {y}</h3>
    </div>
  );
};

export default HookMouse;
