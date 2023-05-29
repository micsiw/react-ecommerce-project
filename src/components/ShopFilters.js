import { useState } from "react";
import ShopFilterTypeCarousel from "./ShopFilterTypeCarousel";
import { Rating } from "react-simple-star-rating";
import "../styles/ShopFilters.css";

function ShopFilters({ items, handleAdditionalFiltersChange }) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterPriceMin, setFilterPriceMin] = useState("");
  const [filterPriceMax, setFilterPriceMax] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  const [filterQuery, setFilterQuery] = useState("");

  const brands = new Set();
  items.forEach((item) => item.brand !== null && brands.add(item.brand));

  const handleOpen = () => {
    setFilterOpen(!filterOpen);
  };

  const handleBrandFilterChange = (value) => {
    setFilterBrand("brand=" + value + "&");
  };

  const handleMinPriceChange = (value) => {
    setFilterPriceMin("price_greater_than=" + value + "&");
  };

  const handleMaxPriceChange = (value) => {
    setFilterPriceMax("price_less_than=" + value + "&");
  };

  const handleRatingFilterChange = (value) => {
    setFilterRating("rating_greater_than=" + value.toString() + "&");
  };

  const handleFilterQuery = () => {
    const queries = [filterBrand, filterPriceMin, filterPriceMax, filterRating];
    const finalQuery = queries
      .filter((query) => (query !== "") & (query !== 0))
      .join();
    console.log(finalQuery);
    setFilterQuery(finalQuery);
  };

  return (
    <div>
      <div className="filters">
        <ShopFilterTypeCarousel />
        <div className="additional-filters-section">
          <div className="filters-dropdown">
            <button onClick={handleOpen}>D</button>Filters
          </div>
          {filterOpen ? (
            <div className="additional-filters">
              {/* delete potem */}
              <br></br>
              {/* delete potem */}
              <div className="brand-filter">
                <label htmlFor="brands-select">Brand: </label>
                <select
                  id="brands-select"
                  // value={filterBrand}
                  onChange={(e) => handleBrandFilterChange(e.target.value)}
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
                  // value={filterPriceMin}
                  onChange={(e) => handleMinPriceChange(e.target.value)}
                ></input>{" "}
                -{" "}
                <input
                  type="number"
                  placeholder="max. value"
                  id="price-select"
                  // value={filterPriceMax}
                  onChange={(e) => handleMaxPriceChange(e.target.value)}
                ></input>
              </div>
              <div className="rating filter">
                <p>Minimum score: </p>
                <Rating
                  emptyStyle={{ display: "flex" }}
                  fillStyle={{ display: "-webkit-inline-box" }}
                  initialValue={0}
                  size={20}
                  // value={filterRating}
                  onClick={handleRatingFilterChange}
                />
              </div>
              <button
                onClick={() => {
                  handleFilterQuery();
                  handleAdditionalFiltersChange(filterQuery);
                }}
              >
                Filter
              </button>
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
