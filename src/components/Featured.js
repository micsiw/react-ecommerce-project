import "../styles/Featured.css";

function Featured() {
  return (
    <div className="featured-section">
      <h3 className="featured-title">Our Featured Products</h3>
      <div className="featured-products">
        <div className="featured-product">
          <img src="#" className="featured-image"></img>
          <div>Product informations</div>
          <button>Add to bag</button>
        </div>
        <div className="featured-product">
          <img src="#" className="featured-image"></img>
          <div>Product informations</div>
          <button>Add to bag</button>
        </div>
        <div className="featured-product">
          <img src="#" className="featured-image"></img>
          <div>Product informations</div>
          <button>Add to bag</button>
        </div>
        <div className="featured-product">
          <img src="#" className="featured-image"></img>
          <div>Product informations</div>
          <button>Add to bag</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
