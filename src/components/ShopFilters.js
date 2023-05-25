import Slider from "react-slick";
import "../styles/ShopFilters.css";
import { Link, useParams } from "react-router-dom";

function ShopFilters() {
  const { query } = useParams();

  const settings = {
    className: "filter-slider",
    arrows: false,
    slidesToShow: 2.5,
    infinite: false,
    swipeToSlide: true,
  };

  return (
    <div>
      <div className="filters">
        Filters
        <div className="filter-slider-wrapper">
          <Slider {...settings}>
            <div className="filter-type">
              <Link
                to={`/shop/${query}/bronzer`}
                state={
                  query === "bestsellers"
                    ? {
                        filters:
                          "products.json?rating_greater_than=4.8&product_type=bronzer",
                      }
                    : {
                        filters:
                          "products.json?price_greater_than=1&product_type=bronzer",
                      }
                }
              >
                <p>Bronzer</p>
              </Link>
            </div>
            <div className="filter-type">
              <Link
                to={`/shop/${query}/blush`}
                state={
                  query === "bestsellers"
                    ? {
                        filters:
                          "products.json?rating_greater_than=4.8&product_type=blush",
                      }
                    : {
                        filters:
                          "products.json?price_greater_than=1&product_type=blush",
                      }
                }
              >
                <p>Blush</p>
              </Link>
            </div>
            <div className="filter-type">
              <Link
                to={`/shop/${query}/eyebrow`}
                state={
                  query === "bestsellers"
                    ? {
                        filters:
                          "products.json?rating_greater_than=4.8&product_type=eyebrow",
                      }
                    : {
                        filters:
                          "products.json?price_greater_than=1&product_type=eyebrow",
                      }
                }
              >
                <p>Eyebrow</p>
              </Link>
            </div>
            <div className="filter-type">
              <Link
                to={`/shop/${query}/eyeliner`}
                state={
                  query === "bestsellers"
                    ? {
                        filters:
                          "products.json?rating_greater_than=4.8&product_type=eyeliner",
                      }
                    : {
                        filters:
                          "products.json?price_greater_than=1&product_type=eyeliner",
                      }
                }
              >
                <p>Eyeliner</p>
              </Link>
            </div>
            <div className="filter-type">
              <Link
                to={`/shop/${query}/eyeshadow`}
                state={
                  query === "bestsellers"
                    ? {
                        filters:
                          "products.json?rating_greater_than=4.8&product_type=eyeshadow",
                      }
                    : {
                        filters:
                          "products.json?price_greater_than=1&product_type=eyeshadow",
                      }
                }
              >
                <p>Eyeshadow</p>
              </Link>
            </div>
            <div className="filter-type">
              <Link
                to={`/shop/${query}/foundation`}
                state={
                  query === "bestsellers"
                    ? {
                        filters:
                          "products.json?rating_greater_than=4.8&product_type=foundation",
                      }
                    : {
                        filters:
                          "products.json?price_greater_than=1&product_type=foundation",
                      }
                }
              >
                <p>Foundation</p>
              </Link>
            </div>
            <div className="filter-type">
              <Link
                to={`/shop/${query}/lip_liner`}
                state={
                  query === "bestsellers"
                    ? {
                        filters:
                          "products.json?rating_greater_than=4.8&product_type=lip_liner",
                      }
                    : {
                        filters:
                          "products.json?price_greater_than=1&product_type=lip_liner",
                      }
                }
              >
                <p>Lip liner</p>
              </Link>
            </div>
            <div className="filter-type">
              <Link
                to={`/shop/${query}/lipstick`}
                state={
                  query === "bestsellers"
                    ? {
                        filters:
                          "products.json?rating_greater_than=4.8&product_type=lipstick",
                      }
                    : {
                        filters:
                          "products.json?price_greater_than=1&product_type=lipstick",
                      }
                }
              >
                <p>Lipstick</p>
              </Link>
            </div>
            <div className="filter-type">
              <Link
                to={`/shop/${query}/mascara`}
                state={
                  query === "bestsellers"
                    ? {
                        filters:
                          "products.json?rating_greater_than=4.8&product_type=mascara",
                      }
                    : {
                        filters:
                          "products.json?price_greater_than=1&product_type=mascara",
                      }
                }
              >
                <p>Mascara</p>
              </Link>
            </div>
            <div className="filter-type">
              <Link
                to={`/shop/${query}/nail_polish`}
                state={
                  query === "bestsellers"
                    ? {
                        filters:
                          "products.json?rating_greater_than=4.8&product_type=nail_polish",
                      }
                    : {
                        filters:
                          "products.json?price_greater_than=1&product_type=nail_polish",
                      }
                }
              >
                <p>Nail polish</p>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ShopFilters;
