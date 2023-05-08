import { useEffect, useState, useContext } from "react";
import { Oval } from "react-loader-spinner";
import { IoBagAddOutline } from "react-icons/io5";
import { ShopContext } from "../contexts/ShopContext";

import "../styles/Featured.css";

function Featured() {
  const [items, setItems] = useState();
  const { addToCart } = useContext(ShopContext);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=l'oreal"
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
    <div className="featured-section">
      <h3 className="featured-title">Our Featured Products</h3>
      <div className="featured-products">
        {items ? (
          items.map((item) => {
            return (
              <div className="featured-product" key={item.id}>
                <img
                  src={item.image_link}
                  alt={item.name}
                  className="featured-image"
                ></img>
                <div className="product-info">
                  <p className="product-name">{item.name}</p>
                  <p className="product-type">
                    {item.product_type.replace(/_/g, " ")}
                  </p>
                  <p className="product-price">
                    ${Number(item.price).toFixed(2)}
                    <IoBagAddOutline
                      size="1.7rem"
                      title="add to cart"
                      className="add-cart-icon"
                      tabIndex={0}
                      onClick={() =>
                        addToCart(
                          item.id,
                          item.name,
                          item.image_link,
                          item.price,
                          item.product_type
                        )
                      }
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

export default Featured;
