
import whiteLogo from "../../assets/img/logo/white-logo.svg";
import icon13 from "../../assets/img/icon/icon-13.svg";
const Header = () => {
    return (
        <>
            <div className="header-top-1">
                <div className="container">
                    <div className="header-top-wrapper">
                        <ul className="contact-list">
                            <li>
                                <i className="fa-regular fa-phone" />
                                <a href="tel:+20866660112">+208-6666-0112</a>
                            </li>
                            <li>
                                <i className="far fa-envelope" />
                                <a href="mailto:info@example.com">info@example.com</a>
                            </li>
                            <li>
                                <i className="far fa-clock" />
                                <span>Sunday - Fri: 9 aM - 6 pM</span>
                            </li>
                        </ul>
                        <ul className="list">
                            <li><i className="fa-light fa-comments" /><a href="contact.html">Live Chat</a></li>
                            <li><i className="fa-light fa-user" />
                                <button data-bs-toggle="modal" data-bs-target="#loginModal">
                                    Login
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Sticky Header Section start  */}
            <header className="header-1 sticky-header">
                <div className="mega-menu-wrapper">
                    <div className="header-main">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-md-6 col-lg-10 col-xl-8 col-xxl-10">
                                    <div className="header-left">
                                        <div className="logo">
                                            <a href="index.html" className="header-logo">
                                                <img src={whiteLogo} alt="logo-img" />
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
                                                            <a href="shop-details.html">
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
                                                                    <a href="team-details.html">
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
            {/* Main Header Section start  */}
            <header className="header-1">
                <div className="mega-menu-wrapper">
                    <div className="header-main">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-md-6 col-lg-10 col-xl-8 col-xxl-10">
                                    <div className="header-left">
                                        <div className="logo">
                                            <a href="index.html" className="header-logo">
                                                <img src={whiteLogo} alt="logo-img" />
                                            </a>
                                        </div>
                                        <div className="mean__menu-wrapper">
                                            <div className="main-menu">
                                                <nav id="mobile-menu">
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
                                                            <a href="shop-details.html">
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
                                                                    <a href="team-details.html">
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

    )
}

export default Header