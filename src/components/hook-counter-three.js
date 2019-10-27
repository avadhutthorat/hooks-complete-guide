import React, { useState } from "react";

const HookCounterThree = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {items && items.map(item => <li key={item.id}>Value : {item.value}</li>)}
    </div>
  );
};

export default HookCounterThree;
