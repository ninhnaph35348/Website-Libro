import { Button, Result } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import instance from "../../../config/axios";
import { useCart } from "../../../context/Cart";

const responseMessages: Record<string, string> = {
  "00": "Giao dịch thành công.",
  "07": "Trừ tiền thành công nhưng giao dịch bị nghi ngờ (liên quan tới lừa đảo, giao dịch bất thường).",
  "09": "Thẻ/Tài khoản của khách hàng chưa đăng ký dịch vụ InternetBanking.",
  "10": "Xác thực thông tin thẻ/tài khoản không đúng quá 3 lần.",
  "11": "Hết hạn chờ thanh toán. Vui lòng thực hiện lại giao dịch.",
  "12": "Thẻ/Tài khoản bị khóa.",
  "13": "Nhập sai mật khẩu xác thực giao dịch (OTP).",
  "24": "Khách hàng đã hủy giao dịch.",
  "51": "Tài khoản không đủ số dư.",
  "65": "Vượt quá hạn mức giao dịch trong ngày.",
  "75": "Ngân hàng thanh toán đang bảo trì.",
  "79": "Nhập sai mật khẩu thanh toán quá số lần quy định.",
  "99": "Lỗi không xác định. Vui lòng thử lại.",
};

const VnpayReturn = () => {
  const [searchParams] = useSearchParams();
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [orderCode, setOrderCode] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // ✨ Sử dụng CartContext để thao tác giỏ hàng
  const { clearCart } = useCart();

  useEffect(() => {
    (async () => {
      try {
        const response = await instance.get(
          `vnpay-return?${searchParams.toString()}`
        );
        console.log("VNPay Return Data:", response.data);

        const responseCode = searchParams.get("vnp_ResponseCode") || "99";
        const orderCodeFromURL = searchParams.get("vnp_OrderInfo") || "";

        setOrderCode(orderCodeFromURL);
        setIsSuccess(responseCode === "00");
        setMessage(
          responseMessages[responseCode] ||
            "Lỗi không xác định. Vui lòng thử lại."
        );

        // ✨ Nếu thanh toán thành công, xóa giỏ hàng
        if (responseCode === "00") {
          clearCart();
        }
      } catch (error) {
        console.error("Lỗi xác nhận thanh toán:", error);
        setIsSuccess(false);
        setMessage("Đã xảy ra lỗi trong quá trình xác thực thanh toán.");
      }
    })();
  }, []); // Chạy hiệu ứng khi component render lần đầu

  if (isSuccess === null) return null;

  return (
    <Result
      status={isSuccess ? "success" : "error"}
      title={isSuccess ? "Thanh toán thành công!" : "Thanh toán thất bại!"}
      subTitle={`Mã đơn hàng: ${orderCode}. ${message}`}
      extra={[
        <Button type="primary" href="/" key="home">
          Về trang chủ
        </Button>,
        <Button href="/shop" key="buy">
          {isSuccess ? "Mua thêm" : "Thử lại"}
        </Button>,
      ]}
    />
  );
};

export default VnpayReturn;
