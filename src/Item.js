export default function Item({ item, onDelete, onCheck }) {
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
