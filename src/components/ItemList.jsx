export default function ItemList({ items = [], handleDeleteItem }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} handleDeleteItem={handleDeleteItem}>
          {item.name}
        </Item>
      ))}
    </ul>
  );
}

function Item({ item, handleDeleteItem, children }) {
  return (
    <li className="item">
      <label>
        <input checked={item.checked} type="checkbox" />
        {children}
      </label>
      <button
        onClick={() => {
          handleDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
