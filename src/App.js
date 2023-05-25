import { Route, Routes } from "react-router-dom";
import { ShopContextProvider } from "./contexts/ShopContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navigation />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/shop/:query/" element={<Shop />}></Route>
            <Route path="/shop/:query/:type" element={<Shop />}></Route>
          </Routes>
        </div>
        <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
