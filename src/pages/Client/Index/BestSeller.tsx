import { ArrowRight } from "lucide-react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import news9 from "../../../assets/img/news/09.jpg";
import { IProductVariant } from "../../../interfaces/ProductVariants";
import { ProductVariantContext } from "../../../context/ProductVariants";
const BestSeller = () => {
  const { productBestsellers, Bestsellers } = useContext(ProductVariantContext);

  useEffect(() => {
    Bestsellers();
  }, []);

  return (
    // Best Sellers: Sách bán chạy nhất
    <section className="shop-section section-padding fix pt-0">
      <div className="container">
        <div className="section-title-area flex justify-between items-center mb-6">
          <div className="section-title">
            <h2
              className="wow fadeInUp text-3xl font-bold text-blue-900"
              data-wow-delay=".3s"
            >
              Sách bán chạy nhất
            </h2>
          </div>
          <Link
            to="/shop"
            className="theme-btn transparent-btn flex justify-center items-center gap-1"
            style={{ animationDelay: "0.5s" }}
          >
            Xem thêm <ArrowRight className="w-5 h-5 " />
          </Link>
        </div>
        <div className="swiper book-slider">
          <Swiper
            spaceBetween={16} // Khoảng cách giữa các item
            slidesPerView={5} // Hiển thị 5 sản phẩm
            breakpoints={{
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 3 },
              480: { slidesPerView: 2 },
            }}
          >
            {productBestsellers.length > 0 ? (
              productBestsellers
                .filter(
                  (variant: IProductVariant) =>
                    variant.product.status !== "out_stock"
                )
                .slice(0, 5)
                .map((variant: IProductVariant) => (
                  <SwiperSlide key={variant.id}>
                    <div className="shop-box-items style-2">
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
                                (1 - variant.promotion / variant.price) * 100
                              )}
                              %
                            </li>
                          )}
                        </ul>
                        {/* <ul className="shop-icon d-grid justify-content-center align-items-center">
                                            <li>
                                                <a href="shop-cart.html"><i className="far fa-heart" /></a>
                                            </li>
                                            <li className='flex items-center justify-center'>
                                                <a href="shop-cart.html">
                                                    <img className="icon !w-3.5" src={shuffle} alt="svg-icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="shop-details.html"><i className="far fa-eye" /></a>
                                            </li>
                                        </ul> */}
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
                            {variant.promotion && variant.promotion > 0 ? (
                              <>
                                {Math.round(variant.promotion).toLocaleString()}
                                ₫
                                <del className="!font-medium ml-2 text-[#5c707e]">
                                  {Math.round(variant.price).toLocaleString()}₫
                                </del>
                              </>
                            ) : (
                              `${Math.round(variant.price).toLocaleString()}₫`
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
                  </SwiperSlide>
                ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                Không có sản phẩm để hiển thị.
              </p>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
