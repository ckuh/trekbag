export default function ItemList({ items = [] }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} checked={item.checked}>
          {item.name}
        </Item>
      ))}
    </ul>
  );
}

function Item({ checked, children }) {
  return (
    <li className="item">
      <label>
        <input checked={checked} type="checkbox" />
        {children}
      </label>
      <button>❌</button>
    </li>
  );
}
