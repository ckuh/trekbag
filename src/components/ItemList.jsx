import { useMemo, useState } from "react";
import Select from "react-select";

import EmptyView from "./EmptyView";
import { useItemsStore } from "../stores/itemsStore";

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

export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);

  const [sortBy, setSortBy] = useState(sortingOptions[0].value);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "checked") {
          if (b.checked !== a.checked) {
            return b.checked - a.checked;
          }
          return new Date(b.id) - new Date(a.id);
        }

        if (sortBy === "unchecked") {
          if (a.checked !== b.checked) {
            return a.checked - b.checked;
          }
          return new Date(b.id) - new Date(a.id);
        }

        return new Date(b.id) - new Date(a.id);
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
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
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
