import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CheckoutContext } from "../../../context/Checkout";
import { ICheckout } from "../../../interfaces/Checkout";
import { useCart } from "../../../context/Cart";
import { ICartItem } from "../../../interfaces/Cart";
import { useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
    const { cartItems } = useCart();
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<ICheckout>();
    const navigate = useNavigate();
    const { userInfo } = useContext(CheckoutContext); // Lấy thông tin người dùng từ context

    const [paymentMethod, setPaymentMethod] = useState<number>(0);
    const shippingFee = 30000;
    const totalAmount = cartItems.reduce((total, item) => {
        const itemPrice = item.promotion && item.promotion < item.price ? item.promotion : item.price;
        return total + itemPrice * item.cartQuantity;
    }, 0) + shippingFee;

    // Tự động điền thông tin nếu người dùng đã đăng nhập
    useEffect(() => {
        console.log(userInfo); // Kiểm tra xem thông tin người dùng có được truyền vào đúng không
        if (userInfo) {
            setValue("user_name", userInfo.name || "");
            setValue("user_phone", userInfo.phone || "");
            setValue("user_email", userInfo.email || "");
            setValue("user_address", userInfo.address || "");
        }
    }, [userInfo, setValue]);

    const onSubmit = async (data: ICheckout) => {
        const orderData: ICheckout = {
            ...data,
            cart: cartItems.map(item => ({
                product_variant_id: item.id,
                quantity: item.cartQuantity,
            })) as any,
            shipping_fee: 30000,
            payment_method: paymentMethod,
        };
        console.log(orderData);
        // Call API để tạo đơn hàng hoặc xử lý dữ liệu
        reset();
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
                                                    <input type="text"
                                                        {...register("user_name", { required: "Tên không được để trống" })}
                                                        placeholder="Tên"
                                                    />
                                                    {errors.user_name && <p className="text-red-500">{errors.user_name.message}</p>}
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-single">
                                                    <span>Số điện thoại*</span>
                                                    <input type="text"
                                                        {...register("user_phone", { required: "Số điện thoại không được để trống" })}
                                                        placeholder="Số điện thoại"
                                                    />
                                                    {errors.user_phone && <p className="text-red-500">{errors.user_phone.message}</p>}
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-single">
                                                    <span>Địa chỉ Email*</span>
                                                    <input
                                                        {...register("user_email", { 
                                                            required: "Email không được để trống",
                                                            setValueAs: value => value?.toLowerCase()
                                                        })}
                                                        placeholder="email"
                                                        autoCapitalize="none"
                                                        autoComplete="off"
                                                        />

                                                    {errors.user_email && <p className="text-red-500">{errors.user_email.message}</p>}
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-single">
                                                    <span>Địa chỉ</span>
                                                    <input
                                                        {...register("user_address", { required: "Địa chỉ không được để trống" })}
                                                        placeholder="Địa chỉ nhận hàng"
                                                         autoCapitalize="none"
                                                         autoComplete="off"
                                                    />
                                                    {errors.user_address && <p className="text-red-500">{errors.user_address.message}</p>}
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
                                        {cartItems.map((item: ICartItem) => (
                                            <div key={item.product.code} className="checkout-item grid grid-cols-5 text-center py-2 border-b items-center">
                                                <p className="col-span-3 text-left">{item.product.title}</p>
                                                <p>{item.cartQuantity}</p>
                                                <p className="font-medium text-orange-600">
                                                    {item.promotion && item.promotion < item.price ? (
                                                        <>{Math.round(item.promotion * item.cartQuantity).toLocaleString("vi-VN")}₫</>
                                                    ) : (
                                                        `${Math.round(item.price * item.cartQuantity).toLocaleString("vi-VN")}₫`
                                                    )}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="checkout-item grid grid-cols-5 text-center">
                                        <p className="col-span-4 text-left">Vận chuyển</p>
                                        <p>30.000₫</p>
                                    </div>
                                    <div className="checkout-item grid grid-cols-5 text-center">
                                        <p className="col-span-4 text-left !text-2xl">Tổng cộng:</p>
                                        <p className="!text-red-400 !text-2xl">{totalAmount.toLocaleString("vi-VN")}₫</p>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="theme-btn">Thanh toán</button>
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
