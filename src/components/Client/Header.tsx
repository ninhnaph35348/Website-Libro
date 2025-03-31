import whiteLogo from "../../assets/img/logo/white-logo.svg";
import icon13 from "../../assets/img/icon/icon-13.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header-top-1">
        <div className="container">
          <div className="header-top-wrapper">
            <ul className="contact-list">
              <li>
                <i className="fa-regular fa-phone" />
                <a href="tel:+20866660112">0974563453</a>
              </li>
              <li>
                <i className="far fa-envelope" />
                <a href="mailto:info@example.com">libro@gmail.com</a>
              </li>
            </ul>
            <ul className="list">
              <li>
                <Link to="/contact">
                  Live Chat
                  <i className="fa-light fa-comments" />
                </Link>
              </li>

              <li>
                <i className="fa-light fa-user" />
                <button data-bs-toggle="modal" data-bs-target="#loginModal">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Sticky Header Section start  --> */}
      {/* <header className="header-1 sticky top-0 bg-white z-50 shadow transition-all duration-300">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="container">
              <div className="row">
                <div className="col-6 col-md-6 col-lg-10 col-xl-8 col-xxl-10">
                  <div className="header-left">
                    <div className="logo">
                      <a href="index.html" className="header-logo">
                        <img src="assets/img/logo/white-logo.svg" alt="logo-img" />
                      </a>
                    </div>
                    <div className="mean__menu-wrapper">
                      <div className="main-menu">
                        <nav>
                          <ul>
                            <li>
                              <a href="index.html">
                                Home
                                <i className="fas fa-angle-down" />
                              </a>
                              <ul className="submenu">
                                <li><a href="index.html">Home 01</a></li>
                                <li><a href="index-2.html">Home 02</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="shop.html">
                                Shop
                                <i className="fas fa-angle-down" />
                              </a>
                              <ul className="submenu">
                                <li><a href="shop.html">Shop Default</a></li>
                                <li><a href="shop-list.html">Shop List</a></li>
                                <li><a href="shop-details.html">Shop Details</a></li>
                                <li><a href="shop-cart.html">Shop Cart</a></li>
                                <li><a href="wishlist.html">Wishlist</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <a href="about.html">
                                Pages
                                <i className="fas fa-angle-down" />
                              </a>
                              <ul className="submenu">
                                <li><a href="about.html">About Us</a></li>
                                <li className="has-dropdown">
                                  <a href="team.html">
                                    Author
                                    <i className="fas fa-angle-down" />
                                  </a>
                                  <ul className="submenu">
                                    <li><a href="team.html">Author</a></li>
                                    <li><a href="team-details.html">Author Profile</a></li>
                                  </ul>
                                </li>
                                <li><a href="faq.html">Faq's</a></li>
                                <li><a href="404.html">404 Page</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="news.html">
                                Blog
                                <i className="fas fa-angle-down" />
                              </a>
                              <ul className="submenu">
                                <li><a href="news-grid.html">Blog Grid</a></li>
                                <li><a href="news.html">Blog List</a></li>
                                <li><a href="news-details.html">Blog Details</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="contact.html">Contact</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-2 col-xl-4 col-xxl-2">
                  <div className="header-right">
                    <div className="category-oneadjust gap-6 d-flex align-items-center">
                      <div className="icon">
                        <i className="fa-sharp fa-solid fa-grid-2" />
                      </div>
                      <select name="cate" className="category">
                        <option value={1}>
                          Category
                        </option>
                        <option value={1}>
                          Web Design
                        </option>
                        <option value={1}>
                          Web Development
                        </option>
                        <option value={1}>
                          Graphic Design
                        </option>
                        <option value={1}>
                          Softwer Eng
                        </option>
                      </select>
                      <form action="#" className="search-toggle-box d-md-block">
                        <div className="input-area">
                          <input type="text" placeholder="Author" />
                          <button className="cmn-btn">
                            <i className="far fa-search" />
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="menu-cart">
                      <a href="wishlist.html" className="cart-icon">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="shop-cart.html" className="cart-icon">
                        <i className="fa-regular fa-cart-shopping" />
                      </a>
                      <div className="header-humbager ml-30">
                        <a className="sidebar__toggle" href="javascript:void(0)">
                          <div className="bar-icon-2">
                            <img src="assets/img/icon/icon-13.svg" alt="img" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>sticky top-0 bg-white z-50 shadow transition-all duration-300
      </header> */}
      {/* Main Header Section start  */}
      <header className="header-1 ">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="container">
              <div className="row">
                <div className="col-6 col-md-6 col-lg-10 col-xl-8 col-xxl-10">
                  <div className="header-left">
                    <div className="logo">
                      <Link to="/">
                        <img src={whiteLogo} alt="logo" />
                      </Link>
                    </div>
                    <div className="mean__menu-wrapper">
                      <div className="main-menu">
                        <nav id="mobile-menu">
                          <ul>
                            <li>
                              <Link to="/">Trang chủ</Link>
                            </li>
                            <li>
                              <Link to="/shop">Sản phẩm</Link>
                            </li>
                            <li>
                              <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                              <Link to="/contact">Liên hệ</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-2 col-xl-4 col-xxl-2">
                  <div className="header-right">
                    <div className="category-oneadjust gap-6 d-flex align-items-center">
                      <form action="#" className="search-toggle-box d-md-block">
                        <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md transition duration-300 focus-within:shadow-lg">
                          <input
                            type="text"
                            placeholder="Author"
                            className="flex-1 px-4 py-2 rounded-full focus:outline-none text-gray-700"
                          />
                          <button className="p-3 rounded-full hover:bg-gray-200 transition duration-300">
                            <i className="far fa-search text-gray-600" />
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="menu-cart">
                      <a href="wishlist.html" className="cart-icon">
                        <i className="fa-regular fa-heart" />
                      </a>
                      <a href="shop-cart.html" className="cart-icon">
                        <i className="fa-regular fa-cart-shopping" />
                      </a>
                      <div className="header-humbager ml-30">
                        <a
                          className="sidebar__toggle"
                          href="javascript:void(0)"
                        >
                          <div className="bar-icon-2">
                            <img src={icon13} alt="img" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
