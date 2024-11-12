import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";

const sortingOptions = [
  {
    value: "default",
    label: "Sort by default",
  },
  {
    value: "checked",
    label: "Sort by checked",
  },
  {
    value: "unchecked",
    label: "Sort by unchecked",
  },
];

export default function ItemList({
  items = [],
  handleDeleteItem,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState(sortingOptions[0].value);
  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "checked") {
          return b.checked - a.checked;
        }

        if (sortBy === "unchecked") {
          return a.checked - b.checked;
        }

        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}
      {items.length > 0 &&
        sortedItems.map((item) => (
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
