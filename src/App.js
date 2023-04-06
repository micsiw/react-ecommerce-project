// import { useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Bestsellers from "./components/Bestsellers";

function App() {
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = async () => {
  //   const data = await fetch(
  //     "http://makeup-api.herokuapp.com/api/v1/products.json"
  //   );
  //   const items = await data.json();
  //   console.log(items);
  // };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Hero />
        <Bestsellers />
      </div>
    </div>
  );
}

export default App;
