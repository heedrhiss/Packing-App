import { useState } from "react";
import Item from "./Item";

export function PackingList({ items, onDelete, onCheck, onClear }) {
  const [sorBy, setSortBy] = useState("input");

  let sorted;
  if (sorBy === "input") sorted = items;
  if (sorBy === "alphabetic")
    sorted = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sorBy === "packed")
    sorted = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sorted.map((item) => (
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
