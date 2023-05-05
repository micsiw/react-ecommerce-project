import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { IoBagAddOutline } from "react-icons/io5";

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
        {/* {items ? (
            <>
              <img
                src={.image_link}
                alt={.name}
                className="bestseller-image"
              ></img>
              <div className="product-info">
                <p className="product-name">{.name}</p>
                <p className="product-type">{.product_type}</p>
                <p className="product-price">
                  {"$" + Math.floor(.price)}
                  <button>Bag</button>
                </p>
              </div>
            </>
          ) : null} */}
        {/* {items ? (
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
          ) : (
            <div className="loading-animation">
              <Oval
                height={30}
                width={30}
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
          ) : null} */}
      </div>
    </div>
  );
}

export default Bestsellers;
