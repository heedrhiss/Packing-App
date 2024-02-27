import { useState } from "react";

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

  return (
    <div>
      <Logo />
      <Form onAdd={handleItems} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onCheck={handleCheck}
      />
      <Footer />
    </div>
  );
}
function Logo() {
  return <h1>🌴Heedrhiss Packing App💼</h1>;
}

function Form({ onAdd }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    setDescription("");
    setQuantity(1);
    onAdd(newItem);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack for your trip😍</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item to be packed"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDelete, onCheck }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelete={onDelete}
            onCheck={onCheck}
          />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, onDelete, onCheck }) {
  return (
    <li
      key={item.id}
      style={
        item.packed
          ? { textDecoration: "line-through", fontStyle: "italic" }
          : {}
      }
    >
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onCheck(item.id)}
      />
      <span>{item.quantity}</span>
      <span>{item.description}</span>
      <span>
        <button onClick={() => onDelete(item.id)}>X</button>
      </span>
    </li>
  );
}

function Footer() {
  return (
    <footer className="stats">
      <p>You have packed X item(s) out of X items listed.</p>
    </footer>
  );
}
export default App;
