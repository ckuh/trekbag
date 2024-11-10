import { initItems } from "./lib/constants";

import BackgroundHeading from "./components/BackgroundHeading";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [items, setItems] = useState(initItems);

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList items={items} setItems={setItems} />
        <Sidebar setItems={setItems} />
      </main>

      <Footer />
    </>
  );
}

export default App;
