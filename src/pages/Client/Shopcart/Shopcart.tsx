// src/components/ShopCart.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import book1 from "../../../assets/img/hero/book1.png";
import book2 from "../../../assets/img/hero/book2.png";
import { useCart } from "../../../context/Cart";

const ShopCart = () => {
  const { cartItems, removeFromCart, updateCartQuantity, totalPrice } = useCart();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
    setMessage("Sản phẩm đã được xóa khỏi giỏ hàng!");
  };

  const handleQuantityChange = (id: number, value: string) => {
    const quantity = Number(value);
    if (!isNaN(quantity) && quantity > 0) {
      updateCartQuantity(id, quantity);
      setMessage("Cập nhật số lượng thành công!");
    }
  };

  // Logic tính tiền
  const calculateItemTotal = (item: any) => {
    // Kiểm tra nếu có promotion thì dùng giá promotion, nếu không thì dùng giá gốc
    const priceToUse = item.promotion && parseFloat(item.promotion) > 0 ? parseFloat(item.promotion) : parseFloat(item.price);
    return priceToUse * item.cartQuantity;
  };

  return (
    <>
      {message && <div className="alert alert-success text-center">{message}</div>}

      <div className="breadcrumb-wrapper">
        <img src={book1} alt="book" className="book1" />
        <img src={book2} alt="book" className="book2" />
        <div className="container">
          <h1>Cart</h1>
          <div className="page-header">
            <ul className="breadcrumb-items">
              <li><Link to="/">Home</Link></li>
              <li><i className="fa-solid fa-chevron-right"></i></li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </div>

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
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.length === 0 ? (
                        <tr><td colSpan={6} className="text-center">Giỏ hàng trống</td></tr>
                      ) : (
                        cartItems.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <img src={`http://127.0.0.1:8000/storage/${item.product.image}`} alt={item.product.title} className="cart w-[50px] h-[50px] object-cover" />
                              <Link to={`/shop-details/${item.product.code}`} className="cart-title">{item.product.title}</Link>
                            </td>
                            <td className="text-center">{parseFloat(item.price).toLocaleString("vi-VN")} VND</td>
                            <td className="text-center">{item.cover || "Không xác định"}</td>
                            <td className="text-center">
                              <div className="quantity-basket">
                                <button onClick={() => handleQuantityChange(item.id, (item.cartQuantity - 1).toString())} disabled={item.cartQuantity <= 1}>−</button>
                                <input type="number" value={item.cartQuantity} min="1" max={item.quantity} onChange={(e) => handleQuantityChange(item.id, e.target.value)} />
                                <button onClick={() => handleQuantityChange(item.id, (item.cartQuantity + 1).toString())} disabled={item.cartQuantity >= item.quantity}>+</button>
                              </div>
                            </td>
                            <td className="text-center">{calculateItemTotal(item).toLocaleString("vi-VN")} VND</td>
                            <td className="text-center">
                              <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
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
                <div className="cart-total">
                  <table className="table">
                    <thead>
                      <tr><th>Tổng Sản phẩm</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="sub-title">Subtotal: <span className="sub-price">{totalPrice.toLocaleString("vi-VN")} VND</span></td>
                      </tr>
                      <tr>
                        <td className="sub-title">Total: <span className="sub-price sub-price-total">{totalPrice.toLocaleString("vi-VN")} VND</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <Link to="/" className="btn btn-primary">Tiếp tục mua hàng</Link>
              <Link to="/check-out" className="btn btn-primary">Thanh Toán</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCart;
