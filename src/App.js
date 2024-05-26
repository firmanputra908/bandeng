import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className=" transition duration-300 ease-in-out">
      <Navbar />
      <Home />
      <Feature />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
