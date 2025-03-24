import book from "../../assets/img/hero/book.png";
import frame from "../../assets/img/hero/frame.png";
import frame2 from "../../assets/img/hero/frame-2.png";
import xstar from "../../assets/img/hero/xstar.png";
import frameShape from "../../assets/img/hero/frame-shape.png";
import bgshape from "../../assets/img/hero/bg-shape.png";
import bgshape2 from "../../assets/img/hero/bg-shape2.png";
import book01 from "../../assets/img/book/01.png";
import client1 from "../../assets/img/testimonial/client-1.png";
import client2 from "../../assets/img/testimonial/client-2.png";
import book05 from "../../assets/img/book/05.png";
import topBook1 from "../../assets/img/top-book/01.png";
import news9 from "../../assets/img/news/09.jpg";
import news10 from "../../assets/img/news/10.jpg";
import news11 from "../../assets/img/news/11.jpg";
import news12 from "../../assets/img/news/12.jpg";
import heroGirl from "../../assets/img/hero/hero-girl.png";
import { ArrowRight } from "lucide-react";

type Props = {};
const Client = (props: Props) => {
  return (
    <>
      <div className="hero-section hero-1 fix">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-8 col-lg-6">
              <div className="hero-items">
                <div className="book-shape">
                  <img src={book} alt="shape-img" />
                </div>
                <div className="frame-shape1 float-bob-x">
                  <img src={frame} alt="shape-img" />
                </div>
                <div className="frame-shape2 float-bob-y">
                  <img src={frame2} alt="shape-img" />
                </div>
                <div className="frame-shape3">
                  <img src={xstar} alt="img" />
                </div>
                <div className="frame-shape4 float-bob-x">
                  <img src={frameShape} alt="img" />
                </div>
                <div className="bg-shape1">
                  <img src={bgshape} alt="img" />
                </div>
                <div className="bg-shape2">
                  <img src={bgshape2} alt="shape-img" />
                </div>
                <div className="hero-content">
                  <h6 className="wow fadeInUp" data-wow-delay=".3s">
                    Up to 30% Off
                  </h6>
                  <h1 className="wow fadeInUp" data-wow-delay=".5s">
                    Get Your New Book <br /> With The Best Price
                  </h1>
                  <div className="form-clt wow fadeInUp" data-wow-delay=".9s">
                    <button type="submit" className="theme-btn">
                      Shop Now <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 col-lg-6">
              <div className="girl-image">
                <img className=" float-bob-x" src={heroGirl} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature Section start  */}
      <section className="feature-section fix section-padding">
        <div className="container">
          <div className="feature-wrapper">
            <div
              className="feature-box-items wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="icon">
                <i className="icon-icon-1"></i>
              </div>
              <div className="content">
                <h3>Return & refund</h3>
                <p>Money back guarantee</p>
              </div>
            </div>
            <div
              className="feature-box-items wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="icon">
                <i className="icon-icon-2"></i>
              </div>
              <div className="content">
                <h3>Secure Payment</h3>
                <p>30% off by subscribing</p>
              </div>
            </div>
            <div
              className="feature-box-items wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="icon">
                <i className="icon-icon-3"></i>
              </div>
              <div className="content">
                <h3>Quality Support</h3>
                <p>Always online 24/7</p>
              </div>
            </div>
            <div
              className="feature-box-items wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="icon">
                <i className="icon-icon-4"></i>
              </div>
              <div className="content">
                <h3>Daily Offers</h3>
                <p>20% off by subscribing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section start  */}
      <section className="shop-section section-padding fix pt-0">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Sách mới nhất
              </h2>
            </div>
            <a
              href="shop.html"
              className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 flex items-center gap-2 hover:bg-gray-100 transition-all animate-fade-up rounded-full"
              style={{ animationDelay: "0.5s" }}
            >
              Xem thêm <ArrowRight className="w-6 h-6" />
            </a>
          </div>
          <div className="book-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="shop-box-items style-2">
                  <div className="book-thumb center ">
                    <a href="shop-details-2.html">
                      <img src={book01} alt="img" />
                    </a>
                  </div>
                  <div className="shop-content">
                    <h5> Design Low Book </h5>
                    <h3>
                      <a href="shop-details.html">
                        Simple Things You To <br /> Save BOOK
                      </a>
                    </h3>
                    <ul className="price-list">
                      <li>$30.00</li>
                      <li>
                        <del>$39.99</del>
                      </li>
                    </ul>
                    <ul className="author-post">
                      <li className="authot-list">
                        <span className="content">Wilson</span>
                      </li>
                      <li className="star">
                        <i className="fa-solid fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="shop-button">
                    <a href="shop-details.html" className="theme-btn">
                      <i className="fa-solid fa-basket-shopping"></i> Add To
                      Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-section section-padding fix">
        <div className="container">
          <div className="section-title-area">
            <div
              className="section-title mb- wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h2>Sách Hay Nhất</h2>
            </div>
            <a
              href="shop.html"
              className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 flex items-center gap-2 hover:bg-gray-100 transition-all animate-fade-up rounded-full"
              style={{ animationDelay: "0.5s" }}
            >
              Xem thêm <ArrowRight className="w-6 h-6" />
            </a>
          </div>
          <div className="book-shop-wrapper">
            <div className="shop-box-items style-2">
              <div className="book-thumb center">
                <a href="shop-details-2.html">
                  <img src={book05} alt="img" />
                </a>
              </div>
              <div className="shop-content">
                <h5> Design Low Book </h5>
                <h3>
                  <a href="shop-details.html">
                    Flovely and Unicom <br /> Erna
                  </a>
                </h3>
                <ul className="price-list">
                  <li>$30.00</li>
                  <li>
                    <del>$39.99</del>
                  </li>
                </ul>
                <ul className="author-post">
                  <li className="authot-list">
                    <span className="thumb">
                      <img src={client1} alt="img" />
                    </span>
                    <span className="content">(Author) Albert</span>
                  </li>
                  <li className="star">
                    <i className="fa-solid fa-star"></i>
                  </li>
                </ul>
              </div>
              <div className="shop-button">
                <a href="shop-details.html" className="theme-btn">
                  <i className="fa-solid fa-basket-shopping"></i> Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Ratting Book Section start  */}
      <section className="top-ratting-book-section fix section-padding section-bg">
        <div className="container">
          <div className="top-ratting-book-wrapper">
            <div className="section-title-area">
              <div className="section-title">
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Xếp hạng hàng đầu
                </h2>
              </div>
              <a
                href="shop.html"
                className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 flex items-center gap-2 hover:bg-gray-100 transition-all animate-fade-up rounded-full"
                style={{ animationDelay: "0.5s" }}
              >
                Xem thêm <ArrowRight className="w-6 h-6" />
              </a>
            </div>
            <div className="row">
              <div className="col-xl-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="top-ratting-box-items">
                  <div className="book-thumb">
                    <a href="shop-details.html">
                      <img src={topBook1} alt="img" />
                    </a>
                  </div>
                  <div className="book-content">
                    <div className="title-header">
                      <div>
                        <h5> Design Low Book </h5>
                        <h3>
                          <a href="shop-details.html">
                            Simple Things You To Save BOOK
                          </a>
                        </h3>
                      </div>
                    </div>
                    <span className="mt-10">$30.00</span>
                    <ul className="author-post">
                      <li className="authot-list">
                        <span className="thumb">
                          <img src={client2} alt="img" />
                        </span>
                        <span className="content mt-10">Wilson</span>
                      </li>
                    </ul>
                    <div className="shop-btn">
                      <div className="star">
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <a href="shop-details.html" className="theme-btn">
                        <i className="fa-solid fa-basket-shopping"></i> Add To
                        Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section start  */}
      <section className="shop-section section-padding fix">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title wow fadeInUp" data-wow-delay=".3s">
              <h2>Sách bán chạy nhất</h2>
            </div>
            <a
              href="shop.html"
              className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 flex items-center gap-2 hover:bg-gray-100 transition-all animate-fade-up rounded-full"
              style={{ animationDelay: "0.5s" }}
            >
              Xem thêm <ArrowRight className="w-6 h-6" />
            </a>
          </div>
          <div className="swiper book-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="shop-box-items style-2">
                  <div className="book-thumb center">
                    <a href="shop-details-2.html">
                      <img src={book01} alt="img" />
                    </a>
                    <ul className="post-box">
                      <li>Hot</li>
                      <li>-30%</li>
                    </ul>
                  </div>
                  <div className="shop-content">
                    <h5> Design Low Book </h5>
                    <h3>
                      <a href="shop-details.html">
                        Simple Things You To <br /> Save BOOK
                      </a>
                    </h3>
                    <ul className="price-list">
                      <li>$30.00</li>
                      <li>
                        <del>$39.99</del>
                      </li>
                    </ul>
                    <ul className="author-post">
                      <li className="authot-list">
                        <span className="thumb">
                          <img src={client1} alt="img" />
                        </span>
                        <span className="content">Wilson</span>
                      </li>

                      <li className="star">
                        <i className="fa-solid fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="shop-button">
                    <a href="shop-details.html" className="theme-btn">
                      <i className="fa-solid fa-basket-shopping"></i> Add To
                      Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section start  */}
      <section className="news-section fix section-padding section-bg">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
              Our Latest News
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="news-card-items">
                <div className="news-image">
                  <img src={news9} alt="img" />
                  <img src={news9} alt="img" />
                  <div className="post-box">Activities</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Feb 10, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      Montes suspendisse massa curae malesuada
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="news-card-items">
                <div className="news-image">
                  <img src={news10} alt="img" />
                  <img src={news10} alt="img" />
                  <div className="post-box">Activities</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Mar 20, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      Playful Picks Paradise: Kids’ Essentials with Dash.
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="news-card-items">
                <div className="news-image">
                  <img src={news11} alt="img" />
                  <img src={news11} alt="img" />
                  <div className="post-box">Activities</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Jun 14, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      Tiny Emporium: Playful Picks for Kids’ Delightful Days.
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="news-card-items">
                <div className="news-image">
                  <img src={news12} alt="img" />
                  <img src={news12} alt="img" />
                  <div className="post-box">Activities</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Mar 12, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      Eu parturient dictumst fames quam tempor
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
