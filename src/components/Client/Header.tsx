import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/Auth";
import Libro from "../../assets/img/libro.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/auth/store";
import { IUser } from "../../interfaces/User";
import { fetchUser } from "../../store/auth/authSlice";
import { toast } from "react-toastify";
import { CartContext } from "../../context/Cart";
import instance from "../../config/axios";
import { ProductVariantContext } from "../../context/ProductVariants";
import { IProductVariant } from "../../interfaces/ProductVariants";

const Header = () => {
  const { logout } = useContext(AuthContext);
  const { productVariantByStatus, getVariantsByStatus } = useContext(
    ProductVariantContext
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<IProductVariant[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const [showConfirm, setShowConfirm] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(
    (state: RootState) => state.auth.user
  ) as IUser | null;
  const cartContext = useContext(CartContext);
  const cartItems = cartContext?.cartItems || [];
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.cartQuantity,
    0
  );
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.trim() !== "") {
        instance
          .get(
            `http://127.0.0.1:8000/api/products?search=${encodeURIComponent(
              searchTerm
            )}`
          )
          .then((res) => {
            setSearchResults(res.data.data || []);
            setShowDropdown(true);
          })
          .catch(() => {
            setSearchResults([]);
            setShowDropdown(false);
          });
      } else {
        setSearchResults([]);
        setShowDropdown(false);
      }
    }, 300); // debounce 300ms

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  useEffect(() => {
    getVariantsByStatus();
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const results: IProductVariant[] = productVariantByStatus.filter(
        (variant: IProductVariant) =>
          variant.product.title.toLowerCase().includes(searchTerm.toLowerCase()) // Tìm kiếm theo tên sản phẩm
      );
      setSearchResults(results);
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    // Gọi hàm tìm kiếm khi searchTerm thay đổi
    handleSearch();
  }, [searchTerm]); // Chạy lại khi searchTerm thay đổi

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        // Đợi 500ms trước khi ẩn dropdown (tạo độ trễ)
        const newTimeoutId = setTimeout(() => {
          setShowDropdown(false);
        }, 500); // Độ trễ 500ms trước khi ẩn dropdown
        setTimeoutId(newTimeoutId);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId); // Xóa timeout khi component bị unmount hoặc khi có sự kiện click mới
      }
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [timeoutId]);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser() as any);
    }
  }, [dispatch, user]);

  const handleLogout = () => {
    logout();
    dispatch({ type: "auth/logout" });

    // Xoá trạng thái đăng nhập và nhận voucher
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("hasReceivedVoucher");

    toast.success("Đăng xuất thành công!");

    // Reload lại trang để HomePopup cập nhật lại UI
    setTimeout(() => {
      window.location.reload(); // 👈 Quan trọng!
    }, 1000);
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
                      <Link to="/" className="">
                        <img src={Libro} alt="logo" className="w-32" />
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
                <div className="flex items-center justify-end col-6 col-md-6 col-lg-2 col-xl-4 col-xxl-2 ">
                  <div className="header-right">
                    <div className="category-oneadjust gap-6 d-flex align-items-center relative">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault(); // Ngừng hành động mặc định (reload trang)
                          if (searchTerm.trim()) {
                            window.location.href = `/shop?search=${encodeURIComponent(
                              searchTerm
                            )}`; // Chuyển hướng đến trang shop với query search
                          }
                        }}
                        className="search-toggle-box d-md-block w-full"
                      >
                        <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md transition duration-300 focus-within:shadow-lg relative">
                          <input
                            ref={inputRef}
                            type="text"
                            placeholder="Tìm kiếm sản phẩm..."
                            className="flex-1 px-4 py-2 rounded-full focus:outline-none text-gray-700"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => setShowDropdown(true)}
                            onBlur={() => {
                              // Delay để user kịp click vào dropdown
                              setTimeout(() => setShowDropdown(false), 200);
                            }}
                          />

                          <button
                            type="submit"
                            className="p-3 rounded-full hover:bg-gray-200 transition duration-300"
                          >
                            <i className="far fa-search text-gray-600" />
                          </button>
                        </div>
                      </form>

                      {/* Dropdown kết quả tìm kiếm */}
                      {showDropdown && searchResults.length > 0 && (
                        <ul
                          className="absolute z-50 top-full mt-1 left-0 w-full bg-white shadow-lg rounded-lg overflow-hidden max-h-72 overflow-y-auto"
                          ref={dropdownRef}
                          onMouseDown={(e) => {
                            // Ngăn dropdown mất focus khi click
                            e.preventDefault();
                          }}
                        >
                          {searchResults.map((variant) =>
                            variant.product ? (
                              <li
                                key={variant.id}
                                onClick={() => {
                                  setSearchTerm(""); // Đặt lại giá trị tìm kiếm khi nhấp vào kết quả
                                  setShowDropdown(false); // Ẩn dropdown sau khi nhấp vào kết quả
                                }}
                              >
                                <Link
                                  to={`/shop-details/${variant.product.code}/cover/${variant.cover_id}`}
                                  className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
                                >
                                  {variant.product.title}
                                </Link>
                              </li>
                            ) : null
                          )}
                        </ul>
                      )}
                    </div>

                    <div className="menu-cart">
                      {/* <a href="wishlist.html" className="relative w-[50px] h-[50px] text-center leading-[50px] bg-transparent inline-block rounded-full border">
                        <i className="fa-regular fa-heart" />
                      </a> */}
                      <Link
                        to="shop-cart"
                        className="relative w-[50px] h-[50px] text-center leading-[50px] bg-transparent inline-block rounded-full border"
                      >
                        <i className="fa-regular fa-cart-shopping" />
                        {totalQuantity > 0 && (
                          <span className="absolute -top-2 -left-0.5 bg-[#036280] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {totalQuantity}
                          </span>
                        )}
                      </Link>
                      {/* <div className="header-humbager ml-30">
                        <a
                          className="sidebar__toggle"
                          href="javascript:void(0)"
                        >
                          <div className="bar-icon-2">
                            <img src={icon13} alt="img" />
                          </div>
                        </a>
                      </div> */}
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