import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

import "../styles/Cart.css";

function Cart() {
  const { cartItems, addToCart, removeFromCart, deleteFromCart } =
    useContext(ShopContext);

  const priceTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-section">
      <h3 className="cart-title">Your cart</h3>
      <div className="cart-products-list">
        {cartItems.map((item) => {
          return (
            <div className="cart-product">
              <div className="cart-product-image">
                <img src={item.image} alt={item.name}></img>
              </div>
              <div className="cart-product-desc">
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  {item.quantity}
                  <button onClick={() => addToCart(item.id)}>+</button>
                </p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => deleteFromCart(item.id)}>
                  Remove item
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-discount">
        <p>Enter discount code:</p>
        <input type="text"></input>
        <button>OK</button>
      </div>
      <div>
        <p>Estimated total(incl. VAT)</p>
        <p>${priceTotal().toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Cart;
