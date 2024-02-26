const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
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
  return (
    <form className="add-form">
      <h3>What do you need to pack for your trip😍</h3>
      <select>
        {/* <input value={1}>1</input>
        <input value={2}>2</input>
        <input value={3}>3</input> */}
      </select>
      <input type="text" />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function Footer() {
  return (
    <footer className="stats">
      <p>You have packed X item(s) out of X items listed.</p>
    </footer>
  );
}
export default App;
