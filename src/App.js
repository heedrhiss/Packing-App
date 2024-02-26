import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 2, packed: true },
];

function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Footer />
    </div>
  );
}
function Logo() {
  return <h1>🌴Heedrhiss Packing App💼</h1>;
}

function Form() {
  const [quantity, setQuantity] = useState("Quantity");
  const [description, setDescription] = useState(null);
  return (
    <form className="add-form">
      <h3>What do you need to pack for your trip😍</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        <option value={0}>Quantity</option>
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

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li
      key={item.id}
      style={
        item.packed
          ? { textDecoration: "line-through", fontStyle: "italic" }
          : {}
      }
    >
      {item.description}
      <span>
        <button>X</button>
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
