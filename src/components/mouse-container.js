import React, { useState, useEffect } from "react";
import HookMouse from "./hook-mouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(prevState => !prevState)}>
        Toggle Display
      </button>
      {display && <HookMouse />}
    </div>
  );
};

export default MouseContainer;
