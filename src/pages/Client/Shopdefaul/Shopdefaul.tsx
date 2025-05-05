import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import book1 from "../../../assets/img/hero/book1.png";
import book2 from "../../../assets/img/hero/book2.png";
import news9 from "../../../assets/img/news/09.jpg";
import { ProductVariantContext } from "../../../context/ProductVariants";
import { IProductVariant } from "../../../interfaces/ProductVariants";

const Shopdefaul = () => {
  const { productVariantByStatus, getVariantsByStatus } = useContext(
    ProductVariantContext
  );

  const [searchQuery, setSearchQuery] = useState(""); // State lưu từ khóa tìm kiếm
  const { search } = useLocation(); // Lấy query từ URL (nếu có)

  useEffect(() => {
    // Lấy từ khóa tìm kiếm từ URL query params, nếu có
    const queryParams = new URLSearchParams(search);
    const query = queryParams.get("search");
    if (query) {
      setSearchQuery(query);
    }
    getVariantsByStatus(); // Lấy tất cả sản phẩm
  }, [search, getVariantsByStatus]); // Cập nhật khi từ khóa tìm kiếm thay đổi

  // Lọc sản phẩm theo từ khóa tìm kiếm
  const filteredVariants = searchQuery
    ? productVariantByStatus.filter((variant: IProductVariant) =>
        variant.product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : productVariantByStatus; // Nếu không có tìm kiếm, hiển thị tất cả sản phẩm

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
                          {filteredVariants.length > 0 ? (
                            filteredVariants.map((variant: IProductVariant) => (
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
                                  <div className="flex justify-between">
                                    <h5>{variant.product.category}</h5>
                                    <h5>Đã bán: {variant.sold_quantity}</h5>
                                  </div>
                                  <div>
                                    <h5>{variant.cover}</h5>
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
                                      {variant.promotion &&
                                      variant.promotion > 0 ? (
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
                                          className={`fa${
                                            i < variant.product.rating
                                              ? "-solid"
                                              : "-regular"
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shopdefaul;
