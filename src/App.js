import React from "react";
import "./App.css";
import ClassCounter from "./components/class-counter";
import HookCounter from "./components/hook-counter";
import HookCounter1 from "./components/hook-counter1";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <hr />
      <HookCounter />
      <hr />
      <HookCounter1 />
    </div>
  );
}

export default App;
