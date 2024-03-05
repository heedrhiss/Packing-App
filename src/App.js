import { useState } from "react";
import Form from "./Form";
import { PackingList } from "./Packinglist";
import F from "./foot";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 2, packed: true },
];

function App() {
  const [items, setItems] = useState([]);

  function handleItems(newItem) {
    setItems((items) => [...items, newItem]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => id !== item.id));
  }
  function handleCheck(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear all items?🤔"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAdd={handleItems} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onCheck={handleCheck}
        onClear={clearList}
      />
      <F items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴Heedrhiss Packing App💼</h1>;
}

export default App;
