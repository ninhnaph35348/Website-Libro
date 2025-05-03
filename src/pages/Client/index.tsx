import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Import các hình ảnh tĩnh
import news9 from "../../assets/img/news/09.jpg";
import news10 from "../../assets/img/news/10.jpg";
import news11 from "../../assets/img/news/11.jpg";
import news12 from "../../assets/img/news/12.jpg";
import LatestBook from "./Index/LatestBook";
import BestSeller from "./Index/BestSeller";
import Banner from "./Index/Banner";
import TopRate from "./Index/TopRate";
import HomePopup from "./Index/Poppup";

const Client = () => {
  return (
    <>
    <HomePopup />
      <Banner />
        
        {/* Popup Component */}
  
        {/* Hero Section start */}

      {/* Feature Section start */}
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
                <h3>Hoàn trả & hoàn tiền</h3>
                <p>Đảm bảo hoàn lại tiền</p>
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
                <h3>Thanh toán an toàn</h3>
                <p>Giảm giá 30% khi đăng ký</p>
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
                <h3>Hỗ trợ sản phẩm</h3>
                <p>Online 24/7</p>
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
                <h3>Ưu đãi hằng ngày</h3>
                <p>Giảm giá 20% khi đăng ký</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section start - Sách Mới Nhất */}
      <LatestBook />

      {/* Best Sellers - Sách Bán Chạy Nhất */}
      <BestSeller />

      {/* Top Rate - Sách có lượt đánh giá cao nhất */}
      <TopRate />

      {/* Top Ratting Book Section start (Đã comment vì không có rating) */}
      {/* <section className="top-ratting-book-section fix section-padding section-bg">
        <div className="container">
          <div className="top-ratting-book-wrapper">
            <div className="section-title-area flex justify-between items-center mb-6">
              <div className="section-title">
                <h2
                  className="wow fadeInUp text-3xl font-bold text-blue-900"
                  data-wow-delay=".3s"
                >
                  Xếp hạng hàng đầu
                </h2>
              </div>
              <Link
                to="/shop"
                className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 flex items-center gap-2 hover:bg-gray-100 transition-all animate-fade-up rounded-full"
                style={{ animationDelay: "0.5s" }}
              >
                Xem thêm <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
            <div className="row">
               {sortedProducts
                .filter((product: IProduct) => product.rating)
                .slice(0, 1)
                .map((product: IProduct) => (
                  <div className="col-xl-6 wow fadeInUp" data-wow-delay=".3s" key={product.id ?? product.code}>
                    <div className="top-ratting-box-items flex flex-col md:flex-row items-center gap-6 p-6 bg-white shadow-md rounded-lg">
                      <div className="book-thumb w-full md:w-1/3 flex justify-center">
                        <Link to={`/shop-details/${product.code}`}>
                          <img
                            src={product.image ? `http://127.0.0.1:8000/storage/${product.image}` : news9}
                            alt={product.title}
                            className="w-48 h-64 object-cover rounded-lg"
                          />
                        </Link>
                      </div>
                      <div className="book-content w-full md:w-2/3 flex flex-col gap-2">
                        <h5 className="text-sm text-orange-500 font-medium">{product.category}</h5>
                        <h3 className="text-xl font-semibold text-blue-900">
                          <Link to={`/shop-details/${product.code}`}>
                            {product.title}
                          </Link>
                        </h3>
                        <span className="text-lg font-bold text-orange-500">
                          ${product.price?.toFixed(2) || "30.00"}
                        </span>
                        <ul className="author-post flex items-center gap-2 mt-2">
                          <li className="authot-list flex items-center gap-2">
                            <span className="thumb">
                              <img src={client2} alt="img" className="w-6 h-6 rounded-full" />
                            </span>
                            <span className="content text-gray-600 text-sm">{product.supplier_name}</span>
                          </li>
                        </ul>
                        <div className="shop-btn mt-4 flex items-center gap-3">
                          {product.rating && (
                            <div className="star text-yellow-500">
                              <i className="fa-solid fa-star"></i>
                            </div>
                          )}
                          <Link
                            to={`/shop-details/${product.code}`}
                            className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-all"
                          >
                            <i className="fa-solid fa-basket-shopping"></i> Add To Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))} 
            </div>
          </div>
        </div>
      </section> */}

      {/* News Section start */}
      <section className="news-section fix section-padding section-bg">
        <div className="container">
          <div className="section-title text-center">
            <h2
              className="mb-3 wow fadeInUp text-3xl font-bold text-blue-900"
              data-wow-delay=".3s"
            >
              Tin mới nhất
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
                    <Link to="/news-details">
                      Montes suspendisse massa curae malesuada
                    </Link>
                  </h3>
                  <Link to="/news-details" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
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
                    <Link to="/news-details">
                      Playful Picks Paradise: Kids’ Essentials with Dash.
                    </Link>
                  </h3>
                  <Link to="/news-details" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
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
                    <Link to="/news-details">
                      Tiny Emporium: Playful Picks for Kids’ Delightful Days.
                    </Link>
                  </h3>
                  <Link to="/news-details" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
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
                    <Link to="/news-details">
                      Eu parturient dictumst fames quam tempor
                    </Link>
                  </h3>
                  <Link to="/news-details" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
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
