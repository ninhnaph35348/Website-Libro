import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/Product";
import { IProduct } from "../../interfaces/Products";
import { ArrowRight } from "lucide-react";

// Import các hình ảnh tĩnh
import book from "../../assets/img/hero/book.png";
import frame from "../../assets/img/hero/frame.png";
import frame2 from "../../assets/img/hero/frame-2.png";
import xstar from "../../assets/img/hero/xstar.png";
import frameShape from "../../assets/img/hero/frame-shape.png";
import bgshape from "../../assets/img/hero/bg-shape.png";
import bgshape2 from "../../assets/img/hero/bg-shape2.png";
import client1 from "../../assets/img/testimonial/client-1.png";
import client2 from "../../assets/img/testimonial/client-2.png";
import heroGirl from "../../assets/img/hero/hero-girl.png";
import news9 from "../../assets/img/news/09.jpg";
import news10 from "../../assets/img/news/10.jpg";
import news11 from "../../assets/img/news/11.jpg";
import news12 from "../../assets/img/news/12.jpg";

type Props = {};
const Client = (props: Props) => {
  // Lấy dữ liệu sản phẩm từ ProductContext
  const { products } = useContext(ProductContext);

  // In dữ liệu products để kiểm tra
  console.log("Products:", products);

  // Sắp xếp products: sản phẩm có image sẽ được ưu tiên lên đầu
  const sortedProducts = [...products].sort((a: IProduct, b: IProduct) => {
    if (a.image && !b.image) return -1;
    if (!a.image && b.image) return 1;
    return 0;
  });

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
                <img className="float-bob-x" src={heroGirl} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>

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

      {/* Shop Section start - Sách Mới Nhất */}
      <section className="shop-section section-padding fix pt-0">
        <div className="container">
          <div className="section-title-area flex justify-between items-center mb-6">
            <div className="section-title">
              <h2
                className="wow fadeInUp text-3xl font-bold text-blue-900"
                data-wow-delay=".3s"
              >
                Sách Mới Nhất
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
          <div className="book-shop-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.length > 0 ? (
              sortedProducts.slice(0, 5).map((product: IProduct) => (
                <div
                  key={product.id ?? product.code}
                  className="shop-box-items style-2 flex flex-col items-center gap-4 p-6 bg-white shadow-md rounded-lg min-h-[450px] max-w-[300px] mx-auto"
                >
                  <div className="book-thumb w-full aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                    <Link to={`/shop-details/${product.code}`}>
                      <img
                        src={
                          product.image
                            ? `http://127.0.0.1:8000/storage/${product.image}`
                            : news9
                        }
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  </div>
                  <div className="shop-content flex flex-col items-center gap-2 text-center">
                    <h5 className="text-sm text-orange-500 font-medium truncate w-full">
                      {product.category || "Sách Thiếu Nhi"}
                    </h5>
                    <h3 className="text-xl font-semibold text-blue-900 h-14 line-clamp-2 overflow-hidden">
                      <Link to={`/shop-details/${product.code}`}>
                        {product.title ||
                          "Thỏ Bảy Màu Và Những Người Nghĩ Nó Là Bạn"}
                      </Link>
                    </h3>
                    <ul className="author-post flex items-center gap-2 mt-2">
                      <li className="authot-list flex items-center gap-2">
                        <span className="thumb">
                          <img
                            src={client1}
                            alt="img"
                            className="w-6 h-6 rounded-full"
                          />
                        </span>
                        <span className="content text-gray-600 text-sm truncate w-32">
                          {product.supplier_name || "Huyền Thái Ngọc"}
                        </span>
                      </li>
                    </ul>
                    <div className="shop-button mt-4">
                      <Link
                        to={`/shop-details/${product.code}`}
                        className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-all"
                      >
                        <i className="fa-solid fa-basket-shopping"></i> Xem Chi
                        Tiết
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                Không có sản phẩm để hiển thị.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Shop Section - Sách Bán Chạy Nhất */}
      <section className="shop-section section-padding fix">
        <div className="container">
          <div className="section-title-area flex justify-between items-center mb-6">
            <div className="section-title">
              <h2
                className="wow fadeInUp text-3xl font-bold text-blue-900"
                data-wow-delay=".3s"
              >
                Sách Bán Chạy Nhất
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
          <div className="book-shop-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.length > 0 ? (
              sortedProducts.slice(0, 5).map((product: IProduct) => (
                <div
                  key={product.id ?? product.code}
                  className="shop-box-items style-2 flex flex-col items-center gap-4 p-6 bg-white shadow-md rounded-lg min-h-[450px] max-w-[300px] mx-auto"
                >
                  <div className="book-thumb w-full aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                    <Link to={`/shop-details/${product.code}`}>
                      <img
                        src={
                          product.image
                            ? `http://127.0.0.1:8000/storage/${product.image}`
                            : news9
                        }
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  </div>
                  <div className="shop-content flex flex-col items-center gap-2 text-center">
                    <h5 className="text-sm text-orange-500 font-medium truncate w-full">
                      {product.category || "Sách Thiếu Nhi"}
                    </h5>
                    <h3 className="text-xl font-semibold text-blue-900 h-14 line-clamp-2 overflow-hidden">
                      <Link to={`/shop-details/${product.code}`}>
                        {product.title ||
                          "Thỏ Bảy Màu Và Những Người Nghĩ Nó Là Bạn"}
                      </Link>
                    </h3>
                    <ul className="author-post flex items-center gap-2 mt-2">
                      <li className="authot-list flex items-center gap-2">
                        <span className="thumb">
                          <img
                            src={client1}
                            alt="img"
                            className="w-6 h-6 rounded-full"
                          />
                        </span>
                        <span className="content text-gray-600 text-sm truncate w-32">
                          {product.supplier_name || "Huyền Thái Ngọc"}
                        </span>
                      </li>
                    </ul>
                    <div className="shop-button mt-4">
                      <Link
                        to={`/shop-details/${product.code}`}
                        className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-all"
                      >
                        <i className="fa-solid fa-basket-shopping"></i> Xem Chi
                        Tiết
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                Không có sản phẩm để hiển thị.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Top Ratting Book Section start (Đã comment vì không có rating) */}
      <section className="top-ratting-book-section fix section-padding section-bg">
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
              {/* Comment lại phần này vì database không có rating */}
              {/* {sortedProducts
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
                ))} */}
            </div>
          </div>
        </div>
      </section>

      {/* News Section start */}
      <section className="news-section fix section-padding section-bg">
        <div className="container">
          <div className="section-title text-center">
            <h2
              className="mb-3 wow fadeInUp text-3xl font-bold text-blue-900"
              data-wow-delay=".3s"
            >
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
