import "./styles/App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Bestsellers from "./components/Bestsellers";
import Info from "./components/Info";
import Featured from "./components/Featured";
import BlogPreview from "./components/Blog-preview";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Hero />
        <Bestsellers />
        <Info />
        <Featured />
        <BlogPreview />
      </div>
      <Footer />
    </div>
  );
}

export default App;
