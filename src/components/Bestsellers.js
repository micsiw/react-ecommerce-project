import { useEffect, useState } from "react";

import "../styles/Bestsellers.css";

function Bestsellers() {
  const [items, setItems] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.8"
    );
    const items = await data.json();
    setItems(items);
  };

  // console.log(items);

  return (
    <div className="bestsellers-section">
      <h3 className="bestsellers-title">Our Bestsellers</h3>
      <div className="bestseller-products">
        <div className="bestseller-product">
          {items ? (
            <>
              <img
                src={items[0].image_link}
                alt={items[0].name}
                className="bestseller-image"
              ></img>
              <div className="product-info">
                <p className="product-name">{items[0].name}</p>
                <p className="product-type">{items[0].product_type}</p>
                <p className="product-price">
                  {Math.floor(items[0].price) + "$"}
                  <button>Bag</button>
                </p>
              </div>
            </>
          ) : null}
        </div>
        <div className="bestseller-product">
          {items ? (
            <>
              <img
                src={items[10].image_link}
                alt={items[10].name}
                className="bestseller-image"
              ></img>
              <div className="product-info">
                <p className="product-name">{items[10].name}</p>
                <p className="product-type">{items[10].product_type}</p>
                <p className="product-price">
                  {Math.floor(items[10].price) + "$"}
                  <button>Bag</button>
                </p>
              </div>
            </>
          ) : null}
        </div>
        <div className="bestseller-product">
          {items ? (
            <>
              <img
                src={items[20].image_link}
                alt={items[20].name}
                className="bestseller-image"
              ></img>
              <div className="product-info">
                <p className="product-name">{items[20].name}</p>
                <p className="product-type">{items[20].product_type}</p>
                <p className="product-price">
                  {Math.floor(items[20].price) + "$"}
                  <button>Bag</button>
                </p>
              </div>
            </>
          ) : null}
        </div>
        <div className="bestseller-product">
          {items ? (
            <>
              <img
                src={items[30].image_link}
                alt={items[30].name}
                className="bestseller-image"
              ></img>
              <div className="product-info">
                <p className="product-name">{items[30].name}</p>
                <p className="product-type">{items[30].product_type}</p>
                <p className="product-price">
                  {Math.floor(items[30].price) + "$"}
                  <button>Bag</button>
                </p>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Bestsellers;
