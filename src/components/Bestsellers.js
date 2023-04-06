import "../styles/Bestsellers.css";

function Bestsellers() {
  return (
    <div className="bestsellers-section">
      <h3 className="bestsellers-title">Our Bestsellers</h3>
      <div className="bestseller-products">
        <div className="bestseller-product">
          <img src="#" className="bestseller-image"></img>
          <div>Product informations</div>
          <button>Add to bag</button>
        </div>
        <div className="bestseller-product">
          <img src="#" className="bestseller-image"></img>
          <div>Product informations</div>
          <button>Add to bag</button>
        </div>
        <div className="bestseller-product">
          <img src="#" className="bestseller-image"></img>
          <div>Product informations</div>
          <button>Add to bag</button>
        </div>
        <div className="bestseller-product">
          <img src="#" className="bestseller-image"></img>
          <div>Product informations</div>
          <button>Add to bag</button>
        </div>
      </div>
    </div>
  );
}

export default Bestsellers;
