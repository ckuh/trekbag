import BackgroundHeading from "./components/BackgroundHeading";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
