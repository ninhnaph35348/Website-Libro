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
      {/* Sticky Header Section start  */}

      {/* Main Header Section start  */}
      <header className="header-1">
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
