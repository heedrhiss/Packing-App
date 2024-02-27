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
      <Footer items={items} />
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

function PackingList({ items, onDelete, onCheck, onClear }) {
  const [sorBy, setSortBy] = useState("input");

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
      <div className="">
        <select
          value={sorBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by Input Order</option>
          <option value="alphabetic">Sort by Alphabetic Order</option>
          <option value="packed">Sort by Packed Order</option>
        </select>
        <button onClick={onClear}>Clear List</button>
      </div>
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

function Footer({ items }) {
  if (items.length === 0)
    return (
      <div className="stats">
        <p>Start adding your items to your Packing List🚀</p>
      </div>
    );

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItem) * 100);

  return (
    <footer className="stats">
      {percent === 100 ? (
        <p>You have Packed all items🥰 and ready to go...!🚀</p>
      ) : (
        <p>
          You have {numItem} item(s) on your list and {numPacked} items packed.
          ({percent}%)
        </p>
      )}
    </footer>
  );
}
export default App;
