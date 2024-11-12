import EmptyView from "./EmptyView";

export default function ItemList({
  items = [],
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length !== 0 &&
        items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          >
            {item.name}
          </Item>
        ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem, children }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => {
            onToggleItem(item.id);
          }}
          checked={item.checked}
          type="checkbox"
        />
        {children}
      </label>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
