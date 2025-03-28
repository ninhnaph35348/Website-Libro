import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { IProduct } from "../../../interfaces/Products";
import { getProductById } from "../../../services/Product";

// Import các hình ảnh tĩnh từ layout
import book1 from "../../../assets/img/hero/book1.png";
import book2 from "../../../assets/img/hero/book2.png";
import Shuffle from "../../../assets/img/icon/shuffle.svg";
import Cutomerio from "../../../assets/img/cutomerio.png";
import amazon from "../../../assets/img/amazon.png";
import dropbox from "../../../assets/img/dropbox.png";
import review from "../../../assets/img/shop-details/review.png";
import clinet1 from "../../../assets/img/testimonial/client-1.png";
import popupBg from "../../../assets/img/popupBg.png";

interface IData {
  data: IProduct;
}

type Props = {};

const Shopdetail = (props: Props) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (code) {
        try {
          const data: IData = await getProductById(code);
          setProduct(data.data);
        } catch (error) {
          console.error("Error fetching product:", error);
          setProduct(null);
        }
      }
    })();
  }, [code]);
  const getImageSrc = (image: string | File) => {
    return typeof image === "string" ? `http://127.0.0.1:8000/storage/${image}` : URL.createObjectURL(image);
};

  if (!product)
    return (
      <p className="text-center mt-10 text-gray-500">Sản phẩm không tồn tại.</p>
    );

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-wrapper">
        <div className="book1">
          <img src={book1} alt="book" />
        </div>
        <div className="book2">
          <img src={book2} alt="book" />
        </div>
        <div className="container">
          <div className="page-heading">
            <h1>Shop Details</h1>
            <div className="page-header">
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".3s"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
                <li>Shop Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Details Section Start */}
      <section className="shop-details-section fix section-padding">
        <div className="container">
          <div className="shop-details-wrapper">
            <div className="row g-4">
              <div className="col-lg-5">
              <div className="max-w-3xl mx-auto p-6 border rounded-lg shadow-md">
                    <img src={selectedImage || getImageSrc(product.image)} alt={product.title} className="w-full object-cover rounded" />

                    {product.images?.length > 0 && (
                        <div className="flex gap-2 mt-4">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={getImageSrc(img)}
                                    alt={`Product image ${index}`}
                                    className={`w-24 h-24 object-cover rounded cursor-pointer border-2 ${
                                        selectedImage === getImageSrc(img) ? "border-blue-500" : "border-transparent"
                                    }`}
                                    onClick={() => setSelectedImage(getImageSrc(img))}
                                />
                            ))}
                        </div>
                    )}
                </div>
              </div>
              <div className="col-lg-7">
                <div className="shop-details-content">
                  <div className="title-wrapper">
                    <h2>{product.title || "Castle The Sky"}</h2>
                    <h5>
                      {product.status === 1
                        ? "Stock availability"
                        : "Out of stock"}
                    </h5>
                  </div>
                  <div className="star">
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                    <a href="#">
                      <i className="fa-regular fa-star"></i>
                    </a>
                    <span>(1 Customer Reviews)</span>
                  </div>
                  <p>{product.description || "No description available."}</p>
                  <div className="price-list">
                    <h3>$16.00</h3>{" "}
                    {/* Comment vì price không có trong IProduct */}
                  </div>
                  <div className="cart-wrapper">
                    <div className="quantity-basket">
                      <p className="qty">
                        <button className="qtyminus" aria-hidden="true">
                          −
                        </button>
                        <input
                          type="number"
                          name="qty"
                          id="qty2"
                          min="1"
                          max="10"
                          step="1"
                          value="1"
                        />
                        <button className="qtyplus" aria-hidden="true">
                          +
                        </button>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="theme-btn style-2"
                      data-bs-toggle="modal"
                      data-bs-target="#readMoreModal"
                    >
                      Read A little
                    </button>
                    {/* Read More Modal */}
                    <div
                      className="modal fade"
                      id="readMoreModal"
                      tabIndex={-1}
                      aria-labelledby="readMoreModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div
                            className="modal-body"
                            style={{ backgroundImage: `url(${popupBg})` }}
                          >
                            <div className="close-btn">
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="readMoreBox">
                              <div className="content">
                                <h3 id="readMoreModalLabel">
                                  The Role Of Book
                                </h3>
                                <p>
                                  Educating the Public <br />
                                  Political books play a crucial role in
                                  educating the public about political theories,
                                  historical events, policies, and the workings
                                  of governments. They provide readers with
                                  insights into complex political concepts and
                                  the historical context behind current events,
                                  helping to foster a more informed citizenry.{" "}
                                  <br />
                                  <br />
                                  Shaping Public Opinion <br />
                                  Authors of political books often aim to
                                  influence public opinion by presenting
                                  arguments and perspectives on various issues.
                                  These books can sway readers' views, either
                                  reinforcing their existing beliefs or
                                  challenging them to consider alternative
                                  viewpoints. This influence can extend to
                                  political debates and discussions in the
                                  public sphere. <br />
                                  <br />
                                  Documenting History <br />
                                  Political books serve as valuable records of
                                  historical events and political movements.
                                  They document the thoughts, actions, and
                                  decisions of political leaders and activists,
                                  providing future generations with a detailed
                                  account of significant periods and events.
                                  This historical documentation is essential for
                                  understanding the evolution of political
                                  systems and ideologies.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="theme-btn">
                      <i className="fa-solid fa-basket-shopping"></i> Add To
                      Cart
                    </button>
                    <div className="icon-box">
                      <a href="#" className="icon">
                        <i className="far fa-heart"></i>
                      </a>
                      {/* <a href="#" className="icon-2">
                        <img src={Shuffle} alt="svg-icon" />
                      </a> */}
                    </div>
                  </div>
                  <div className="category-box">
                    <div className="category-list">
                      <ul>
                        <li>
                          <span>SKU:</span> {product.code || "FTC1020B65D"}
                        </li>
                        <li>
                          <span>Category:</span>{" "}
                          {product.category || "Kids Toys"}
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>Tags:</span>{" "}
                          {product.genres?.join(", ") || "Design Low Book"}
                        </li>
                        <li>
                          <span>Format:</span> Hardcover{" "}
                          {/* Comment vì format không có trong IProduct */}
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>Total page:</span> 330{" "}
                          {/* Comment vì total_page không có trong IProduct */}
                        </li>
                        <li>
                          <span>Language:</span> {product.language || "English"}
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>Publish Years:</span> 2021{" "}
                          {/* Comment vì publish_year không có trong IProduct */}
                        </li>
                        <li>
                          <span>Century:</span> United States{" "}
                          {/* Comment vì country không có trong IProduct */}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-check">
                    <div className="check-list">
                      <ul>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          Free shipping orders from $150
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          30 days exchange & return
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          Mamaya Flash Discount: Starting at 30% Off
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          Safe & Secure online shopping
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="social-icon">
                    <h6>Also Available On:</h6>
                    <a href="https://www.customer.io/">
                      <img src={Cutomerio} alt="cutomer.io" />
                    </a>
                    <a href="https://www.amazon.com/">
                      <img src={amazon} alt="amazon" />
                    </a>
                    <a href="https://www.dropbox.com/">
                      <img src={dropbox} alt="dropbox" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-tab section-padding pb-0">
              <ul className="nav mb-5" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    href="#description"
                    data-bs-toggle="tab"
                    className="nav-link ps-0 active"
                    aria-selected="true"
                    role="tab"
                  >
                    <h6>Description</h6>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#additional"
                    data-bs-toggle="tab"
                    className="nav-link"
                    aria-selected="false"
                    tabIndex={-1}
                    role="tab"
                  >
                    <h6>Additional Information</h6>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#review"
                    data-bs-toggle="tab"
                    className="nav-link"
                    aria-selected="false"
                    tabIndex={-1}
                    role="tab"
                  >
                    <h6>Reviews (3)</h6>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  id="description"
                  className="tab-pane fade show active"
                  role="tabpanel"
                >
                  <div className="description-items">
                    <p>{product.description || "No description available."}</p>
                  </div>
                </div>
                <div id="additional" className="tab-pane fade" role="tabpanel">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td className="text-1">Availability</td>
                          <td className="text-2">
                            {product.status === 1
                              ? "Available"
                              : "Out of stock"}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-1">Categories</td>
                          <td className="text-2">
                            {product.category || "Adventure"}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-1">Publish Date</td>
                          <td className="text-2">2022-10-24</td>{" "}
                          {/* Comment vì publish_date không có trong IProduct */}
                        </tr>
                        <tr>
                          <td className="text-1">Total Page</td>
                          <td className="text-2">330</td>{" "}
                          {/* Comment vì total_page không có trong IProduct */}
                        </tr>
                        <tr>
                          <td className="text-1">Format</td>
                          <td className="text-2">Hardcover</td>{" "}
                          {/* Comment vì format không có trong IProduct */}
                        </tr>
                        <tr>
                          <td className="text-1">Country</td>
                          <td className="text-2">United States</td>{" "}
                          {/* Comment vì country không có trong IProduct */}
                        </tr>
                        <tr>
                          <td className="text-1">Language</td>
                          <td className="text-2">
                            {product.language || "English"}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-1">Dimensions</td>
                          <td className="text-2">30 × 32 × 46 Inches</td>{" "}
                          {/* Comment vì dimensions không có trong IProduct */}
                        </tr>
                        <tr>
                          <td className="text-1">Weight</td>
                          <td className="text-2">2.5 Pounds</td>{" "}
                          {/* Comment vì weight không có trong IProduct */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="review" className="tab-pane fade" role="tabpanel">
                  <div className="review-items">
                    <div className="review-wrap-area d-flex gap-4">
                      <div className="review-thumb">
                        <img src={review} alt="img" />
                      </div>
                      <div className="review-content">
                        <div className="head-area d-flex flex-wrap gap-2 align-items-center justify-content-between">
                          <div className="cont">
                            <h5>
                              <a href="#">Leslie Alexander</a>
                            </h5>
                            <span>February 10, 2024 at 2:37 pm</span>
                          </div>
                          <div className="star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                          </div>
                        </div>
                        <p className="mt-30 mb-4">
                          Neque porro est qui dolorem ipsum quia quaed inventor
                          veritatis et quasi architecto var sed efficitur turpis
                          gilla sed sit amet finibus eros. Lorem Ipsum is <br />{" "}
                          simply dummy
                        </p>
                      </div>
                    </div>
                    <div className="review-title mt-5 py-15 mb-30">
                      <h4>Your Rating*</h4>
                      <div className="rate-now d-flex align-items-center">
                        <p>Your Rating*</p>
                        <div className="star">
                          <i className="fa-light fa-star"></i>
                          <i className="fa-light fa-star"></i>
                          <i className="fa-light fa-star"></i>
                          <i className="fa-light fa-star"></i>
                          <i className="fa-light fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="review-form">
                      <form action="#" id="contact-form" method="POST">
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>Your Name*</span>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>Your Email*</span>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-12 wow fadeInUp animated"
                            data-wow-delay=".8"
                          >
                            <div className="form-clt">
                              <span>Message*</span>
                              <textarea
                                name="message"
                                id="message"
                                placeholder="Write Message"
                              ></textarea>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 wow fadeInUp animated"
                            data-wow-delay=".9"
                          >
                            <div className="form-check d-flex gap-2 from-customradio">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="flexRadioDefault"
                                id="flexRadioDefault12"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault12"
                              >
                                I accept your terms & conditions
                              </label>
                            </div>
                            <button type="submit" className="theme-btn">
                              Submit now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Ratting Book Section Start */}
      <section className="top-ratting-book-section fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
              Related Products
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.{" "}
              <br /> Donec at nulla nulla. Duis posuere ex lacus
            </p>
          </div>
          <div className="swiper book-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="shop-box-items style-2">
                  <div className="book-thumb center">
                    <Link to={`/shop-details/${product.code}`}>
                      <img
                        src={`http://127.0.0.1:8000/storage/${product.image}`}
                        alt={product.title}
                      />
                    </Link>
                    <ul className="post-box">
                      <li>Hot</li>
                      <li>-30%</li>
                    </ul>
                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                      <li>
                        <a href="#">
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                      <li>
                        <a href="#">
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img className="icon" src={Shuffle} alt="svg-icon" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-eye"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="shop-content">
                    <h5>{product.category || "Design Low Book"}</h5>
                    <h3>
                      <Link to={`/shop-details/${product.code}`}>
                        {product.title || "Simple Things You To Save BOOK"}
                      </Link>
                    </h3>
                    <ul className="price-list">
                      <li>$30.00</li>{" "}
                      {/* Comment vì price không có trong IProduct */}
                      <li>
                        <del>$39.99</del>
                      </li>{" "}
                      {/* Comment vì price không có trong IProduct */}
                    </ul>
                    <ul className="author-post">
                      <li className="authot-list">
                        <span className="thumb">
                          <img src={clinet1} alt="img" />
                        </span>
                        <span className="content">
                          {product.supplier_name || "Wilson"}
                        </span>
                      </li>
                      <li className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="shop-button">
                    <button className="theme-btn">
                      <i className="fa-solid fa-basket-shopping"></i> Add To
                      Cart
                    </button>
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

export default Shopdetail;
