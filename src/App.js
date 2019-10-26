import React from "react";
import "./App.css";
import ClassCounter from "./components/class-counter";
import HookCounter from "./components/hook-counter";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <hr />
      <HookCounter />
    </div>
  );
}

export default App;
