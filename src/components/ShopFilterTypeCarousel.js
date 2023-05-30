import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";

const FILTER_TYPES = [
  { id: 0, name: "Blush", link: "blush", query: "product_type=blush&" },
  { id: 1, name: "Bronzer", link: "bronzer", query: "product_type=bronzer&" },
  { id: 2, name: "Eyebrow", link: "eyebrow", query: "product_type=eyebrow&" },
  {
    id: 3,
    name: "Eyeliner",
    link: "eyeliner",
    query: "product_type=eyeliner&",
  },
  {
    id: 4,
    name: "Eyeshadow",
    link: "eyeshadow",
    query: "product_type=eyeshadow&",
  },
  {
    id: 5,
    name: "Foundation",
    link: "foundation",
    query: "product_type=foundation&",
  },
  {
    id: 6,
    name: "Lip liner",
    link: "lip_liner",
    query: "product_type=lip_liner&",
  },
  {
    id: 7,
    name: "Lipstick",
    link: "lipstick",
    query: "product_type=lipstick&",
  },
  { id: 8, name: "Mascara", link: "mascara", query: "product_type=mascara&" },
  {
    id: 9,
    name: "Nail polish",
    link: "nail_polish",
    query: "product_type=nail_polish&",
  },
];

function ShopFilterTypeCarousel({ filterTypes }) {
  const { query } = useParams();

  const settings = {
    className: "filter-slider",
    arrows: false,
    slidesToShow: 2.5,
    infinite: false,
    swipeToSlide: true,
  };

  return (
    <div className="filter-slider-wrapper">
      <Slider {...settings}>
        {FILTER_TYPES.map((type) => {
          return (
            <div className="filter-type" key={type.id}>
              <Link
                to={`/shop/${query}/${type.link}`}
                state={
                  query === "bestsellers"
                    ? {
                        filters: `products.json?rating_greater_than=4.8&${type.query}`,
                      }
                    : {
                        filters: `products.json?price_greater_than=1&${type.query}`,
                      }
                }
              >
                <p>{type.name}</p>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ShopFilterTypeCarousel;
