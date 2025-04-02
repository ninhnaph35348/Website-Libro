import PayPal from "../../../assets/img/paypal.png";
import GooglePay from "../../../assets/img/GooglePay.png";
import Mastercard2 from "../../../assets/img/Mastercard2.png"; import { useContext, useEffect, useState } from "react";
import { Select } from "antd";
import { District, getDistricts, getProvinces, getWards, Province, Ward } from "../../../config/provincesApi";
import { CheckoutContext } from "../../../context/Checkout";
import { ICheckout } from "../../../interfaces/Checkout";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const { Option } = Select;


const Checkout: React.FC = () => {
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [wards, setWards] = useState<Ward[]>([]);
    const [selectedProvince, setSelectedProvince] = useState<number | null>(null);
    const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);

    useEffect(() => {
        getProvinces().then(setProvinces);
    }, []);

    const handleProvinceChange = (value: number) => {
        setSelectedProvince(value);
        setSelectedDistrict(null);
        setWards([]);
        getDistricts(value).then(setDistricts);
    };

    const handleDistrictChange = (value: number) => {
        setSelectedDistrict(value);
        getWards(value).then(setWards);
    };

    const context = useContext(CheckoutContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ICheckout>();
    const navigate = useNavigate();

    const onSubmit = async (data: ICheckout) => {        
        if (context) {
            await context.onAdd(data);
            navigate(-1);
            reset();
        }
    };
    return (
        <section className="checkout-section fix section-padding mx-[200px]">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-8">
                        <form onSubmit={handleSubmit(onSubmit)} method="post">
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
                                            <div className="hidden">
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
                                                        {...register("user_address", { required: "Địa chỉ không được để trống" })}
                                                        placeholder="Địa chỉ nhận hàng"
                                                    />
                                                    {errors.user_address && <p className="text-red-500">{errors.user_address.message}</p>}
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
                                            <div className="col-lg-12">
                                                <div className="input-single">
                                                    <span>Ghi chú (tùy chọn)</span>
                                                    <textarea name="notes" id="notes" placeholder="Ghi chú về đơn hàng của bạn, ví dụ ghi chú đặc biệt về việc giao hàng." defaultValue={""} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <div className="checkout-order-area">
                            <h3>Đơn hàng của tôi</h3>
                            <div className="product-checout-area">
                                <div className="checkout-item d-flex align-items-center justify-content-between">
                                    <p>Sản phẩm</p>
                                    <p>Tổng cộng</p>
                                </div>
                                <div className="checkout-item d-flex align-items-center justify-content-between">
                                    <p>Sản phẩm 1</p>
                                    <p>$29.00</p>
                                </div>
                                <div className="checkout-item d-flex justify-content-between">
                                    <p>Vận chuyển</p>
                                    <div className="shopping-items">
                                        <div className="form-check d-flex align-items-center from-customradio">
                                            <label className="form-check-label">
                                                Miễn phí vận chuyển
                                            </label>
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12" />
                                        </div>
                                        <div className="form-check d-flex align-items-center from-customradio">
                                            <label className="form-check-label">
                                                Địa phương: $15.00
                                            </label>
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault123" />
                                        </div>
                                        <div className="form-check d-flex align-items-center from-customradio">
                                            <label className="form-check-label">
                                                Giá cố định: $10.00
                                            </label>
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault124" />
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-item d-flex align-items-center justify-content-between">
                                    <p>Tổng cộng</p>
                                    <p>$55.00</p>
                                </div>
                                <div className="checkout-item-2">
                                    <div className="form-check-2 d-flex align-items-center from-customradio-2">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1222" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1222">
                                            Chuyển khoản ngân hàng trực tiếp
                                        </label>
                                    </div>
                                    <p>
                                        Thanh toán trực tiếp vào tài khoản ngân hàng của chúng tôi, vui lòng sử dụng Mã đơn hàng của bạn làm tham chiếu thanh toán. Đơn hàng của bạn sẽ không được giao cho đến khi tiền được chuyển vào tài khoản của chúng tôi.
                                    </p>
                                    <div className="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12224" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault12224">
                                            Thanh toán khi nhận hàng
                                        </label>
                                    </div>
                                    <div className="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
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
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="theme-btn">Thanh toán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Checkout