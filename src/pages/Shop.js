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
  const [filter, setFilter] = useState("products.json");
  const [orderSelectedOption, setOrderSelectedOption] = useState("recommended");
  // const { addToCart } = useContext(ShopContext);

  //

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  let currentData = items.slice(firstPageIndex, lastPageIndex);

  //placeholder for broken images

  const imageNotLoaded = (e) => {
    e.target.src =
      imagePlaceholder[Math.floor(Math.random() * imagePlaceholder.length)];
  };

  //fetch

  useEffect(() => {
    getProducts(filter);
  }, [filter]);

  useEffect(() => {
    // if (orderSelectedOption === "recommended") {
    //   setFilter("products.json");
    // }
    // if (orderSelectedOption === "bestsellers") {
    //   setFilter("products.json?rating_greater_than=4.8");
    // }
    if (orderSelectedOption === "alphabetical") {
      console.log("alphabetical fired: ");
    }
    if (orderSelectedOption === "price-desc") {
      setItems(items.sort((a, b) => b.price - a.price));
      setCurrentPage(1);
      console.log("desc fired");
    }
    if (orderSelectedOption === "price-asc") {
      setItems(items.sort((a, b) => a.price - b.price));
      setCurrentPage(1);
      console.log("asc fired: ");
    }
  }, [orderSelectedOption]);

  const getProducts = async (filter) => {
    setLoading(true);
    const data = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/${filter}`
    );

    const items = await data.json();

    console.log(items);

    setItems(items);
    setLoading(false);
  };

  //order

  // const filterStandard = () => {
  //   setFilter("products.json");
  // };

  // const filterBestsellers = () => {
  //   setFilter("products.json?rating_greater_than=4.8");
  // };

  // const sortAlphabetical = () => {
  //   console.log("alpha items: " + items);
  //   const sortedItems = items.sort((a, b) => a.name.localeCompare(b.name));
  //   console.log("aplhabetical fired " + sortedItems.id);
  //   setItems(sortedItems);
  // };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="shop-section">
      <div className="shop-order-filter">
        <ShopSelect
          options={[
            { value: "all", label: "All" },
            { value: "alphabetical", label: "Alphabetical" },
            { value: "price-desc", label: "Price High-Low" },
            { value: "price-asc", label: "Price Low-High" },
          ]}
          orderSelectedOption={orderSelectedOption}
          setOrderSelectedOption={setOrderSelectedOption}
        ></ShopSelect>
        {/* <select name="order" id="order">
          <option value="recommended">Recommended</option>
          <option value="bestsellers">Bestsellers</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="price-desc">Price High-Low</option>
          <option value="price-asc">Price Low-High</option>
        </select> */}
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
