import { create } from "zustand";
import { persist } from "zustand/middleware";

import { initItems } from "../lib/constants";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initItems,
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime().toString(),
          name: newItemText,
          checked: false,
        };

        set((state) => {
          return { items: [...state.items, newItem] };
        });
      },
      deleteItem: (itemId) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== itemId);
          return { items: newItems };
        });
      },
      toggleItem: (itemId) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === itemId) {
              return {
                ...item,
                checked: !item.checked,
              };
            }

            return item;
          });

          return { items: newItems };
        });
      },
      markAllAsComplete: () => {
        set((state) => {
          console.log(state);
          const newItems = state.items.map((item) => ({
            ...item,
            checked: true,
          }));

          return { items: newItems };
        });
      },
      markAllAsIncomplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => ({
            ...item,
            checked: false,
          }));

          return { items: newItems };
        });
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: initItems }));
      },
    }),
    {
      name: "items",
    }
  )
);
