import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ProductCart from "./Components/ProductCart/ProductCart";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"HOLA ¿COMO ESTAS?"} />
      <ProductCart />
      <Footer />
    </div>
  );
}

export default App;
