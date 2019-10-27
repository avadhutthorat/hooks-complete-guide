import React from "react";
import "./App.css";
import ClassCounter from "./components/class-counter";
import HookCounter from "./components/hook-counter";
import HookCounterOne from "./components/hook-counter-one";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <hr />
      <HookCounter />
      <hr />
      <HookCounterOne />
    </div>
  );
}

export default App;
