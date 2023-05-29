import { useState, useRef, useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import useOnClickOutside from "../utilities/useOnClickOutside";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import "../styles/Navigation.css";

function Navigation() {
  const ref = useRef();
  const [isNavActive, setNavActive] = useState(false);
  const { cartItems } = useContext(ShopContext);
  const itemsInCart = cartItems.reduce(
    (acc, current) => acc + current.quantity,
    0
  );

  useOnClickOutside(ref, () => setNavActive(false));

  const handleNavToggle = () => {
    setNavActive(!isNavActive);
  };

  return (
    <div className="header">
      <div className="header-bar">
        <div className="burger" onClick={handleNavToggle} tabIndex={0}>
          <div className="burger-first-line"></div>
          <div className="burger-second-line"></div>
        </div>
        <nav ref={ref} className={`navigation ${isNavActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                to="/shop/all"
                state={{ filters: "products.json?price_greater_than=1&" }}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/shop/bestsellers"
                state={{ filters: "products.json?rating_greater_than=4.8&" }}
              >
                Bestsellers
              </Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </nav>
        <Link to="/" className="logo">
          <h1 className="logo">GRN</h1>
        </Link>

        <Link to="/cart" className="cart-button">
          <BsHandbag id="cart-icon" />
          {cartItems.length > 0 && (
            <div className="nav-cart-products">{itemsInCart}</div>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
