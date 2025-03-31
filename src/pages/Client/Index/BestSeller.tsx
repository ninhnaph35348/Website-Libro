import { ArrowRight } from 'lucide-react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ProductContext } from '../../../context/Product';
import { IProduct } from '../../../interfaces/Products';
import news9 from "../../../assets/img/news/09.jpg";
import shuffle from "../../../assets/img/icon/shuffle.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const BestSeller = () => {
  const { products } = useContext(ProductContext);
  // Sắp xếp products: sản phẩm có image sẽ được ưu tiên lên đầu
  const sortedProducts = [...products].sort((a: IProduct, b: IProduct) => {
    if (a.image && !b.image) return -1;
    if (!a.image && b.image) return 1;
    return 0;
  });
  return (
    // Best Sellers: Sách bán chạy nhất
    <section className="shop-section section-padding fix pt-0" >
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
            {sortedProducts.length > 0 ? (
              sortedProducts.slice(0, 5).map((product: IProduct) => (
                <SwiperSlide key={product.id}>
                  <div className="shop-box-items style-2">
                    <div className="book-thumb center">
                      <Link to={`/shop-details/${product.code}`}><img
                        src={
                          product.image
                            ? `http://127.0.0.1:8000/storage/${product.image}`
                            : news9
                        }
                        alt={product.title} /></Link>
                      <ul className="post-box">
                        <li>
                          Hot
                        </li>
                        <li>
                          -30%
                        </li>
                      </ul>
                      <ul className="shop-icon d-grid justify-content-center align-items-center">
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
                      </ul>
                    </div>
                    <div className="shop-content">
                      <h5>{product.category}</h5>
                      <h3><Link to={`/shop-details/${product.code}`} className='line-clamp-1'>{product.title}</Link></h3>
                      <ul className="author-post">
                        <li className="!text-base !font-bold text-[#ff6500]">
                          Giá<del className=' !font-medium ml-2 text-[#5c707e]'>$39.99</del>
                        </li>
                        <li className="star">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="shop-button">
                      <Link
                        to={`/shop-details/${product.code}`} className="theme-btn"><i className="fa-solid fa-basket-shopping" /> Add To Cart</Link>
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
          {/* <div className="book-shop-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <i className="fa-solid fa-basket-shopping"></i> Add To
                        Cart
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
                     </div> */}
        </div>
      </div>
    </section >
  )
}

export default BestSeller