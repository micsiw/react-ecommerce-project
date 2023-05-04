import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  const ref = useRef();

  const [isNavActive, setNavActive] = useState(false);

  useOnClickOutside(ref, () => setNavActive(false));

  const handleNavToggle = () => {
    setNavActive(!isNavActive);
  };

  return (
    <div className="header">
      <div className="header-bar">
        <div className="burger" onClick={handleNavToggle}>
          <div className="burger-first-line"></div>
          <div className="burger-second-line"></div>
        </div>
        <nav ref={ref} className={`navigation ${isNavActive ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Bestsellers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </nav>
        <Link to="/" className="logo">
          <h1 className="logo">GRN</h1>
        </Link>

        <Link to="/cart" className="cart-button">
          <button>C</button>
        </Link>
      </div>
    </div>
  );
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default Navigation;
