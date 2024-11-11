import { initItems } from "./lib/constants";

import BackgroundHeading from "./components/BackgroundHeading";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [items, setItems] = useState(initItems);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime().toString(),
      name: newItemText,
      checked: false,
    };
    const newItems = [...items, newItem];

    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initItems);
  };

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList items={items} setItems={setItems} />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
