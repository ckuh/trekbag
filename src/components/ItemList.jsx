export default function ItemList({
  items = [],
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        >
          {item.name}
        </Item>
      ))}
    </ul>
  );
}

function Item({ item, handleDeleteItem, handleToggleItem, children }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => {
            handleToggleItem(item.id);
          }}
          checked={item.checked}
          type="checkbox"
        />
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
