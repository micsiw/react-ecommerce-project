import { useState, createContext } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId, itemName, itemImage, itemPrice, itemCategory) => {
    if (cartItems.filter((item) => item.id === itemId).length > 0) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCart);
    } else {
      setCartItems((items) => [
        ...items,
        {
          id: itemId,
          name: itemName,
          image: itemImage,
          price: itemPrice,
          category: itemCategory,
          quantity: 1,
        },
      ]);
    }
  };

  const deleteFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const contextValue = { cartItems, addToCart, removeFromCart, deleteFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
