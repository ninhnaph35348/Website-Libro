import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../../../config/axios";
import { IOrder } from "../../../interfaces/Orders";

const OrderDetail: React.FC = () => {
  const { orderCode } = useParams<{ orderCode: string }>();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await instance.get(`/order_detail/${orderCode}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        // Kiểm tra dữ liệu nhận được từ API
        console.log("Dữ liệu nhận được từ API:", response.data);

        if (response.data && response.data.data) {
          setOrder(response.data.data);
        } else {
          setError("Không tìm thấy đơn hàng.");
        }
      } catch (err: any) {
        setError("Không thể tải chi tiết đơn hàng.");
      } finally {
        setLoading(false);
      }
    };

    if (orderCode) {
      fetchOrderDetails();
    } else {
      setError("Mã đơn hàng không hợp lệ.");
    }
  }, [orderCode]);

  const handleCancelOrder = async () => {
    try {
      const response = await instance.post(`/cancel_order/${orderCode}`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.data.success) {
        setOrder((prevOrder: IOrder | null) => (prevOrder ? {
          ...prevOrder,
          status: 'Đã hủy'
        } : null));
        setError(null);
        alert("Đơn hàng đã được hủy.");
      } else {
        setError("Không thể hủy đơn hàng.");
      }
    } catch (err) {
      setError("Có lỗi xảy ra khi hủy đơn hàng.");
    }
  };

  if (loading) return <div className="text-center py-10 text-blue-600">Đang tải dữ liệu...</div>;
  if (error) return <div className="text-center text-red-600 font-semibold">{error}</div>;
  if (!order) return <div className="text-center text-gray-600">Không tìm thấy đơn hàng.</div>;

  // Kiểm tra và ép kiểu các giá trị tổng tiền và voucher
  const totalPrice = parseFloat(order.total_price) || 0; // Sử dụng parseFloat để đảm bảo giá trị là số hợp lệ
  const voucherDiscount = parseFloat(order.voucher) || 0; // Nếu không có voucher thì mặc định là 0
  const totalWithVoucher = totalPrice - voucherDiscount;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Chi Tiết Đơn Hàng</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Thông Tin Đơn Hàng</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <p><strong>Mã đơn hàng:</strong> {order.code_order}</p>
          <p><strong>Người nhận:</strong> {order.user_name}</p>
          <p><strong>Email:</strong> {order.user_email}</p>
          <p><strong>SĐT:</strong> {order.user_phone}</p>
          <p><strong>Địa chỉ:</strong> {order.user_address}</p>
          <p><strong>Trạng thái:</strong> {order.status}</p>
          <p><strong>Thanh toán:</strong> {order.payment_method}</p>
          <p><strong>Tổng tiền:</strong> {totalWithVoucher.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
          
          {/* Hiển thị voucher */}
          {voucherDiscount > 0 && (
            <p><strong>Giảm giá từ Voucher:</strong> {voucherDiscount.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
          )}
        </div>

        {/* Thêm nút Hủy đơn hàng nếu trạng thái là "Chưa giao" */}
        {order.status === 'Chưa giao' && (
          <button
            onClick={handleCancelOrder}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Hủy Đơn Hàng
          </button>
        )}
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">Sản Phẩm Trong Đơn Hàng</h2>
      <div className="space-y-4">
        {order.order_details.map((item: any) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-4">
            <img
              src={`http://localhost:8000/storage/${item.image}`}
              alt={item.title}
              className="w-full md:w-32 h-32 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-700"><strong>Mã SP:</strong> {item.code}</p>
              <p className="text-gray-700"><strong>Giá:</strong> {Number(item.price_product).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
              <p className="text-gray-700"><strong>Số lượng:</strong> {item.quantity}</p>
              <p className="text-gray-700">
                <strong>Tổng tiền:</strong>{" "}
                {Number(item.total_line || (item.price_product * item.quantity)).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};






export default OrderDetail;
