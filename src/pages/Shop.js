import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Pagination from "../components/Pagination";
import imagePlaceholder from "../utilities/placeholderImages";
import ShopSelect from "../components/ShopSelect";

import "../styles/Shop.css";

let PageSize = 20;

function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [filter, setFilter] = useState("products.json?price_greater_than=1");
  const [orderSelectedOption, setOrderSelectedOption] = useState("recommended");
  // const { addToCart } = useContext(ShopContext);

  // pagination

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;

  // placeholder for broken images

  const imageNotLoaded = (e) => {
    e.target.src =
      imagePlaceholder[Math.floor(Math.random() * imagePlaceholder.length)];
  };

  // fetch

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setCurrentData(items.slice(firstPageIndex, lastPageIndex));
  }, [currentPage]);

  useEffect(() => {
    if (orderSelectedOption === "recommended") {
      setFilter("products.json?price_greater_than=1");
      getProducts();
      console.log("rec fired");
    }
    if (orderSelectedOption === "alphabetical") {
      setItems(
        items.sort((a, b) =>
          a.name.replace(/\s/g, "").localeCompare(b.name.replace(/\s/g, ""))
        )
      );
      setCurrentPage(1);
      setCurrentData(items.slice(firstPageIndex, lastPageIndex));
    }
    if (orderSelectedOption === "price-desc") {
      setItems(items.sort((a, b) => b.price - a.price));
      setCurrentPage(1);
      setCurrentData(items.slice(firstPageIndex, lastPageIndex));
    }
    if (orderSelectedOption === "price-asc") {
      setItems(items.sort((a, b) => a.price - b.price));
      setCurrentPage(1);
      setCurrentData(items.slice(firstPageIndex, lastPageIndex));
    }
  }, [orderSelectedOption]);

  const getProducts = async () => {
    setLoading(true);
    const data = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/${filter}`
    );

    const items = await data.json();

    setItems(items);
    setCurrentData(items.slice(firstPageIndex, lastPageIndex));
    setLoading(false);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="shop-section">
      <div className="shop-order-filter">
        <ShopSelect
          options={[
            { value: "recommended", label: "Recommended" },
            { value: "alphabetical", label: "Alphabetical" },
            { value: "price-desc", label: "Price High-Low" },
            { value: "price-asc", label: "Price Low-High" },
          ]}
          orderSelectedOption={orderSelectedOption}
          setOrderSelectedOption={setOrderSelectedOption}
        ></ShopSelect>
      </div>
      <div className="shop-product-list">
        <div className="shop-product-display">
          {currentData.map((item) => {
            return (
              <div className="shop-product" key={item.id}>
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
                    {item.price > 0
                      ? "$" + Number(item.price).toFixed(2)
                      : "Unavailable"}
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
