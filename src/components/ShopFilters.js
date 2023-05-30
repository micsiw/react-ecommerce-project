import { useReducer } from "react";
import ShopFilterTypeCarousel from "./ShopFilterTypeCarousel";
import filterReducer, { INITIAL_STATE } from "../reducers/filterReducer";
import { Rating } from "react-simple-star-rating";
import "../styles/ShopFilters.css";

function ShopFilters({ items, handleAdditionalFiltersChange }) {
  const [state, dispatch] = useReducer(filterReducer, INITIAL_STATE);

  // const [filterOpen, setFilterOpen] = useState(false);
  // const [filterBrand, setFilterBrand] = useState("");
  // const [filterPriceMin, setFilterPriceMin] = useState("");
  // const [filterPriceMax, setFilterPriceMax] = useState("");
  // const [filterRating, setFilterRating] = useState(0);
  // const [filterQuery, setFilterQuery] = useState("");

  const queries = [
    state.filterBrand,
    state.filterPriceMin,
    state.filterPriceMax,
    state.filterRating,
  ];

  const brands = new Set();
  items.forEach((item) => item.brand !== null && brands.add(item.brand));

  // const handleOpen = () => {
  //   setFilterOpen(!filterOpen);
  // };

  // const handleBrandFilterChange = (value) => {
  //   // setFilterBrand("brand=" + value + "&");
  //   setFilterBrand(value);
  // };

  // const handleMinPriceChange = (value) => {
  //   // setFilterPriceMin("price_greater_than=" + value + "&");
  //   setFilterPriceMin(value);
  // };

  // const handleMaxPriceChange = (value) => {
  //   // setFilterPriceMax("price_less_than=" + value + "&");
  //   setFilterPriceMax(value);
  // };

  const handleRatingFilterChange = (value) => {
    // setFilterRating("rating_greater_than=" + (value - 1).toString() + "&");
    dispatch({ type: "CHANGE_MIN_RATING_FILTER", payload: value });
  };

  const handleSendQuery = () => {
    const finalQuery = queries
      .filter((query) => (query !== "") & (query !== 0))
      .join("");
    console.log(finalQuery);
    // handleAdditionalFiltersChange(finalQuery)
  };

  // const handleFilterQuery = () => {
  //   const finalQuery = queries
  //     .filter((query) => (query !== "") & (query !== 0))
  //     .join("");
  //   // console.log(finalQuery);
  //   setFilterQuery(finalQuery);
  // };

  return (
    <div>
      <div className="filters">
        <ShopFilterTypeCarousel />
        <div className="additional-filters-section">
          <div className="filters-dropdown">
            <button onClick={() => dispatch({ type: "SHOW_FILTER_MENU" })}>
              D
            </button>
            Filters
          </div>
          {state.filterOpen ? (
            <div className="additional-filters">
              {/* delete potem */}
              <br></br>
              {/* delete potem */}
              <div className="brand-filter">
                <label htmlFor="brands-select">Brand: </label>
                <select
                  id="brands-select"
                  value={state.filterBrand}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_BRAND_FILTER",
                      payload: e.target.value,
                    })
                  }
                >
                  <option value="">All</option>
                  {[...brands].sort().map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
              <div className="price-filter">
                <label htmlFor="price-select">Price range: </label>
                <input
                  type="number"
                  placeholder="min. value"
                  id="price-select"
                  value={state.filterPriceMin}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_MIN_PRICE_FILTER",
                      payload: e.target.value,
                    })
                  }
                ></input>
                {" - "}
                <input
                  type="number"
                  placeholder="max. value"
                  id="price-select"
                  value={state.filterPriceMax}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_MAX_PRICE_FILTER",
                      payload: e.target.value,
                    })
                  }
                ></input>
              </div>
              <div className="rating filter">
                <p>Minimum score: </p>
                <Rating
                  emptyStyle={{ display: "flex" }}
                  fillStyle={{ display: "-webkit-inline-box" }}
                  initialValue={0}
                  size={20}
                  value={state.filterRating}
                  onClick={handleRatingFilterChange}
                />
              </div>
              <button onClick={handleSendQuery}>Filter</button>
            </div>
          ) : null}
        </div>
      </div>
      {/* delete potem */}
      <br></br>
      {/* delete potem */}
    </div>
  );
}

export default ShopFilters;
