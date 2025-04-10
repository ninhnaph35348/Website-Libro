import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth";
import whiteLogo from "../../assets/img/logo/white-logo.svg";
import icon13 from "../../assets/img/icon/icon-13.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/auth/store";
import { IUser } from "../../interfaces/User";
import { fetchUser } from "../../store/auth/authSlice";
import { toast } from "react-toastify";
import { CartContext } from "../../context/Cart";

const Header = () => {
  const { logout } = useContext(AuthContext);
  const [showConfirm, setShowConfirm] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user) as IUser | null;
  const cartContext = useContext(CartContext);
  const cartItems = cartContext?.cartItems || [];
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.cartQuantity, 0);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser() as any);
    }
  }, [dispatch, user]);

  const handleLogout = () => {
    logout();
    dispatch({ type: "auth/logout" });
    toast.success("Đăng xuất thành công!");
    setShowConfirm(false); // Ẩn popup xác nhận
  };

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

              {user ? (
                <li className="relative flex flex-col items-start gap-2">
                  <div className="flex items-center gap-4">
                    <Link to={`profile`}>
                      <i className="fa-light fa-user text-lg" />
                      <span className="font-semibold text-white text-base">
                        {user.username}
                      </span>
                    </Link>
                    {/* Nếu là admin hoặc s.admin thì hiện nút Quản trị */}
                    {(user.role === "admin" || user.role === "s.admin") && (
                      <Link
                        to="/admin"
                        className="font-semibold text-white text-base"
                      >
                        Quản trị
                      </Link>
                    )}
                    <button
                      className="text-red-500 !hover:text-red-500 font-medium"
                      onClick={() => setShowConfirm(true)}
                    >
                      Đăng xuất
                    </button>
                  </div>

                  {showConfirm && (
                    <div className="bg-white shadow-md p-3 rounded-md absolute top-full right-0 mt-2 z-[9999] w-48 border border-gray-200">
                      <p className="text-sm !text-gray-800 font-semibold text-center mb-3">
                        Bạn muốn đăng xuất?
                      </p>
                      <div className="flex justify-center gap-2">
                        <button
                          className="bg-red-500 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-600 transition duration-200"
                          onClick={handleLogout}
                        >
                          Có
                        </button>
                        <button
                          className="bg-gray-200 text-gray-800 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-300 transition duration-200"
                          onClick={() => setShowConfirm(false)}
                        >
                          Không
                        </button>
                      </div>
                    </div>

                  )}
                </li>
              ) : (
                <li>
                  <i className="fa-light fa-user" />
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Sticky Header Section start */}
      <header className="header-1 sticky top-0 z-50">

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
                      {/* <a href="wishlist.html" className="relative w-[50px] h-[50px] text-center leading-[50px] bg-transparent inline-block rounded-full border">
                        <i className="fa-regular fa-heart" />
                      </a> */}
                      <Link to="shop-cart" className="relative w-[50px] h-[50px] text-center leading-[50px] bg-transparent inline-block rounded-full border">
                        <i className="fa-regular fa-cart-shopping" />
                        {totalQuantity > 0 && (
                          <span className="absolute -top-2 -left-0.5 bg-[#036280] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {totalQuantity}
                          </span>
                        )}
                      </Link>
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