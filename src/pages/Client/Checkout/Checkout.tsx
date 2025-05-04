import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/Cart";
import { CheckoutContext } from "../../../context/Checkout";
import { VnPayContext } from "../../../context/VnPay";
import { ICartItem } from "../../../interfaces/Cart";
import { ICheckout } from "../../../interfaces/Checkout";
import { IUser } from "../../../interfaces/User";
import { IVnPay } from "../../../interfaces/VnPay";
import { IVoucher } from "../../../interfaces/Voucher";
import { getVoucherById } from "../../../services/Voucher";
import { fetchUser } from "../../../store/auth/authSlice";
import { RootState } from "../../../store/auth/store";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
const Checkout: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();
  const { addVnPay } = useContext(VnPayContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(
    (state: RootState) => state.auth.user
  ) as IUser | null;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICheckout>();
  const context = useContext(CheckoutContext);
  const [paymentMethod, setPaymentMethod] = useState<number>(0);
  const [code, setCode] = useState("");
  const [voucher, setVoucher] = useState<IVoucher | null>(null);
  const [error, setError] = useState("");

  // Filter selected items
  const selectedItems = cartItems.filter((item) => item.isSelected);

  // Calculate total amount for selected items
  const shippingFee = selectedItems.length > 0 ? 30000 : 0;
  const totalAmountBeforeDiscount = selectedItems.reduce((total, item) => {
    const itemPrice =
      item.promotion && item.promotion > 0 && item.promotion < item.price
        ? item.promotion
        : item.price;
    return total + itemPrice * item.cartQuantity;
  }, 0);

  const rawDiscount = voucher
    ? voucher.discount_type === "percent"
      ? (totalAmountBeforeDiscount * Number(voucher.discount)) / 100
      : Number(voucher.discount)
    : 0;

  const discountAmount = voucher?.max_discount
    ? Math.min(rawDiscount, Number(voucher.max_discount))
    : rawDiscount;

  const totalAmount = totalAmountBeforeDiscount - discountAmount + shippingFee;

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser() as any);
    }
  }, [dispatch, user]);

  const handleApplyVoucher = async () => {
    try {
      const res = await getVoucherById(code.trim());
      setVoucher(res);
      setError(""); // Xóa lỗi cũ nếu có
    } catch (err) {
      setVoucher(null);
      setError("Mã không hợp lệ hoặc không tồn tại");
    }
  };

  useEffect(() => {
    if (user) {
      reset({
        shipping_name: user.fullname || "",
        shipping_email: user.email || "",
        shipping_phone: user.phone || "",
        shipping_address: user.address || "",
        note: "",
      });
    }
  }, [user, reset]);

  const onSubmit = async (data: ICheckout) => {
    if (!context || selectedItems.length === 0) return;
    if (
      voucher?.min_order_value &&
      totalAmountBeforeDiscount < voucher.min_order_value
    ) {
      toast(
        `Đơn hàng phải có giá trị tối thiểu ${Number(
          voucher.min_order_value
        ).toLocaleString("vi-VN")}₫ để sử dụng mã giảm giá này.`
      );
      return;
    }

    confirmAlert({
      customUI: ({ onClose }) => (
        <div className="custom-confirm-alert">
          <h3>Xác nhận thanh toán</h3>
          <p>Bạn có chắc chắn muốn thanh toán đơn hàng này?</p>
          <div className="buttons">
            <button
              className="btn-confirm"
              onClick={async () => {
                const orderData: ICheckout = {
                  ...data,
                  cart: selectedItems.map((item) => ({
                    product_variant_id: item.id,
                    quantity: item.cartQuantity,
                  })) as any,
                  shipping_fee: shippingFee,
                  payment_method: paymentMethod,
                  voucher_code: voucher?.code as string,
                };

                const success = await context.onAdd(orderData);

                if (success) {
                  if (paymentMethod === 1) {
                    const vnPay: IVnPay = {
                      amount: totalAmount,
                      orderInfo: success.code_order,
                    };
                    const vnPayData = await addVnPay(vnPay);
                    window.location.href = vnPayData.payment_url;
                  } else {
                    selectedItems.forEach((item) => {
                      removeFromCart(item.id);
                    });
                    reset();
                    navigate("/profile/order_detail");
                  }
                } else {
                  toast.error("Đặt hàng thất bại!");
                }
                onClose(); // Đóng confirm
              }}
            >
              Có
            </button>
            <button
              className="btn-cancel"
              onClick={() => {
                toast.info("Đã hủy thanh toán");
                onClose(); // Đóng confirm
              }}
            >
              Không
            </button>
          </div>
        </div>
      ),
    });
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
                            {...register("shipping_name", {
                              required: "Tên không được để trống",
                            })}
                            placeholder="Tên"
                          />
                          {errors.shipping_name && (
                            <p className="text-red-500">
                              {errors.shipping_name.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-single">
                          <span>Số điện thoại*</span>
                          <input
                            type="text"
                            {...register("shipping_phone", {
                              required: "Số điện thoại không được để trống",
                            })}
                            placeholder="Số điện thoại"
                          />
                          {errors.shipping_phone && (
                            <p className="text-red-500">
                              {errors.shipping_phone.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-single">
                          <span>Địa chỉ Email*</span>
                          <input
                            type="email"
                            {...register("shipping_email", {
                              required: "Email không được để trống",
                            })}
                            placeholder="Email"
                          />
                          {errors.shipping_email && (
                            <p className="text-red-500">
                              {errors.shipping_email.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-single">
                          <span>Địa chỉ</span>
                          <input
                            {...register("shipping_address", {
                              required: "Địa chỉ không được để trống",
                            })}
                            placeholder="Địa chỉ nhận hàng"
                          />
                          {errors.shipping_address && (
                            <p className="text-red-500">
                              {errors.shipping_address.message}
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
                            {item.promotion &&
                            item.promotion > 0 &&
                            item.promotion < item.price
                              ? `${Math.round(
                                  item.promotion * item.cartQuantity
                                ).toLocaleString("vi-VN")}₫`
                              : `${Math.round(
                                  item.price * item.cartQuantity
                                ).toLocaleString("vi-VN")}₫`}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="checkout-item grid grid-cols-5 space-x-2 text-center items-center">
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="Nhập mã giảm giá"
                      className="col-span-2 border p-2 rounded text-black"
                    />
                    <button
                      type="button"
                      onClick={handleApplyVoucher}
                      className="col-span-1 bg-blue-500 text-white rounded px-2 py-1 hover:bg-blue-600"
                    >
                      Áp dụng
                    </button>
                    {voucher ? (
                      <>
                        <p className="col-span-1 text-green-600 font-semibold my-auto">
                          -{" "}
                          {voucher?.discount_type === "percent"
                            ? `${Number(voucher?.discount || 0).toLocaleString(
                                "vi-VN"
                              )} %`
                            : `${Number(voucher?.discount || 0).toLocaleString(
                                "vi-VN"
                              )}₫`}
                        </p>

                        <button
                          type="button"
                          onClick={() => {
                            setVoucher(null);
                            setCode("");
                            setError("");
                          }}
                          className="col-span-1 bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600"
                        >
                          Hủy
                        </button>
                      </>
                    ) : (
                      <p className="col-span-1 text-red-500 text-sm">{error}</p>
                    )}
                  </div>
                  {selectedItems.length > 0 && (
                    <>
                      <div className="checkout-item grid grid-cols-5 text-center">
                        <p className="col-span-4 text-left">Vận chuyển</p>
                        <p>30.000₫</p>
                      </div>
                      <div className="checkout-item grid grid-cols-5 text-center">
                        <p className="col-span-3 text-left !text-2xl">
                          Tổng cộng:
                        </p>
                        <p className="col-span-1 text-green-600 font-semibold my-auto">
                          -{" "}
                          {(() => {
                            const rawDiscount = voucher
                              ? voucher.discount_type === "percent"
                                ? (totalAmountBeforeDiscount *
                                    Number(voucher.discount)) /
                                  100
                                : Number(voucher.discount)
                              : 0;

                            const discountAmount = voucher?.max_discount
                              ? Math.min(
                                  rawDiscount,
                                  Number(voucher.max_discount)
                                )
                              : rawDiscount;

                            return `${Math.round(discountAmount).toLocaleString(
                              "vi-VN"
                            )}₫`;
                          })()}
                        </p>

                        <p className="!text-red-400 !text-2xl">
                          {totalAmount.toLocaleString("vi-VN")}₫
                        </p>
                      </div>
                    </>
                  )}
                  <div className="checkout-item-2">
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
                    <div className="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="paymentVnPay"
                        value="1"
                        checked={paymentMethod === 1}
                        onChange={() => setPaymentMethod(1)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="paymentVnPay"
                      >
                        Chuyển khoản VnPay
                      </label>
                    </div>
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
