import book1 from "../../../assets/img/hero/book1.png"
import book2 from "../../../assets/img/hero/book2.png"
import s1 from "../../../assets/img/shop-details/01.png"
import s2 from "../../../assets/img/shop-details/02.png"
import s3 from "../../../assets/img/shop-details/03.png"
import s4 from "../../../assets/img/shop-details/04.png"
import s5 from "../../../assets/img/shop-details/05.png"
import sm1 from "../../../assets/img/shop-details/sm-1.png"
import sm2 from "../../../assets/img/shop-details/sm-2.png"
import sm3 from "../../../assets/img/shop-details/sm-3.png"
import sm4 from "../../../assets/img/shop-details/sm-4.png"
import sm5 from "../../../assets/img/shop-details/sm-5.png"
import Shuffle from "../../../assets/img/icon/shuffle.svg"
import Cutomerio from "../../../assets/img/cutomerio.png"
import amazon from "../../../assets/img/amazon.png"
import dropbox from "../../../assets/img/dropbox.png"
import review from "../../../assets/img/shop-details/review.png"
import s01 from "../../../assets/img/book/01.png"
import clinet1 from "../../../assets/img/testimonial/client-1.png"
import popupBg from "../../../assets/img/popupBg.png"











type Props = {}

const Shopdetail = (props: Props) => {
   return (
    <>
     <div className="breadcrumb-wrapper">
        <div className="book1">
            <img src={book1} alt="book"/>
        </div>
        <div className="book2">
            <img src={book2} alt="book"/>
        </div>
        <div className="container">
            <div className="page-heading">
                <h1>Shop Details</h1>
                <div className="page-header">
                    <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                        <li>
                            <a href="index.html">
                                Home
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                            Shop Details
                        </li>
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
                        <div className="shop-details-image">
                            <div className="tab-content">
                                <div id="thumb1" className="tab-pane fade show active">
                                    <div className="shop-details-thumb">
                                        <img src={s1} alt="img" />
                                    </div>
                                </div>
                                <div id="thumb2" className="tab-pane fade">
                                    <div className="shop-details-thumb">
                                        <img src={s2} alt="img" />
                                    </div>
                                </div>
                                <div id="thumb3" className="tab-pane fade">
                                    <div className="shop-details-thumb">
                                        <img src={s3} alt="img" />
                                    </div>
                                </div>
                                <div id="thumb4" className="tab-pane fade">
                                    <div className="shop-details-thumb">
                                        <img src={s4} alt="img" />
                                    </div>
                                </div>
                                <div id="thumb5" className="tab-pane fade">
                                    <div className="shop-details-thumb">
                                        <img src={s5} alt="img" />
                                    </div>
                                </div>
                            </div>
                            <ul className="nav">
                                <li className="nav-item">
                                    <a href="#thumb1" data-bs-toggle="tab" className="nav-link active">
                                        <img src={sm1} alt="img" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#thumb2" data-bs-toggle="tab" className="nav-link">
                                        <img src={sm2} alt="img" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#thumb3" data-bs-toggle="tab" className="nav-link">
                                        <img src={sm3} alt="img" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#thumb4" data-bs-toggle="tab" className="nav-link">
                                        <img src={sm4} alt="img" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#thumb5" data-bs-toggle="tab" className="nav-link">
                                        <img src={sm5} alt="img" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="shop-details-content">
                            <div className="title-wrapper">
                                <h2>Castle The Sky</h2>
                                <h5>Stock availability.</h5>
                            </div>
                            <div className="star">
                                <a href="shop-details.html"> <i className="fas fa-star"></i></a>
                                <a href="shop-details.html"><i className="fas fa-star"></i></a>
                                <a href="shop-details.html"> <i className="fas fa-star"></i></a>
                                <a href="shop-details.html"><i className="fas fa-star"></i></a>
                                <a href="shop-details.html"><i className="fa-regular fa-star"></i></a>
                                <span>(1 Customer Reviews)</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tortor quis
                                varius pretium est felis scelerisque nulla, vitae placerat justo nunc a massa. Aenean
                                nec montes vestibulum urna vel imperdiet ipsum. Orci varius natoque penatibus et magnis
                                dis ridicul parturient montes.
                            </p>
                            <div className="price-list">
                                <h3>$16.00</h3>
                            </div>
                            <div className="cart-wrapper">
                                <div className="quantity-basket">
                                    <p className="qty">
                                        <button className="qtyminus" aria-hidden="true">−</button>
                                        <input type="number" name="qty" id="qty2" min="1" max="10" step="1" value="1" />
                                        <button className="qtyplus" aria-hidden="true">+</button>
                                    </p>
                                </div> 
                                <button type="button"  className="theme-btn style-2" data-bs-toggle="modal" data-bs-target="#readMoreModal">
                                    Read A little
                                  </button>
                                  {/* Read More Modal */}
                                <div className="modal fade" id="readMoreModal" tabIndex={-1} aria-labelledby="readMoreModalLabel" aria-hidden="true">
                                    <div className="modal-dialog"> 
                                        <div className="modal-content">
                                        <div className="modal-body" style={{ backgroundImage: `url(${popupBg})` }}>
                                        <div className="close-btn">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div className="readMoreBox"> 
                                                    <div className="content">
                                                        <h3 id="readMoreModalLabel">The Role Of Book</h3>
                                                        <p>
                                                            Educating the Public <br />
                                                            Political books play a crucial role in educating the public about political theories, historical events, policies, and the workings of governments. They provide readers with insights into complex political concepts and the historical context behind current events, helping to foster a more informed citizenry. <br /><br />

                                                            Shaping Public Opinion <br />
                                                            Authors of political books often aim to influence public opinion by presenting arguments and perspectives on various issues. These books can sway readers' views, either reinforcing their existing beliefs or challenging them to consider alternative viewpoints. This influence can extend to political debates and discussions in the public sphere. <br /><br />

                                                            Documenting History <br />
                                                            Political books serve as valuable records of historical events and political movements. They document the thoughts, actions, and decisions of political leaders and activists, providing future generations with a detailed account of significant periods and events. This historical documentation is essential for understanding the evolution of political systems and ideologies.

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="shop-details.html" className="theme-btn"><i
                                        className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                <div className="icon-box">
                                    <a href="shop-details.html" className="icon">
                                        <i className="far fa-heart"></i>
                                    </a>
                                    <a href="shop-details.html" className="icon-2">
                                        <img src={Shuffle} alt="svg-icon" />
                                    </a>
                                </div>
                            </div>
                            <div className="category-box">
                                <div className="category-list">
                                    <ul>
                                        <li>
                                            <span>SKU:</span> FTC1020B65D
                                        </li>
                                        <li>
                                            <span>Category:</span> Kids Toys
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <span>Tags:</span> Design Low Book
                                        </li>
                                        <li>
                                            <span>Format:</span> Hardcover
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <span>Total page:</span> 330
                                        </li>
                                        <li>
                                            <span>Language:</span> English
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <span>Publish Years:</span> 2021
                                        </li>
                                        <li>
                                            <span>Century:</span> United States
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
                                <a href="https://www.customer.io/"><img src={Cutomerio} alt="cutomer.io" /></a>
                                <a href="https://www.amazon.com/"><img src={amazon} alt="amazon"/></a>
                                <a href="https://www.dropbox.com/"><img src={dropbox} alt="dropbox" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-tab section-padding pb-0">
                    <ul className="nav mb-5" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a href="#description" data-bs-toggle="tab" className="nav-link ps-0 active"
                                aria-selected="true" role="tab">
                                <h6>Description</h6>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a href="#additional" data-bs-toggle="tab" className="nav-link" aria-selected="false"
                                tabIndex={-1} role="tab">
                                <h6>Additional Information </h6>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a href="#review" data-bs-toggle="tab" className="nav-link" aria-selected="false" tabIndex={-1}
                                role="tab">
                                <h6>reviews (3)</h6>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="description" className="tab-pane fade show active" role="tabpanel">
                            <div className="description-items">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis erat
                                    interdum, tempor turpis in, sodales ex. In hac habitasse platea dictumst. Etiam
                                    accumsan scelerisque urna, a lobortis velit vehicula ut. Maecenas porttitor dolor a
                                    velit aliquet, et euismod nibh vulputate. Duis nunc velit, lacinia vel risus in,
                                    finibus sodales augue. Aliquam lacinia imperdiet dictum. Etiam tempus finibus
                                    tortor, quis placerat arcu tristique in. Sed vitae dui a diam luctus maximus.
                                    Quisque nec felis dapibus, dapibus enim vitae, vestibulum libero. Aliquam erat
                                    volutpat. Phasellus luctus rhoncus justo. Duis a nulla sit amet justo aliquam
                                    ullamcorper. Phasellus nulla lorem, pretium et libero in, porta auctor dui. In a
                                    ornare purus, et efficitur elit. Etiam consectetur sit amet quam ut tincidunt. Donec
                                    gravida ultricies tellus ac pharetra.
                                    Praesent a pulvinar purus. Proin sollicitudin leo eget mi sagittis aliquam. Donec
                                    sollicitudin ex ac lobortis mollis. Sed eget libero nec mi
                                </p>
                            </div>
                        </div>
                        <div id="additional" className="tab-pane fade" role="tabpanel">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td className="text-1">Availability</td>
                                            <td className="text-2">Available</td>
                                        </tr>
                                        <tr>
                                            <td className="text-1">Categories</td>
                                            <td className="text-2">Adventure</td>
                                        </tr>
                                        <tr>
                                            <td className="text-1">Publish Date</td>
                                            <td className="text-2">2022-10-24</td>
                                        </tr>
                                        <tr>
                                            <td className="text-1">Total Page</td>
                                            <td className="text-2">330</td>
                                        </tr>
                                        <tr>
                                            <td className="text-1">Format</td>
                                            <td className="text-2">Hardcover</td>
                                        </tr>
                                        <tr>
                                            <td className="text-1">Country</td>
                                            <td className="text-2">United States</td>
                                        </tr>
                                        <tr>
                                            <td className="text-1">Language</td>
                                            <td className="text-2">English</td>
                                        </tr>
                                        <tr>
                                            <td className="text-1">Dimensions</td>
                                            <td className="text-2">30 × 32 × 46 Inches</td>
                                        </tr>
                                        <tr>
                                            <td className="text-1">Weight</td>
                                            <td className="text-2">2.5 Pounds</td>
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
                                        <div
                                            className="head-area d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                            <div className="cont">
                                                <h5><a href="news-details.html">Leslie Alexander</a></h5>
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
                                            Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi
                                            architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem
                                            Ipsum is <br /> simply dummy
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
                                                    <input type="text" name="name" id="name" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-clt">
                                                    <span>Your Email*</span>
                                                    <input type="text" name="email" id="email" placeholder="Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 wow fadeInUp animated" data-wow-delay=".8">
                                                <div className="form-clt">
                                                    <span>Message*</span>
                                                    <textarea name="message" id="message"
                                                        placeholder="Write Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 wow fadeInUp animated" data-wow-delay=".9">
                                                <div className="form-check d-flex gap-2 from-customradio">
                                                    <input type="checkbox" className="form-check-input"
                                                        name="flexRadioDefault" id="flexRadioDefault12" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault12">
                                                        i accept your terms & conditions
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
                <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">Related Products</h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. <br /> Donec at nulla nulla. Duis
                    posuere ex lacus
                </p>
            </div>
            <div className="swiper book-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="shop-box-items style-2">
                            <div className="book-thumb center">
                                <a href="shop-details-2.html"><img src={s01} alt="img" /></a>
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
                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                    </li>
                                </ul>
                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                    </li>
                                    <li>
                                        <a href="shop-cart.html">

                                            <img className="icon" src={Shuffle} alt="svg-icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <h5> Design Low Book </h5>
                                <h3><a href="shop-details.html">Simple Things You To <br /> Save BOOK</a></h3>
                                <ul className="price-list">
                                    <li>$30.00</li>
                                    <li>
                                        <del>$39.99</del>
                                    </li>
                                </ul>
                                <ul className="author-post">
                                    <li className="authot-list">
                                        <span className="thumb">
                                            <img src={clinet1} alt="img" />
                                        </span>
                                        <span className="content">Wilson</span>
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
                                <a href="shop-details.html" className="theme-btn"><i
                                        className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
 
</>
 

   )
}
export default Shopdetail
  