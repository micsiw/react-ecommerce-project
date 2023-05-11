import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Pagination from "../components/Pagination";
import image_placeholder from "../components/images/No-Image-Placeholder.png";

import "../styles/Shop.css";

let PageSize = 20;

function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const { addToCart } = useContext(ShopContext);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  let currentData = items.slice(firstPageIndex, lastPageIndex);

  const imageNotLoaded = (e) => {
    e.target.src = image_placeholder;
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json"
    );

    const items = await data.json();

    // console.log(items);

    // items[4].image_link.onError={() => }

    // const fixedItems = items.filter((item) => !item.image_link.onerror);

    // console.log(fixedItems);

    setItems(items);
    setLoading(false);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="shop-section">
      <div className="shop-product-list">
        <div className="shop-product-display">
          {currentData.map((item) => {
            return (
              <div className="shop-product" key={item.id}>
                {console.log(item.image_link.onerror)}
                <img
                  src={item.image_link}
                  alt={item.name}
                  onError={imageNotLoaded}
                  className="shop-item-image"
                ></img>
                <div className="shop-info">
                  <p className="shop-item-brand">{item.brand}</p>
                  <p className="shop-item-name">{item.name}</p>
                  <p className="shop-item-type">
                    {item.product_type.replace(/_/g, " ")}
                  </p>
                  <Rating
                    emptyStyle={{ display: "flex" }}
                    fillStyle={{ display: "-webkit-inline-box" }}
                    initialValue={item.rating}
                    readonly={true}
                    size={20}
                  />
                  <p className="shop-item-price">
                    ${Number(item.price).toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={items.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default Shop;
