import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Pr_pay from "../../../assets/img/pr_pay.jpg";
import { useCart } from "../../../context/Cart";
import { CheckoutContext } from "../../../context/Checkout";
import { VnPayContext } from "../../../context/VnPay";
import { ICartItem } from "../../../interfaces/Cart";
import { ICheckout } from "../../../interfaces/Checkout";
import { IUser } from "../../../interfaces/User";
import { IVnPay } from "../../../interfaces/VnPay";
import { fetchUser } from "../../../store/auth/authSlice";
import { RootState } from "../../../store/auth/store";

const Checkout: React.FC = () => {
    const { cartItems } = useCart();
    const { addVnPay } = useContext(VnPayContext);
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user) as IUser | null;
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ICheckout>();
    const [showQR, setShowQR] = useState(false);
    const context = useContext(CheckoutContext);
    const [paymentMethod, setPaymentMethod] = useState<number>(0);

    useEffect(() => {
        if (!user) {
            dispatch(fetchUser() as any);
        }
    }, [dispatch, user]);
    useEffect(() => {
        if (user) {
            reset({
                shipping_name: user.fullname || "",
                user_email: user.email || "",
                shipping_phone: user.phone || "",
                shipping_address: user.address || "",
                note: "",
            });
        }
    }, [user, reset]);

    const shippingFee = 30000;
    const totalAmount = cartItems.reduce((total, item) => {
        const itemPrice = item.promotion && item.promotion < item.price ? item.promotion : item.price;
        return total + itemPrice * item.cartQuantity;
    }, 0) + shippingFee;

    // const [provinces, setProvinces] = useState<Province[]>([]);
    // const [districts, setDistricts] = useState<District[]>([]);
    // const [wards, setWards] = useState<Ward[]>([]);
    // const [selectedProvince, setSelectedProvince] = useState<number | null>(null);
    // const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);

    // useEffect(() => {
    //     getProvinces().then(setProvinces);
    // }, []);

    // const handleProvinceChange = (value: number) => {
    //     setSelectedProvince(value);
    //     setSelectedDistrict(null);
    //     setWards([]);
    //     getDistricts(value).then(setDistricts);
    // };

    // const handleDistrictChange = (value: number) => {
    //     setSelectedDistrict(value);
    //     getWards(value).then(setWards);
    // };


    const onSubmit = async (data: ICheckout) => {

        if (context) {
            const orderData: ICheckout = {
                ...data,
                cart: cartItems.map(item => ({
                    product_variant_id: item.id,
                    quantity: item.cartQuantity,
                })) as any,
                shipping_fee: 30000,
                payment_method: paymentMethod,
            };

            const success = await context.onAdd(orderData);
            if (success) {
                localStorage.removeItem("cart");

                if (paymentMethod == 2) {
                    const vnPay: IVnPay = {
                        amount: totalAmount,
                        orderInfo: success.code_order
                    };

                    const data = await addVnPay(vnPay);
                    
                    window.location.href = data.payment_url

                }
                reset();
            }
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
                                                    <input type="text"
                                                        {...register("shipping_name", { required: "Tên không được để trống" })}
                                                        placeholder="Tên"
                                                    />
                                                    {errors.shipping_name && <p className="text-red-500">{errors.shipping_name.message}</p>}
                                                </div>
                                            </div>
                                            {/* <div className="hidden">
                                                <Select placeholder="Chọn tỉnh/thành" style={{ width: 200 }} onChange={handleProvinceChange}>
                                                    {provinces.map((province) => (
                                                        <Option key={province.code} value={province.code}>
                                                            {province.name}
                                                        </Option>
                                                    ))}
                                                </Select>

                                                <Select placeholder="Chọn quận/huyện" style={{ width: 200, marginLeft: 10 }} onChange={handleDistrictChange} disabled={!selectedProvince}>
                                                    {districts.map((district) => (
                                                        <Option key={district.code} value={district.code}>
                                                            {district.name}
                                                        </Option>
                                                    ))}
                                                </Select>

                                                <Select placeholder="Chọn phường/xã" style={{ width: 200, marginLeft: 10 }} disabled={!selectedDistrict}>
                                                    {wards.map((ward) => (
                                                        <Option key={ward.code} value={ward.code}>
                                                            {ward.name}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </div> */}
                                            <div className="col-lg-12">
                                                <div className="input-single">
                                                    <span>Số điện thoại*</span>
                                                    <input type="text"
                                                        {...register("shipping_phone", { required: "Số điện thoại không được để trống" })}
                                                        placeholder="Số điện thoại"
                                                    />
                                                    {errors.shipping_phone && <p className="text-red-500">{errors.shipping_phone.message}</p>}
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-single">
                                                    <span>Địa chỉ Email*</span>
                                                    <input type="email"
                                                        {...register("user_email", { required: "Email không được để trống" })}
                                                        placeholder="email"
                                                    />
                                                    {errors.user_email && <p className="text-red-500">{errors.user_email.message}</p>}
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-single">
                                                    <span>Địa chỉ</span>
                                                    <input
                                                        {...register("shipping_address", { required: "Địa chỉ không được để trống" })}
                                                        placeholder="Địa chỉ nhận hàng"
                                                    />
                                                    {errors.shipping_address && <p className="text-red-500">{errors.shipping_address.message}</p>}
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-single">
                                                    <span>Ghi chú</span>
                                                    <input
                                                        {...register("note")}
                                                        placeholder="Ghi chú nhận hàng"
                                                    />
                                                    {errors.note && <p className="text-red-500">{errors.note.message}</p>}
                                                </div>
                                            </div>
                                            {/* <div className="col-lg-12">
                                                <div className="input-check payment-save">
                                                    <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext111" />
                                                    <label htmlFor="saveForNext">Tiết kiệm cho lần thanh toán tiếp theo của tôi</label>
                                                </div>
                                                <div className="input-check payment-save style-2">
                                                    <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext2" />
                                                    <label htmlFor="saveForNext2">Gửi đến một địa chỉ khác?</label>
                                                </div>
                                            </div> */}
                                            {/* <div className="col-lg-12">
                                                <div className="input-single">
                                                    <span>Ghi chú (tùy chọn)</span>
                                                    <textarea name="notes" id="notes" placeholder="Ghi chú về đơn hàng của bạn, ví dụ ghi chú đặc biệt về việc giao hàng." defaultValue={""} />
                                                </div>
                                            </div> */}
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
                                                        <>
                                                            {Math.round(item.promotion * item.cartQuantity).toLocaleString("vi-VN")}₫

                                                        </>
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
                                    <div className="checkout-item grid grid-cols-5 text-center ">
                                        <p className="col-span-4 text-left !text-2xl">Tổng cộng:</p>
                                        <p className="!text-red-400 !text-2xl">{totalAmount.toLocaleString("vi-VN")}₫</p>
                                    </div>
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
                                                    setShowQR(true); // Hiển thị mã QR
                                                }}
                                            />
                                            <label className="form-check-label" htmlFor="paymentBankTransfer">
                                                Chuyển khoản ngân hàng trực tiếp
                                            </label>
                                        </div>
                                        <p>
                                            Thanh toán trực tiếp vào tài khoản ngân hàng của chúng tôi, vui lòng sử dụng Mã đơn hàng của bạn làm tham chiếu thanh toán. Đơn hàng của bạn sẽ không được giao cho đến khi tiền được chuyển vào tài khoản của chúng tôi.
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

                                        <div className="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="paymentMethod"
                                                id="paymentCOD"
                                                value="0"
                                                checked={paymentMethod === 2}
                                                onChange={() => setPaymentMethod(2)}
                                            />
                                            <label className="form-check-label" htmlFor="paymentCOD">
                                                Chuyển khoản trực tiếp
                                            </label>
                                        </div>


                                        {/* ✅ Hiển thị mã QR khi chọn chuyển khoản */}
                                        {showQR && (
                                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                                <div className="bg-white p-8 rounded-2xl shadow-2xl text-center w-[500px] relative">
                                                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Quét mã QR để thanh toán</h2>
                                                    <img src={Pr_pay} alt="QR Code" className="mx-auto w-64 border-4 border-gray-300 rounded-lg shadow-md" />
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



                                        {/* <div className="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12225" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault12225">
                                                Paypal
                                            </label>
                                            <ul className="brand-logo">
                                                <li>
                                                    <a href="checkout.html">
                                                        <img src={PayPal} alt="img" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="checkout.html">
                                                        <img src={GooglePay} alt="img" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="checkout.html">
                                                        <img src={Mastercard2} alt="img" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}
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

    )
}

export default Checkout