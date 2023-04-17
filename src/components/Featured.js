import { useEffect, useState } from "react";

import "../styles/Featured.css";

function Featured() {
  const [items, setItems] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=l'oreal"
    );
    const items = await data.json();
    setItems(items);
  };

  // console.log(items);

  return (
    <div className="featured-section">
      <h3 className="featured-title">Our Featured Products</h3>
      <div className="featured-products">
        <div className="featured-product">
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
        <div className="featured-product">
          {items ? (
            <>
              <img
                src={items[1].image_link}
                alt={items[1].name}
                className="bestseller-image"
              ></img>
              <div className="product-info">
                <p className="product-name">{items[1].name}</p>
                <p className="product-type">{items[1].product_type}</p>
                <p className="product-price">
                  {Math.floor(items[1].price) + "$"}
                  <button>Bag</button>
                </p>
              </div>
            </>
          ) : null}
        </div>
        <div className="featured-product">
          {items ? (
            <>
              <img
                src={items[2].image_link}
                alt={items[2].name}
                className="bestseller-image"
              ></img>
              <div className="product-info">
                <p className="product-name">{items[2].name}</p>
                <p className="product-type">{items[2].product_type}</p>
                <p className="product-price">
                  {Math.floor(items[2].price) + "$"}
                  <button>Bag</button>
                </p>
              </div>
            </>
          ) : null}
        </div>
        <div className="featured-product">
          {items ? (
            <>
              <img
                src={items[3].image_link}
                alt={items[3].name}
                className="bestseller-image"
              ></img>
              <div className="product-info">
                <p className="product-name">{items[3].name}</p>
                <p className="product-type">{items[3].product_type}</p>
                <p className="product-price">
                  {Math.floor(items[3].price) + "$"}
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

export default Featured;
