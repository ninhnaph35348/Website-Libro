// src/components/ShopCart.tsx
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import book1 from "../../../assets/img/hero/book1.png";
import book2 from "../../../assets/img/hero/book2.png";
import { CartContext } from "../../../context/Cart";

type Props = {};

const ShopCart = (props: Props) => {
  const { cartItems, removeFromCart, updateCartQuantity } =
    useContext(CartContext);
  const [mess, setMess] = useState(""); // State để lưu thông báo

  // Hàm hiển thị thông báo
  const showMessage = (message: string) => {
    setMess(message);
    setTimeout(() => setMess(""), 3000); // Ẩn thông báo sau 3 giây
  };

  // Hàm xóa sản phẩm với thông báo
  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
    showMessage("Sản phẩm đã được xóa khỏi giỏ hàng!");
  };

  // Hàm cập nhật số lượng với thông báo
  const handleUpdateQuantity = (id: number, quantity: number) => {
    updateCartQuantity(id, quantity);
    showMessage("Cập nhật số lượng thành công!");
  };

  // Tính tổng tiền
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.cartQuantity * (1 - item.promotion / 100),
    0
  );

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
            <h1>Cart</h1>
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
                <li>Cart</li>
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
                        <th>Sản Phẩm</th>
                        <th>Giá</th>
                        <th>Loại</th>
                        <th>Số lượng</th>
                        <th>Tổng Tiền</th>
                        <th></th> {/* Cột cho nút xóa */}
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="text-center">
                            Giỏ hàng trống
                          </td>
                        </tr>
                      ) : (
                        cartItems.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <span className="flex items-center gap-5">
                                {/* Bỏ nút xóa ở đầu */}
                                {/* <button
                                  className="remove-icon bg-transparent border-none cursor-pointer"
                                  onClick={() => handleRemoveItem(item.id)}
                                >
                                  <img src={icon9} alt="remove" />
                                </button> */}
                                <img
                                  src={`http://127.0.0.1:8000/storage/${item.product.image}`}
                                  alt={item.product.title}
                                  className="cart w-[50px] h-[50px] object-cover"
                                />
                                {/* Làm tiêu đề sản phẩm thành liên kết đến trang chi tiết */}
                                <Link
                                  to={`/shop-details/${item.product.code}`}
                                  className="cart-title hover:text-blue-500"
                                >
                                  {item.product.title}
                                </Link>
                              </span>
                            </td>
                            <td className="text-center">
                              {item.price.toLocaleString("vi-VN")} VND
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
                              {(
                                item.price *
                                item.cartQuantity *
                                (1 - item.promotion / 100)
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
                            <span className="sub-title">Subtotal:</span>
                            <span className="sub-price">
                              {totalPrice.toLocaleString("vi-VN")} VND
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="d-flex justify-content-between">
                            <span className="sub-title">Total:</span>
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
              <Link
                to="/check-out"
                className="inline-block px-5 py-2.5 bg-blue-500 text-white no-underline rounded-md transition-colors duration-300 hover:bg-blue-700"
              >
                Thanh Toán
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCart;
