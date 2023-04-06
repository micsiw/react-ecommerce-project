// import { useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

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
      <Hero />
    </div>
  );
}

export default App;
