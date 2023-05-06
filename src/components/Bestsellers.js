import { useEffect, useState, useContext } from "react";
import { Oval } from "react-loader-spinner";
import { IoBagAddOutline } from "react-icons/io5";
import { ShopContext } from "../contexts/shopContext";

import "../styles/Bestsellers.css";

function Bestsellers() {
  const [items, setItems] = useState();
  const { addToCart } = useContext(ShopContext);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.8"
    );

    const items = await data.json();
    const itemsToDisplay = [];

    while (itemsToDisplay.length < 4) {
      let randomItemId = Math.floor(Math.random() * items.length);
      if (itemsToDisplay.indexOf(items[randomItemId]) === -1)
        itemsToDisplay.push(items[randomItemId]);
    }

    setItems(itemsToDisplay);
  };

  return (
    <div className="bestsellers-section">
      <h3 className="bestsellers-title">Our Bestsellers</h3>
      <div className="bestseller-products">
        {items ? (
          items.map((item) => {
            return (
              <div className="bestseller-product" key={item.id}>
                <img
                  src={item.image_link}
                  alt={item.name}
                  className="bestseller-image"
                ></img>
                <div className="product-info">
                  <p className="product-name">{item.name}</p>
                  <p className="product-type">
                    {item.product_type.replace(/_/g, " ")}
                  </p>
                  <p className="product-price">
                    {"$" + Number(item.price)}
                    <IoBagAddOutline
                      size="1.7rem"
                      title="add to cart"
                      className="add-cart-icon"
                      onClick={() => addToCart(item.id)}
                    />
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="loading-animation">
            <Oval
              height={60}
              width={60}
              color="black"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="gray"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Bestsellers;
