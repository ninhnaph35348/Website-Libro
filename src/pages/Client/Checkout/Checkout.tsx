import { useContext, useEffect, useState } from "react";
import Pr_pay from "../../../assets/img/pr_pay.jpg";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "../../../context/Cart";
import { CheckoutContext } from "../../../context/Checkout";
import { ICartItem } from "../../../interfaces/Cart";
import { ICheckout } from "../../../interfaces/Checkout";
import { fetchUser } from "../../../store/auth/authSlice";
import { IUser } from "../../../interfaces/User";
import { RootState } from "../../../store/auth/store";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/Cart"; 

const Checkout: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const cartContext = useContext(CartContext); // Thêm dòng này // Lấy clearCart để xóa giỏ hàng sau khi thanh toán
  const { cartItems, clearCart } = useCart(); // Lấy clearCart để xóa giỏ hàng sau khi thanh toán
  const dispatch = useDispatch();
  const user = useSelector(
    (state: RootState) => state.auth.user
  ) as IUser | null;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICheckout>();
  const navigate = useNavigate();
  const [showQR, setShowQR] = useState(false);
  const context = useContext(CheckoutContext);
  const [paymentMethod, setPaymentMethod] = useState<number>(0);

  // Lọc các sản phẩm có isSelected: true
  const selectedItems = cartItems.filter((item) => item.isSelected);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser() as any);
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user) {
      reset({
        user_name: user.fullname || "",
        user_email: user.email || "",
        user_phone: user.phone || "",
        user_address: user.address || "",
        note: "",
      });
    }
  }, [user, reset]);

  const shippingFee = 30000;
  // Tính tổng tiền chỉ cho các sản phẩm được chọn
  const totalAmount =
    selectedItems.reduce((total, item) => {
      const itemPrice =
        item.promotion && item.promotion < item.price
          ? item.promotion
          : item.price;
      return total + itemPrice * item.cartQuantity;
    }, 0) + (selectedItems.length > 0 ? shippingFee : 0); // Chỉ thêm phí vận chuyển nếu có sản phẩm được chọn

  const onSubmit = async (data: ICheckout) => {
    if (context) {
      // Chỉ truyền các sản phẩm được chọn
      const orderData: ICheckout = {
        ...data,
        cart: selectedItems.map((item) => ({
          product_variant_id: item.id,
          quantity: item.cartQuantity,
        })) as any,
        shipping_fee: selectedItems.length > 0 ? 30000 : 0, // Phí vận chuyển chỉ áp dụng nếu có sản phẩm
        payment_method: paymentMethod,
      };

      const success = await context.onAdd(orderData);
      if (success) {
        // Xóa các sản phẩm được chọn khỏi giỏ hàng
        selectedItems.forEach((item) => {
          cartItems.forEach((cartItem) => {
            if (cartItem.id === item.id) {
              cartContext.removeFromCart(cartItem.id);
            }
          });
        });
        reset();
        navigate("/profile/order_detail");
      }
      reset();
    }
  };

  return (
    <section className="checkout-section fix section-padding mx-[200px]">
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="checkout-single-wrapper">
                <div className="checkout-single boxshado-single">
                  <h4>Chi tiết thanh toán</h4>
                  <div className="checkout-single-form">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="input-single">
                          <span>Họ và tên</span>
                          <input
                            type="text"
                            {...register("user_name", {
                              required: "Tên không được để trống",
                            })}
                            placeholder="Tên"
                          />
                          {errors.user_name && (
                            <p className="text-red-500">
                              {errors.user_name.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-single">
                          <span>Số điện thoại*</span>
                          <input
                            type="text"
                            {...register("user_phone", {
                              required: "Số điện thoại không được để trống",
                            })}
                            placeholder="Số điện thoại"
                          />
                          {errors.user_phone && (
                            <p className="text-red-500">
                              {errors.user_phone.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-single">
                          <span>Địa chỉ Email*</span>
                          <input
                            type="email"
                            {...register("user_email", {
                              required: "Email không được để trống",
                            })}
                            placeholder="email"
                          />
                          {errors.user_email && (
                            <p className="text-red-500">
                              {errors.user_email.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-single">
                          <span>Địa chỉ</span>
                          <input
                            {...register("user_address", {
                              required: "Địa chỉ không được để trống",
                            })}
                            placeholder="Địa chỉ nhận hàng"
                          />
                          {errors.user_address && (
                            <p className="text-red-500">
                              {errors.user_address.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-single">
                          <span>Ghi chú</span>
                          <input
                            {...register("note")}
                            placeholder="Ghi chú nhận hàng"
                          />
                          {errors.user_address && (
                            <p className="text-red-500">
                              {errors.user_address.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="checkout-order-area">
                <h3>Đơn hàng của tôi</h3>
                <div className="product-checout-area space-x-1">
                  <div className="checkout-summary">
                    <div className="checkout-header grid grid-cols-5 text-center font-bold py-2 border-b">
                      <p className="col-span-3">Sản phẩm</p>
                      <p>Số lượng</p>
                      <p>Giá</p>
                    </div>

                    {selectedItems.length === 0 ? (
                      <div className="text-center py-4">
                        <p>Chưa có sản phẩm nào được chọn.</p>
                      </div>
                    ) : (
                      selectedItems.map((item: ICartItem) => (
                        <div
                          key={item.product.code}
                          className="checkout-item grid grid-cols-5 text-center py-2 border-b items-center"
                        >
                          <p className="col-span-3 text-left">
                            {item.product.title}
                          </p>
                          <p>{item.cartQuantity}</p>
                          <p className="font-medium text-orange-600">
                            {item.promotion && item.promotion < item.price ? (
                              <>
                                {Math.round(
                                  item.promotion * item.cartQuantity
                                ).toLocaleString("vi-VN")}
                                ₫
                              </>
                            ) : (
                              `${Math.round(
                                item.price * item.cartQuantity
                              ).toLocaleString("vi-VN")}₫`
                            )}
                          </p>
                        </div>
                      ))
                    )}
                  </div>

                  {selectedItems.length > 0 && (
                    <>
                      <div className="checkout-item grid grid-cols-5 text-center">
                        <p className="col-span-4 text-left">Vận chuyển</p>
                        <p>30.000₫</p>
                      </div>
                      <div className="checkout-item grid grid-cols-5 text-center">
                        <p className="col-span-4 text-left !text-2xl">
                          Tổng cộng:
                        </p>
                        <p className="!text-red-400 !text-2xl">
                          {totalAmount.toLocaleString("vi-VN")}₫
                        </p>
                      </div>
                    </>
                  )}
                  <div className="checkout-item-2">
                    <div className="form-check-2 d-flex align-items-center from-customradio-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="paymentBankTransfer"
                        value="1"
                        checked={paymentMethod === 1}
                        onChange={() => {
                          setPaymentMethod(1);
                          setShowQR(true);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="paymentBankTransfer"
                      >
                        Chuyển khoản ngân hàng trực tiếp
                      </label>
                    </div>
                    <p>
                      Thanh toán trực tiếp vào tài khoản ngân hàng của chúng
                      tôi, vui lòng sử dụng Mã đơn hàng của bạn làm tham chiếu
                      thanh toán. Đơn hàng của bạn sẽ không được giao cho đến
                      khi tiền được chuyển vào tài khoản của chúng tôi.
                    </p>

                    <div className="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="paymentCOD"
                        value="0"
                        checked={paymentMethod === 0}
                        onChange={() => setPaymentMethod(0)}
                      />
                      <label className="form-check-label" htmlFor="paymentCOD">
                        Thanh toán khi nhận hàng
                      </label>
                    </div>

                    {showQR && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-8 rounded-2xl shadow-2xl text-center w-[500px] relative">
                          <h2 className="text-2xl font-bold mb-6 text-gray-800">
                            Quét mã QR để thanh toán
                          </h2>
                          <img
                            src={Pr_pay}
                            alt="QR Code"
                            className="mx-auto w-64 border-4 border-gray-300 rounded-lg shadow-md"
                          />
                          <div className="flex flex-col justify-center gap-6 mt-6">
                            <button
                              className="theme-btn mx-auto mt-4"
                              onClick={() => {
                                setShowQR(false);
                                setPaymentMethod(1);
                              }}
                            >
                              ✅ Tôi đã thanh toán
                            </button>
                            <button
                              className="bg-gray-300 text-gray-700 mx-auto px-4 py-2 rounded hover:bg-gray-400"
                              onClick={() => {
                                setShowQR(false);
                                setPaymentMethod(0);
                              }}
                            >
                              ❌ Hủy
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="theme-btn"
                      disabled={selectedItems.length === 0}
                    >
                      Thanh toán
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
