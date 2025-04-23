import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import book1 from "../../../assets/img/hero/book1.png";
import book2 from "../../../assets/img/hero/book2.png";
import news9 from "../../../assets/img/news/09.jpg";
import { ProductVariantContext } from "../../../context/ProductVariants";
import { IProductVariant } from "../../../interfaces/ProductVariants";

const Shopdefaul = () => {
  const { productVariantByStatus, getVariantsByStatus } = useContext(
    ProductVariantContext
  );

  useEffect(() => {
    getVariantsByStatus();
  }, []);

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
              {/* <div className="col-12">
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
              </div> */}
              {/* <div
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
              </div> */}
              
              <div className="col-12 order-1 order-md-2">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-arts"
                    role="tabpanel"
                    aria-labelledby="pills-arts-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <div className="container mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-6">
                          Danh sách sản phẩm
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                          {productVariantByStatus.length > 0 ? (
                            productVariantByStatus.map((variant: IProductVariant) => (
                              <div
                                key={variant.id}
                                className="shop-box-items style-2"
                              >
                                <div className="book-thumb center">
                                  <Link
                                    to={`/shop-details/${variant.product.code}/cover/${variant.cover_id}`}
                                  >
                                    <img
                                      src={
                                        variant.product.image
                                          ? `http://127.0.0.1:8000/storage/${variant.product.image}`
                                          : news9
                                      }
                                      alt={variant.product.title}
                                    />
                                  </Link>
                                  <ul className="post-box">
                                    <li>Hot</li>
                                    {variant.promotion && (
                                      <li>
                                        -
                                        {Math.round(
                                          (1 -
                                            variant.promotion / variant.price) *
                                          100
                                        )}
                                        %
                                      </li>
                                    )}
                                  </ul>
                                </div>

                                <div className="shop-content">
                                  <div className='flex justify-between'>
                                    <h5>{variant.product.category}</h5>
                                    <h5>Đã bán: {variant.sold_quantity}</h5>
                                  </div>
                                  <h3>
                                    <Link
                                      to={`/shop-details/${variant.product.code}`}
                                      className="line-clamp-1"
                                    >
                                      {variant.product.title}
                                    </Link>
                                  </h3>
                                  <ul className="author-post">
                                    <li className="!text-base !font-bold text-[#ff6500]">
                                      {variant.promotion ? (
                                        <>
                                          {Math.round(
                                            variant.promotion
                                          ).toLocaleString()}
                                          ₫
                                          <del className="!font-medium ml-2 text-[#5c707e]">
                                            {Math.round(
                                              variant.price
                                            ).toLocaleString()}
                                            ₫
                                          </del>
                                        </>
                                      ) : (
                                        `${Math.round(
                                          variant.price
                                        ).toLocaleString()}₫`
                                      )}
                                    </li>
                                    <li className="star">

                                      {Array.from({ length: 5 }, (_, i) => (
                                        <i
                                          key={i}
                                          className={`fa${i < variant.product.rating ? "-solid" : "-regular"
                                            } fa-star`}
                                        />
                                      ))}
                                    </li>
                                  </ul>
                                </div>

                                <div className="shop-button">
                                  <Link
                                    to={`/shop-details/${variant.product.code}/cover/${variant.cover_id}`}
                                    className="theme-btn"
                                  >
                                    <i className="fa-solid fa-basket-shopping" />
                                    Xem Chi Tiết
                                  </Link>
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
                {/* <div className="page-nav-wrap text-center">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shopdefaul;
