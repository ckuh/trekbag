import { createContext, useEffect, useState } from "react";
import { initItems } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initItems
  );

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime().toString(),
      name: newItemText,
      checked: false,
    };
    const newItems = [...items, newItem];

    setItems(newItems);
  };

  const handleDeleteItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
  };

  const handleToggleItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          checked: !item.checked,
        };
      }

      return item;
    });

    setItems(newItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => ({
      ...item,
      checked: true,
    }));

    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => ({
      ...item,
      checked: false,
    }));

    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initItems);
  };

  useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem("items", json);
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        handleRemoveAllItems,
        handleResetToInitial,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
