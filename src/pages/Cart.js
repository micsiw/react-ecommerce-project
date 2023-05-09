import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { BsPlus } from "react-icons/bs";
import { HiMinusSmall } from "react-icons/hi2";
import { TbTrashX } from "react-icons/tb";

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
      <div className="cart-content">
        {cartItems.length > 0 ? (
          <>
            <div className="cart-products-list-wrapper">
              <div className="cart-products-list">
                {cartItems.length > 0}
                {cartItems.map((item) => {
                  return (
                    <div className="cart-product" key={item.id}>
                      <div className="cart-product-image">
                        <img src={item.image} alt={item.name}></img>
                      </div>
                      <div className="cart-product-desc">
                        <p className="cart-product-name">{item.name}</p>
                        <p className="cart-product-type">
                          {item.category.replace(/_/g, " ")}
                        </p>
                        <div className="cart-quantity">
                          Quantity:
                          <HiMinusSmall
                            className="cart-quantity-button"
                            onClick={() => removeFromCart(item.id)}
                            size={"1.65em"}
                            title={"remove single item"}
                            tabIndex={0}
                          ></HiMinusSmall>
                          <p className="cart-quantity-digit">{item.quantity}</p>
                          <BsPlus
                            className="cart-quantity-button"
                            size={"2em"}
                            onClick={() => addToCart(item.id)}
                            title={"add single item"}
                            tabIndex={0}
                          ></BsPlus>
                        </div>
                        <div className="cart-product-price">
                          Total:{" "}
                          <div className="cart-product-price-digit">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                        <TbTrashX
                          className="cart-remove-button"
                          onClick={() => deleteFromCart(item.id)}
                          size={"1.4em"}
                          title={"delete from cart"}
                          tabIndex={0}
                        ></TbTrashX>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="cart-checkout-wrapper">
              <h4 className="cart-checkout-title">Summary</h4>
              <div className="cart-discount">
                <input type="text" placeholder="Enter discount code"></input>
                <button>OK</button>
              </div>
              <div className="cart-price-summary">
                <p>Estimated total</p>
                <p className="cart-total-price">${priceTotal().toFixed(2)}</p>
              </div>
              <button
                className="checkout-button"
                onClick={() => alert("Thank you for visiting :-)")}
              >
                Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="empty-cart-info">Cart is empty</div>
        )}
      </div>
    </div>
  );
}

export default Cart;
