export default function Footer({ items }) {
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
