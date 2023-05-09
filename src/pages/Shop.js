import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

let PageSize = 20;

function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const { addToCart } = useContext(ShopContext);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  let currentData = items.slice(firstPageIndex, lastPageIndex);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json"
    );

    const items = await data.json();

    console.log(items);

    setItems(items);
    setLoading(false);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="shop-section">
      <div>
        {currentData.map((item) => {
          return <p key={item.id}>{item.name}</p>;
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
  );
}

export default Shop;
