import BackgroundHeading from "./components/BackgroundHeading";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemsContextProvider from "./contexts/ItemsContextProvider";

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
      </main>

      <Footer />
    </>
  );
}

export default App;
