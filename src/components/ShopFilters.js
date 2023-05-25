import { useState } from "react";
import ShopFilterTypeCarousel from "./ShopFilterTypeCarousel";
import { Rating } from "react-simple-star-rating";
import "../styles/ShopFilters.css";

function ShopFilters({ items }) {
  const [filterOpen, setFilterOpen] = useState(false);

  const brands = new Set();
  items.forEach((item) => item.brand !== null && brands.add(item.brand));
  console.log(brands);

  const handleOpen = () => {
    setFilterOpen(!filterOpen);
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
                <select>
                  <option value="" defaultValue disabled hidden>
                    Choose brand
                  </option>
                  <option value="all">All</option>
                  {[...brands].sort().map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
              <div className="price-filter">
                <input type="number" placeholder="min. value"></input> -{" "}
                <input type="number" placeholder="max. value"></input>
              </div>
              <div className="rating filter">
                <Rating
                  emptyStyle={{ display: "flex" }}
                  fillStyle={{ display: "-webkit-inline-box" }}
                  initialValue={0}
                  size={20}
                />
              </div>
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
