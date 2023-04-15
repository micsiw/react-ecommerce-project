import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/Blog-preview.css";
import articleImage1 from "./images/article-photo-mobile-1.jpg";
import articleImage2 from "./images/article-photo-mobile-2.jpg";
import articleImage3 from "./images/article-photo-mobile-3.jpg";

function BlogPreview() {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 3500,
          pauseonHover: true,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="blog-preview-section">
      <h3 className="blog-preview-title">Learn more in our blog</h3>
      <div className="slider-wrapper">
        <Slider {...settings}>
          <div className="slide-wrapper">
            <div className="blog-preview-article">
              <div className="preview-article-image">
                <img src={articleImage1} alt="woman with makeup"></img>
              </div>
              <div className="preview-article-content">
                <div className="preview-article-title">
                  ACNE CAUSES: WHAT IS ACNE WAND WHY DO I HAVE IT?
                </div>
                <div className="preview-article-description">
                  The basics include a daily bath or shower and washing the
                  face.
                </div>
                <div className="article-link-wrapper">
                  <a href="" className="article-link">
                    READ FULL ARTICLE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-wrapper">
            <div className="blog-preview-article middle-article">
              <div className="preview-article-image">
                <img src={articleImage2} alt="woman with makeup"></img>
              </div>
              <div className="preview-article-content">
                <div className="preview-article-title">
                  OUR ADVICE HOW TO DETERMINE YOUR SKIN TYPE.
                </div>
                <div className="preview-article-description">
                  Short brief about the brands. Revolutionise your routine with
                  luxury skin care you wont be able to live without.
                </div>
                <div className="article-link-wrapper">
                  <a href="" className="article-link">
                    READ FULL ARTICLE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-wrapper">
            <div className="blog-preview-article">
              <div className="preview-article-image">
                <img src={articleImage3} alt="woman with makeup"></img>
              </div>
              <div className="preview-article-content">
                <div className="preview-article-title">
                  WHY MORNING ROUTINE IS SO IMPORTANT?
                </div>
                <div className="preview-article-description">
                  For many of us, morning are a busy time. Getting ready,
                  grabbing a bite to eat, and getting out...
                </div>
                <div className="article-link-wrapper">
                  <a href="" className="article-link">
                    READ FULL ARTICLE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default BlogPreview;
