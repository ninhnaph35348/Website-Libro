import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import book1 from "../../../assets/img/hero/book1.png";
import book2 from "../../../assets/img/hero/book2.png";
import { CartContext } from "../../../context/Cart";
import { useNavigate } from "react-router-dom";
const ShopCart = () => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext?.cartItems || [];
  const removeFromCart = cartContext?.removeFromCart || (() => {});
  const updateCartQuantity = cartContext?.updateCartQuantity || (() => {});
  const toggleItemSelection = cartContext?.toggleItemSelection || (() => {});
  const selectAllItems = cartContext?.selectAllItems || (() => {});
  const deselectAllItems = cartContext?.deselectAllItems || (() => {});
  const [mess, setMess] = useState(""); // State để lưu thông báo
  const [didSelect, setDidSelect] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !didSelect &&
      cartItems.length > 0 &&
      cartItems.some((item) => !item.isSelected)
    ) {
      selectAllItems();
      setDidSelect(true);
    }
  }, [cartItems, didSelect]);

  // Hàm hiển thị thông báo
  const showMessage = (message: string) => {
    setMess(message);
    setTimeout(() => setMess(""), 2000); // Ẩn thông báo sau 3 giây
  };

  // Hàm xóa sản phẩm với thông báo
  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
    showMessage("Sản phẩm đã được xóa khỏi giỏ hàng!");
  };
  const handleCheckout = () => {
    window.location.href = "check-out";
  };
  // Hàm cập nhật số lượng với thông báo
  const handleUpdateQuantity = (id: number, quantity: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (!item) return;

    if (quantity > item.quantity) {
      showMessage(`Chỉ còn ${item.quantity} sản phẩm trong kho!`);
      updateCartQuantity(id, item.quantity);
    } else if (quantity < 1) {
      showMessage("Số lượng tối thiểu là 1!");
      updateCartQuantity(id, 1);
    } else {
      updateCartQuantity(id, quantity);
      showMessage("Cập nhật số lượng thành công!");
    }
  };

  // Hàm lấy giá hiển thị (dùng để tính tổng tiền)
  const getDisplayPrice = (item: any) => {
    return item.promotion && item.promotion > 0 ? item.promotion : item.price;
  };

  // Hàm tính tổng tiền cho các sản phẩm được chọn
  const calculateTotalPrice = () => {
    const total = cartItems.reduce((sum, item) => {
      if (item.isSelected) {
        const price = getDisplayPrice(item);
        return sum + price * item.cartQuantity;
      }
      return sum;
    }, 0);
    return Math.max(0, Math.round(total));
  };

  // Kiểm tra trạng thái "Chọn tất cả"
  const isAllSelected =
    cartItems.length > 0 && cartItems.every((item) => item.isSelected);

  // Xử lý khi click vào checkbox "Chọn tất cả"
  const handleSelectAll = () => {
    if (isAllSelected) {
      deselectAllItems();
    } else {
      selectAllItems();
    }
  };

  const totalPrice = calculateTotalPrice();

  return (
    <>
      {/* Hiển thị thông báo */}
      {mess && (
        <div className="alert alert-success text-center" role="alert">
          {mess}
        </div>
      )}

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
            <h1>Giỏ Hàng</h1>
            <div className="page-header">
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".3s"
              >
                <li>
                  <Link to="/">Trang Chủ</Link>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
                <li>Giỏ Hàng</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Section */}
      <div className="cart-section section-padding">
        <div className="container">
          <div className="main-cart-wrapper">
            <div className="row g-5">
              <div className="col-xl-9">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          <input
                            type="checkbox"
                            checked={isAllSelected}
                            onChange={handleSelectAll}
                            disabled={cartItems.length === 0}
                          />
                          &nbsp;All
                        </th>
                        <th>Sản Phẩm</th>
                        <th>Giá</th>
                        <th>Loại</th>
                        <th>Số lượng</th>
                        <th>Tổng Tiền</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="text-center">
                            Giỏ hàng trống
                          </td>
                        </tr>
                      ) : (
                        cartItems.map((item) => (
                          <tr key={item.id}>
                            <td className="text-center">
                              <input
                                type="checkbox"
                                checked={item.isSelected}
                                onChange={() => toggleItemSelection(item.id)}
                              />
                            </td>
                            <td>
                              <span className="flex items-center gap-5">
                                <img
                                  src={`http://127.0.0.1:8000/storage/${item.product.image}`}
                                  alt={item.product.title}
                                  className="cart w-[50px] h-[50px] object-cover"
                                />
                                <Link
                                  to={`/shop-details/${item.product.code}`}
                                  className="cart-title hover:text-blue-500"
                                >
                                  {item.product.title}
                                </Link>
                              </span>
                            </td>
                            <td className="text-center">
                              {item.promotion && item.promotion > 0 ? (
                                <>
                                  {Math.round(item.promotion).toLocaleString()}₫
                                  <del className="!font-medium ml-2 text-[#5c707e]">
                                    {Math.round(item.price).toLocaleString()}₫
                                  </del>
                                </>
                              ) : (
                                `${Math.round(item.price).toLocaleString()}₫`
                              )}
                            </td>
                            <td className="text-center">
                              {item.cover || "Không xác định"}
                            </td>
                            <td className="text-center">
                              <div className="quantity-basket flex justify-center items-center gap-2.5">
                                <button
                                  className="qtyminus bg-gray-200 border-none p-1.5 cursor-pointer"
                                  onClick={() =>
                                    handleUpdateQuantity(
                                      item.id,
                                      item.cartQuantity - 1
                                    )
                                  }
                                  disabled={item.cartQuantity <= 1}
                                >
                                  −
                                </button>
                                <input
                                  type="number"
                                  value={item.cartQuantity}
                                  min="1"
                                  max={item.quantity}
                                  onChange={(e) =>
                                    handleUpdateQuantity(
                                      item.id,
                                      parseInt(e.target.value) || 1
                                    )
                                  }
                                  className="w-12 text-center border-gray-300 rounded"
                                />
                                <button
                                  className="qtyplus bg-gray-200 border-none p-1.5 cursor-pointer"
                                  onClick={() =>
                                    handleUpdateQuantity(
                                      item.id,
                                      item.cartQuantity + 1
                                    )
                                  }
                                  disabled={item.cartQuantity >= item.quantity}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="text-center">
                              {Math.round(
                                getDisplayPrice(item) * item.cartQuantity
                              ).toLocaleString("vi-VN")}{" "}
                              VND
                            </td>
                            <td className="text-center">
                              <button
                                className="remove-btn bg-transparent border-none text-red-500 cursor-pointer"
                                onClick={() => handleRemoveItem(item.id)}
                              >
                                <i className="fa-solid fa-times"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="table-responsive cart-total">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Tổng Sản phẩm</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="d-flex justify-content-between">
                            <span className="sub-title">Tổng phụ:</span>
                            <span className="sub-price">
                              {totalPrice.toLocaleString("vi-VN")} VND
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="d-flex justify-content-between">
                            <span className="sub-title">Tổng:</span>
                            <span className="sub-price sub-price-total">
                              {totalPrice.toLocaleString("vi-VN")} VND
                            </span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Thêm nút Continue Shopping và Checkout */}
            <div className="mt-4 flex justify-between">
              <Link
                to="/"
                className="inline-block px-5 py-2.5 bg-blue-500 text-white no-underline rounded-md transition-colors duration-300 hover:bg-blue-700"
              >
                Tiếp tục mua hàng
              </Link>
              <button
                onClick={handleCheckout}
                className="inline-block px-5 py-2.5 bg-blue-500 text-white no-underline rounded-md transition-colors duration-300 hover:bg-blue-700"
              >
                Thanh Toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCart;
