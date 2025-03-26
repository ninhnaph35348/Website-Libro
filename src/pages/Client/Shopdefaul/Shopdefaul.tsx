import book1 from "../../../assets/img/hero/book1.png"
import book2 from "../../../assets/img/hero/book2.png"
import Shuffle from "../../../assets/img/icon/shuffle.svg"
import s01 from "../../../assets/img/book/01.png"
import s02 from "../../../assets/img/book/02.png"
import s03 from "../../../assets/img/book/03.png"
import s04 from "../../../assets/img/book/04.png"
import s05 from "../../../assets/img/book/05.png"
import s06 from "../../../assets/img/book/06.png"
import { Link } from "react-router-dom"


type Props = {}
const Shopdefaul = (props:Props) => {
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
                <h1>Shop Default</h1>
                <div className="page-header">
                    <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                    <li>
                  <Link to="/">Home</Link>
                </li>
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                            Shop Default
                        </li>
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
                        <div className="woocommerce-notices-wrapper wow fadeInUp" data-wow-delay=".3s">
                            <p>Showing 1-3 Of 34 Results </p>
                            <div className="form-clt">
                                <div className="nice-select" tabIndex={0}>
                                    <span className="current">
                                        Default Sorting
                                    </span>
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
                                    <a href="shop-list.html"><i className="fas fa-list"></i></a>
                                </div>
                                <div className="icon-2 active">
                                    <a href="shop.html"><i className="fa-sharp fa-regular fa-grid-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 order-2 order-md-1 wow fadeInUp" data-wow-delay=".3s">
                        <div className="main-sidebar">
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h5>Search</h5>
                                </div>
                                <form action="#" className="search-toggle-box">
                                    <div className="input-area search-container">
                                        <input className="search-input" type="text" placeholder="Search here"/>
                                        <button className="cmn-btn search-icon">
                                            <i className="far fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h5>Categories</h5>
                                </div>
                                <div className="categories-list">
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-arts-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-arts" type="button" role="tab"
                                                aria-controls="pills-arts" aria-selected="true">Arts &
                                                Photography</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-Biographies-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-Biographies" type="button" role="tab"
                                                aria-controls="pills-Biographies" aria-selected="false">Biographies &
                                                Memoirs</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-ChristianBooks-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-ChristianBooks" type="button" role="tab"
                                                aria-controls="pills-ChristianBooks" aria-selected="false">Christian
                                                Books & Bibles</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-ResearchPublishing-tab"
                                                data-bs-toggle="pill" data-bs-target="#pills-ResearchPublishing"
                                                type="button" role="tab" aria-controls="pills-ResearchPublishing"
                                                aria-selected="false">Research & Publishing Guides</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-SportsOutdoors-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-SportsOutdoors" type="button" role="tab"
                                                aria-controls="pills-SportsOutdoors" aria-selected="false">Sports &
                                                Outdoors</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-FoodDrink-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-FoodDrink" type="button" role="tab"
                                                aria-controls="pills-FoodDrink" aria-selected="false">Food &
                                                Drink</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h5>Product Status</h5>
                                </div>
                                <div className="product-status">
                                    <div className="product-status_stock  gap-6 d-flex align-items-center">
                                        <div className="nice-select category" tabIndex={0}><span className="current">
                                                In Stock
                                            </span>
                                            <ul className="list">
                                                <li data-value="1" className="option selected">
                                                    In Stock
                                                </li>
                                                <li data-value="1" className="option">
                                                    Castle In The Sky
                                                </li>
                                                <li data-value="1" className="option">
                                                    The Hidden Mystery Behind
                                                </li>
                                                <li data-value="1" className="option">
                                                    Flovely And Unicom Erna
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-status_sale gap-6 d-flex align-items-center">
                                        <div className="nice-select category" tabIndex={0}>
                                            <span className="current">
                                                On Sale
                                            </span>
                                            <ul className="list">
                                                <li data-value="1" className="option selected">
                                                    On Sale
                                                </li>
                                                <li data-value="1" className="option">
                                                    Flovely And Unicom Erna
                                                </li>
                                                <li data-value="1" className="option">
                                                    Castle In The Sky
                                                </li>
                                                <li data-value="1" className="option">
                                                    How Deal With Very Bad BOOK
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="single-sidebar-widget mb-50">
                                <div className="wid-title">
                                    <h5>Filter By Price</h5>
                                </div>
                                <div className="range__barcustom">
                                    <div className="slider">
                                    <div className="progress" style={{ left: "15.29%", right: "58.9%" }}></div>
                                    </div>
                                    <div className="range-input">
                                        <input type="range" className="range-min" min="0" max="10000" value="2500"/>
                                        <input type="range" className="range-max" min="100" max="10000" value="7500"/>
                                    </div>
                                    <div className="range-items">
                                        <div className="price-input">
                                            <div className="d-flex align-items-center">
                                                <a href="shop-left-sidebar.html" className="filter-btn mt-2 me-3">Filter</a>
                                                <div className="field">
                                                    <span>Price:</span>
                                                </div>
                                                <div className="field">
                                                    <span>$</span>
                                                    <input type="number" className="input-min" value="100"/>
                                                </div>
                                                <div className="separators">-</div>
                                                <div className="field">
                                                    <span>$</span>
                                                    <input type="number" className="input-max" value="1000"/>
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
                                                <input type="checkbox"/>
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
                                                <input type="checkbox"/>
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
                                                <input type="checkbox"/>
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
                                                <input type="checkbox"/>
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
                            <div className="tab-pane fade show active" id="pills-arts" role="tabpanel"
                                aria-labelledby="pills-arts-tab" tabIndex={0}>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details.html"><img src={s01} alt="img"/></a>
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
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Simple Things You Save BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$30.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">zz
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s03} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">The Hidden Mystery Behind</a></h3>
                                                <ul className="price-list">
                                                    <li>
                                                        $30.00
                                                        <del>$39.99</del>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s04} alt="img"/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        -12%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Qple GPad With Retina Sisplay</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s05} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Flovely and Unicom Erna</a></h3>
                                                <ul className="price-list">
                                                    <li>$19.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s04} alt="img"/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        -12%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Qple GPad With Retina Sisplay</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s06} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Castle In The Sky</a></h3>
                                                <ul className="price-list">
                                                    <li>$16.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s06} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Castle In The Sky</a></h3>
                                                <ul className="price-list">
                                                    <li>$16.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s03} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">The Hidden Mystery Behind</a></h3>
                                                <ul className="price-list">
                                                    <li>$30.00 <del>$39.99</del></li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s05} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Flovely and Unicom Erna</a></h3>
                                                <ul className="price-list">
                                                    <li>$19.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-Biographies" role="tabpanel"
                                aria-labelledby="pills-Biographies-tab" tabIndex={0}>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s01} alt="img"/></a>
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
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Simple Things You Save BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$30.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s03} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">The Hidden Mystery Behind</a></h3>
                                                <ul className="price-list">
                                                    <li>
                                                        $30.00
                                                        <del>$39.99</del>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s04} alt="img"/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        -12%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Qple GPad With Retina Sisplay</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s05} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Flovely and Unicom Erna</a></h3>
                                                <ul className="price-list">
                                                    <li>$19.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s04} alt="img"/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        -12%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Qple GPad With Retina Sisplay</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s06} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Castle In The Sky</a></h3>
                                                <ul className="price-list">
                                                    <li>$16.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s06} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Castle In The Sky</a></h3>
                                                <ul className="price-list">
                                                    <li>$16.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s03} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">The Hidden Mystery Behind</a></h3>
                                                <ul className="price-list">
                                                    <li>$30.00 <del>$39.99</del></li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s05} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Flovely and Unicom Erna</a></h3>
                                                <ul className="price-list">
                                                    <li>$19.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-ChristianBooks" role="tabpanel"
                                aria-labelledby="pills-ChristianBooks-tab" tabIndex={0}>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s01} alt="img"/></a>
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
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Simple Things You Save BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$30.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s03} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">The Hidden Mystery Behind</a></h3>
                                                <ul className="price-list">
                                                    <li>
                                                        $30.00
                                                        <del>$39.99</del>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s04} alt="img"/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        -12%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Qple GPad With Retina Sisplay</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s05} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Flovely and Unicom Erna</a></h3>
                                                <ul className="price-list">
                                                    <li>$19.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s04} alt="img"/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        -12%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Qple GPad With Retina Sisplay</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s06} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Castle In The Sky</a></h3>
                                                <ul className="price-list">
                                                    <li>$16.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s06} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Castle In The Sky</a></h3>
                                                <ul className="price-list">
                                                    <li>$16.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s03} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">The Hidden Mystery Behind</a></h3>
                                                <ul className="price-list">
                                                    <li>$30.00 <del>$39.99</del></li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s05} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Flovely and Unicom Erna</a></h3>
                                                <ul className="price-list">
                                                    <li>$19.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show active" id="pills-ResearchPublishing" role="tabpanel"
                                aria-labelledby="pills-ResearchPublishing-tab" tabIndex={0}>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s01} alt="img"/></a>
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
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Simple Things You Save BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$30.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s03} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">The Hidden Mystery Behind</a></h3>
                                                <ul className="price-list">
                                                    <li>
                                                        $30.00
                                                        <del>$39.99</del>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s04} alt="img"/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        -12%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Qple GPad With Retina Sisplay</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s05} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Flovely and Unicom Erna</a></h3>
                                                <ul className="price-list">
                                                    <li>$19.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s04} alt="img"/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        -12%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Qple GPad With Retina Sisplay</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s06} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Castle In The Sky</a></h3>
                                                <ul className="price-list">
                                                    <li>$16.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s06} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Castle In The Sky</a></h3>
                                                <ul className="price-list">
                                                    <li>$16.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s03} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">The Hidden Mystery Behind</a></h3>
                                                <ul className="price-list">
                                                    <li>$30.00 <del>$39.99</del></li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s05} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Flovely and Unicom Erna</a></h3>
                                                <ul className="price-list">
                                                    <li>$19.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-SportsOutdoors" role="tabpanel"
                                aria-labelledby="pills-SportsOutdoors-tab" tabIndex={0}>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s01} alt="img"/></a>
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
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Simple Things You Save BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$30.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s03} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">The Hidden Mystery Behind</a></h3>
                                                <ul className="price-list">
                                                    <li>
                                                        $30.00
                                                        <del>$39.99</del>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s04} alt="img"/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        -12%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Qple GPad With Retina Sisplay</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s05} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Flovely and Unicom Erna</a></h3>
                                                <ul className="price-list">
                                                    <li>$19.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s04} alt="img"/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        -12%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Qple GPad With Retina Sisplay</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s06} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Castle In The Sky</a></h3>
                                                <ul className="price-list">
                                                    <li>$16.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s06} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Castle In The Sky</a></h3>
                                                <ul className="price-list">
                                                    <li>$16.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s03} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s03} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">The Hidden Mystery Behind</a></h3>
                                                <ul className="price-list">
                                                    <li>$30.00 <del>$39.99</del></li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s05} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Flovely and Unicom Erna</a></h3>
                                                <ul className="price-list">
                                                    <li>$19.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-FoodDrink" role="tabpanel"
                                aria-labelledby="pills-FoodDrink-tab" tabIndex={0}>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s01} alt="img"/></a>
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
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Simple Things You Save BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$30.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s03} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">The Hidden Mystery Behind</a></h3>
                                                <ul className="price-list">
                                                    <li>
                                                        $30.00
                                                        <del>$39.99</del>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s04} alt="img"/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        -12%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Qple GPad With Retina Sisplay</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s05} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Flovely and Unicom Erna</a></h3>
                                                <ul className="price-list">
                                                    <li>$19.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s04} alt="img"/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        -12%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Qple GPad With Retina Sisplay</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s06} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Castle In The Sky</a></h3>
                                                <ul className="price-list">
                                                    <li>$16.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s06} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Castle In The Sky</a></h3>
                                                <ul className="price-list">
                                                    <li>$16.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s02} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                                                <ul className="price-list">
                                                    <li>$39.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s03} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">The Hidden Mystery Behind</a></h3>
                                                <ul className="price-list">
                                                    <li>$30.00 <del>$39.99</del></li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href="shop-details-2.html"><img src={s05} alt="img"/></a>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            <img className="icon" src={Shuffle}
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href="shop-details.html">Flovely and Unicom Erna</a></h3>
                                                <ul className="price-list">
                                                    <li>$19.00</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                    <a href="shop-details.html" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="page-nav-wrap text-center">
                            <ul>
                                <li><a className="previous" href="shop.html">Previous</a></li>
                                <li><a className="page-numbers" href="shop.html">1</a></li>
                                <li><a className="page-numbers" href="shop.html">2</a></li>
                                <li><a className="page-numbers" href="shop.html">3</a></li>
                                <li><a className="page-numbers" href="shop.html">...</a></li>
                                <li><a className="next" href="shop.html">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Shopdefaul
