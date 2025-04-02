import book1 from "../../../assets/img/hero/book1.png";
import book2 from "../../../assets/img/hero/book2.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../../context/Product";
import { IProduct } from "../../../interfaces/Products";
import news9 from "../../../assets/img/news/09.jpg";
import client1 from "../../../assets/img/testimonial/client-1.png";

type Props = {};
const Shopdefaul = (props: Props) => {
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
      <div className="breadcrumb-wrapper">
        <div className="book1">
          <img src={book1} alt="book" />
        </div>
        <div className="book2">
          <img src={book2} alt="book" />
        </div>
        <div className="container">
          <div className="page-heading">
            <h1>Trang Sản Phẩm</h1>
            <div className="page-header">
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".3s"
              >
                <li>
                  <Link to="/">Trang Chủ</Link>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
                <li>Sản Phẩm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="shop-section fix section-padding">
        <div className="container">
          <div className="shop-default-wrapper">
            <div className="row">
              <div className="col-12">
                <div
                  className="woocommerce-notices-wrapper wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <p>Showing 1-3 Of 34 Results </p>
                  <div className="form-clt">
                    <div className="nice-select" tabIndex={0}>
                      <span className="current">Default Sorting</span>
                      <ul className="list">
                        <li data-value="1" className="option selected focus">
                          Default sorting
                        </li>
                        <li data-value="1" className="option">
                          Sort by popularity
                        </li>
                        <li data-value="1" className="option">
                          Sort by average rating
                        </li>
                        <li data-value="1" className="option">
                          Sort by latest
                        </li>
                      </ul>
                    </div>
                    <div className="icon">
                      <a href="shop-list.html">
                        <i className="fas fa-list"></i>
                      </a>
                    </div>
                    <div className="icon-2 active">
                      <a href="shop.html">
                        <i className="fa-sharp fa-regular fa-grid-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 order-2 order-md-1 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="main-sidebar">
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h5>Search</h5>
                    </div>
                    <form action="#" className="search-toggle-box">
                      <div className="input-area search-container">
                        <input
                          className="search-input"
                          type="text"
                          placeholder="Search here"
                        />
                        <button className="cmn-btn search-icon">
                          <i className="far fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Filter by category */}
                  <div className="single-sidebar-widget mb-0">
                    <div className="wid-title">
                      <h5>Danh mục</h5>
                    </div>
                    <div className="categories-list">
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">Kinh Tế</span>
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Filter by author */}
                  <div className="single-sidebar-widget mb-0">
                    <div className="wid-title">
                      <h5>Tác giả</h5>
                    </div>
                    <div className="categories-list">
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            35
                          </span>
                        </span>
                      </label>
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                            </span>
                            24
                          </span>
                        </span>
                      </label>
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                            </span>
                            15
                          </span>
                        </span>
                      </label>
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                            </span>
                            2
                          </span>
                        </span>
                      </label>
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                            </span>
                            1
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Filter by price */}
                  <div className="single-sidebar-widget mb-0">
                    <div className="wid-title">
                      <h5>Thể loại</h5>
                    </div>
                    <div className="categories-list">
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            35
                          </span>
                        </span>
                      </label>
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                            </span>
                            24
                          </span>
                        </span>
                      </label>
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                            </span>
                            15
                          </span>
                        </span>
                      </label>
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                            </span>
                            2
                          </span>
                        </span>
                      </label>
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                            </span>
                            1
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="single-sidebar-widget mb-50">
                    <div className="wid-title">
                      <h5>Giá</h5>
                    </div>
                    <div className="range__barcustom">
                      <div className="slider">
                        <div
                          className="progress"
                          style={{ left: "15.29%", right: "58.9%" }}
                        ></div>
                      </div>
                      <div className="range-input">
                        <input
                          type="range"
                          className="range-min"
                          min="0"
                          max="10000"
                          value="2500"
                        />
                        <input
                          type="range"
                          className="range-max"
                          min="100"
                          max="10000"
                          value="7500"
                        />
                      </div>
                      <div className="range-items">
                        <div className="price-input">
                          <div className="d-flex align-items-center">
                            <a
                              href="shop-left-sidebar.html"
                              className="filter-btn mt-2 me-3"
                            >
                              Filter
                            </a>
                            <div className="field">
                              <span>Price:</span>
                            </div>
                            <div className="field">
                              <span>$</span>
                              <input
                                type="number"
                                className="input-min"
                                value="100"
                              />
                            </div>
                            <div className="separators">-</div>
                            <div className="field">
                              <span>$</span>
                              <input
                                type="number"
                                className="input-max"
                                value="1000"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-sidebar-widget mb-0">
                    <div className="wid-title">
                      <h5>By Review</h5>
                    </div>
                    <div className="categories-list">
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            35
                          </span>
                        </span>
                      </label>
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                            </span>
                            24
                          </span>
                        </span>
                      </label>
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                            </span>
                            15
                          </span>
                        </span>
                      </label>
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                            </span>
                            2
                          </span>
                        </span>
                      </label>
                      <label className="checkbox-single d-flex align-items-center">
                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                          <span className="checkbox-area d-center">
                            <input type="checkbox" />
                            <span className="checkmark d-center"></span>
                          </span>
                          <span className="text-color">
                            <span className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                              <i className="fa-sharp fa-light fa-star"></i>
                            </span>
                            1
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 order-1 order-md-2">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-arts"
                    role="tabpanel"
                    aria-labelledby="pills-arts-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <div className="container mx-auto py-10">
                        <h2 className="text-2xl font-bold text-center mb-6">
                          Sản phẩm nổi bật
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                          {sortedProducts.length > 0 ? (
                            sortedProducts
                              .slice(0, 5)
                              .map((product: IProduct) => (
                                <div
                                  key={product.id ?? product.code}
                                  className="shop-box-items style-2 flex flex-col items-center gap-18 p-8 bg-white shadow-md rounded-lg min-h-[450px] max-w-[300px] mx-auto"
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
                                  <div className="shop-content flex flex-col items-center gap-6 text-center">
                                    <h5 className="text-sm text-orange-500 font-medium truncate w-full">
                                      {product.category || "Sách Thiếu Nhi"}
                                    </h5>
                                    <h3 className="text-xl font-semibold text-blue-900 h-14 line-clamp-2 overflow-hidden">
                                      <Link
                                        to={`/shop-details/${product.code}`}
                                      >
                                        {product.title ||
                                          "Thỏ Bảy Màu Và Những Người Nghĩ Nó Là Bạn"}
                                      </Link>
                                    </h3>
                                    <ul className="author-post flex items-center gap-2 mt-2">
                                      <li className="authot-list flex items-center gap-2">
                                        <span className="thumb">
                                          <img
                                            alt="img"
                                            src={client1}
                                            className="w-6 h-6 rounded-full"
                                          />
                                        </span>
                                        <span className="content text-gray-600 text-sm truncate w-32">
                                          {product.supplier_name ||
                                            "Huyền Thái Ngọc"}
                                        </span>
                                      </li>
                                    </ul>
                                    <div className="shop-button mt-4">
                                      <Link
                                        to={`/shop-details/${product.code}`}
                                        className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-all"
                                      >
                                        <i className="fa-solid fa-basket-shopping"></i>{" "}
                                        Xem Chi Tiết
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
                    </div>
                  </div>
                </div>
                <div className="page-nav-wrap text-center">
                  <ul>
                    <li>
                      <a className="previous" href="shop.html">
                        Previous
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="shop.html">
                        1
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="shop.html">
                        2
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="shop.html">
                        3
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="shop.html">
                        ...
                      </a>
                    </li>
                    <li>
                      <a className="next" href="shop.html">
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shopdefaul;
