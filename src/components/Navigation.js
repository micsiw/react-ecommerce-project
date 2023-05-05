import { useState, useRef } from "react";
import useOnClickOutside from "../utilities/useOnClickOutside";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
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
          <BsHandbag id="cart-icon" />
          <div className="cart-products">9</div>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
