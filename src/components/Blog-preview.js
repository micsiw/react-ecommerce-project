import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "../styles/Blog-preview.css";
import articleImage1 from "./images/article-photo-1.jpg";
import articleImage2 from "./images/article-photo-2.jpg";
import articleImage3 from "./images/article-photo-3.jpg";

function BlogPreview() {
  return (
    <div className="blog-preview-section">
      <h3 className="blog-preview-title">Learn more in our blog</h3>
      <div className="article-preview-scroller">
        <Swiper pagination={true} modules={[Pagination]}>
          <SwiperSlide>
            <div className="blog-preview-article">
              <div className="preview-article-image">
                <img src={articleImage1} alt="woman with makeup"></img>
              </div>
              <div className="preview-article-content">
                <div className="preview-article-title">
                  Acne Causes: What is acne and why do I have it?
                </div>
                <div className="preview-article-description">
                  The basics include a daily bath or shower and washing the
                  face.
                </div>
                <a href="" className="article-link">
                  READ FULL ARTICLE
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog-preview-article">
              <div className="preview-article-image">
                <img src={articleImage2} alt="woman with makeup"></img>
              </div>
              <div class="preview-article-content">
                <div className="preview-article-title">
                  Acne Causes: What is acne and why do I have it?
                </div>
                <div className="preview-article-description">
                  The basics include a daily bath or shower and washing the
                  face.
                </div>
                <a href="" className="article-link">
                  READ FULL ARTICLE
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog-preview-article">
              <div className="preview-article-image">
                <img src={articleImage3} alt="woman with makeup"></img>
              </div>
              <div class="preview-article-content">
                <div className="preview-article-title">
                  Acne Causes: What is acne and why do I have it?
                </div>
                <div className="preview-article-description">
                  The basics include a daily bath or shower and washing the
                  face.
                </div>
                <a href="" className="article-link">
                  READ FULL ARTICLE
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default BlogPreview;
