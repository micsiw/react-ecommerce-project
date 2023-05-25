import ShopFilterTypeCarousel from "./ShopFilterTypeCarousel";
import "../styles/ShopFilters.css";

function ShopFilters() {
  return (
    <div>
      <div className="filters">
        Filters
        <ShopFilterTypeCarousel />
      </div>
    </div>
  );
}

export default ShopFilters;
