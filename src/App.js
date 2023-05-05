import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
