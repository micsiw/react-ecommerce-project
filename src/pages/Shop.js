import { useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import shopReducer, { INITIAL_STATE } from "../reducers/shopReducer";
import { Rating } from "react-simple-star-rating";
import Pagination from "../components/Pagination";
import imagePlaceholder from "../utilities/placeholderImages";
import ShopSelect from "../components/ShopSelect";
import ShopFilters from "../components/ShopFilters";

import "../styles/Shop.css";

let PageSize = 20;

function Shop() {
  const { filters } = useLocation().state;
  const [state, dispatch] = useReducer(shopReducer, {
    ...INITIAL_STATE,
    filter: filters,
  });

  // pagination

  const firstPageIndex = (state.currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentData = state.items.slice(firstPageIndex, lastPageIndex);

  // placeholder for broken images

  const imageNotLoaded = (e) => {
    e.target.src =
      imagePlaceholder[Math.floor(Math.random() * imagePlaceholder.length)];
  };

  useEffect(() => {
    dispatch({ type: "CHANGE_FILTER", payload: filters });
  }, [filters]);

  useEffect(() => {
    const getProducts = async () => {
      dispatch({ type: "FETCH_START" });
      const data = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/${state.filter}` +
          `${state.additionalFilters}`
      );
      const items = await data.json();
      // console.log(items);
      dispatch({ type: "FETCH_SUCCESS", payload: items });
    };

    getProducts();
  }, [state.filter, state.additionalFilters]);

  useEffect(() => {
    if (state.orderSelectedOption === "recommended") {
      dispatch({ type: "LOAD_ORDER_RECOMMENDED" });
    }
    if (state.orderSelectedOption === "alphabetical") {
      dispatch({ type: "LOAD_ORDER_ALPHABETICAL" });
    }
    if (state.orderSelectedOption === "price-desc") {
      dispatch({ type: "LOAD_ORDER_PRICE_DESCENDING" });
    }
    if (state.orderSelectedOption === "price-asc") {
      dispatch({ type: "LOAD_ORDER_PRICE_ASCENDING" });
    }
  }, [state.orderSelectedOption]);

  const handleAdditionalFiltersChange = (additionalFilters) => {
    dispatch({ type: "SET_ADDITIONAL_FILTERS", payload: additionalFilters });
  };

  if (state.loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="shop-section">
      <div className="shop-filters">
        <ShopFilters
          items={state.items}
          handleAdditionalFiltersChange={handleAdditionalFiltersChange}
        />
      </div>
      <div className="shop-order-filter">
        <ShopSelect
          options={[
            { value: "recommended", label: "Recommended" },
            { value: "alphabetical", label: "Alphabetical" },
            { value: "price-desc", label: "Price High-Low" },
            { value: "price-asc", label: "Price Low-High" },
          ]}
          orderSelectedOption={state.orderSelectedOption}
          setOrderSelectedOption={(e) =>
            dispatch({ type: "CHANGE_ORDER", payload: e })
          }
        ></ShopSelect>
      </div>
      <div className="shop-product-list">
        <div className="shop-product-display">
          {currentData.map((item) => {
            return (
              <div className="shop-product" key={item.id}>
                <img
                  src={"http:" + item.api_featured_image}
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
          currentPage={state.currentPage}
          totalCount={state.items.length}
          pageSize={PageSize}
          onPageChange={(page) =>
            dispatch({ type: "CHANGE_PAGE", payload: page })
          }
        />
      </div>
    </div>
  );
}

export default Shop;
