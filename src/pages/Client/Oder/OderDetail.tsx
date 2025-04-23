import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../../../config/axios";
import { IOrder } from "../../../interfaces/Orders";

const OrderDetail: React.FC = () => {
  const { orderCode } = useParams<{ orderCode: string }>();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cancelReason, setCancelReason] = useState<string>("");
  const [totalProductPrice, setTotalProductPrice] = useState<number>(0);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await instance.get(`/order_detail/${orderCode}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("response", response.data);

        if (response.data && response.data.order) {
          setOrder(response.data.order);
          setTotalProductPrice(response.data.total_product_price || 0);
        } else {
          setError("Không tìm thấy đơn hàng.");
        }
      } catch (err) {
        setError("Lỗi khi tải đơn hàng.");
      } finally {
        setLoading(false);
      }
    };

    if (orderCode) {
      fetchOrderDetails();
    } else {
      setError("Mã đơn hàng không hợp lệ.");
      setLoading(false);
    }
  }, [orderCode]);

  const handleCancelOrder = async () => {
    if (!cancelReason.trim()) {
      alert("Vui lòng nhập lý do hủy đơn hàng.");
      return;
    }

    try {
      const response = await instance.post(
        `/cancel_order/${orderCode}`,
        { reason: cancelReason },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        setOrder((prevOrder: IOrder | null) =>
          prevOrder ? { ...prevOrder, status: "Đã hủy" } : null
        );
        setError(null);
        alert("Đơn hàng đã được hủy.");
      } else {
        setError("Không thể hủy đơn hàng.");
      }
    } catch (err) {
      setError("Có lỗi xảy ra khi hủy đơn hàng.");
    }
  };

  const voucherDiscount = isNaN(Number(order?.voucher_discount))
    ? 0
    : Number(order.voucher_discount);

  const shippingFee = isNaN(Number(order?.shipping_fee))
    ? 30000
    : Number(order.shipping_fee);
  const totalPrice = Number(order?.total_price);

  if (loading)
    return (
      <div className="text-center py-10 text-blue-600">Đang tải dữ liệu...</div>
    );
  if (error)
    return (
      <div className="text-center text-red-600 font-semibold">{error}</div>
    );
  if (!order)
    return (
      <div className="text-center text-gray-600">Không tìm thấy đơn hàng.</div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Chi Tiết Đơn Hàng
      </h1>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Thông tin đơn hàng
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <p>
            <strong>Mã đơn hàng:</strong> {order.code_order}
          </p>
          <p>
            <strong>Ngày đặt:</strong> {order.created_at}
          </p>
          <p>
            <strong>Người đặt:</strong> {order.user_name}
          </p>
          <p>
            <strong>Email:</strong> {order.user_email}
          </p>
          <p>
            <strong>SĐT:</strong> {order.user_phone}
          </p>
          <p>
            <strong>Địa chỉ:</strong> {order.user_address}
          </p>
          <p>
            <strong>Người nhận:</strong>{" "}
            {order.shipping_name || "Chưa có thông tin"}
          </p>
          <p>
            <strong>SĐT người nhận:</strong>{" "}
            {order.shipping_phone || "Chưa có thông tin"}
          </p>
          <p>
            <strong>Địa chỉ người nhận:</strong>{" "}
            {order.shipping_address || "Chưa có thông tin"}
          </p>
          <p>
            <strong>Trạng thái:</strong>{" "}
            <span className="font-semibold">{order.status}</span>
          </p>
          <p>
            <strong>Thanh toán:</strong> {order.payment_method}
          </p>

          <div className="mt-8 col-span-2">
            <h3 className="text-xl font-semibold mb-4">Tổng kết đơn hàng</h3>
            <div className="grid grid-cols-2 gap-y-2 max-w-xl text-sm text-gray-800">
              <span className="font-semibold">Tổng tiền sản phẩm:</span>
              <span className="text-right">
                {totalProductPrice.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>

              <span className="font-semibold">Voucher giảm giá:</span>
              <span className="text-right">{order?.voucher || "Không có"}</span>

              <span className="font-semibold">Tiền được giảm:</span>
              <span className="text-right text-red-700">
                -{" "}
                {order.voucher_discount_type === "percent"
                  ? `${voucherDiscount}%`
                  : voucherDiscount.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
              </span>
              <span className="font-semibold">Phí vận chuyển:</span>
              <span className="text-right">
                +{" "}
                {shippingFee.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>

              <span className="font-semibold text-green-700 border-t pt-2">
                Thành tiền:
              </span>
              <span className="text-right font-semibold text-green-700 border-t pt-2">
                {totalPrice.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </div>
          </div>
        </div>

        {order.status === "Chờ xác nhận" && (
          <div className="mt-4">
            <label className="block mb-2 text-gray-700 font-medium">
              Lý do hủy đơn hàng:
            </label>
            <textarea
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              rows={3}
              placeholder="Nhập lý do bạn muốn hủy đơn hàng..."
            ></textarea>
            <button
              onClick={handleCancelOrder}
              className="mt-3 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Hủy Đơn Hàng
            </button>
          </div>
        )}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
        Sản phẩm trong đơn hàng
      </h2>
      <div className="space-y-4">
        {order.order_details.map((item: any) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-4"
          >
            <img
              src={`http://localhost:8000/storage/${item.image}`}
              alt={item.title}
              className="w-full md:w-32 h-32 object-cover rounded-md"
              loading="lazy"
            />
            <div className="flex-1 text-gray-700">
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p>
                <strong>Mã SP:</strong> {item.code}
              </p>
              <p>
                <strong>Loại bìa:</strong> {item.cover}
              </p>
              <p>
                <strong>Giá:</strong>{" "}
                {Number(item.price_product).toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <p>
                <strong>Số lượng:</strong> {item.quantity}
              </p>
              <p>
                <strong>Tổng tiền:</strong>{" "}
                {Number(
                  item.total_line || item.price_product * item.quantity
                ).toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetail;
