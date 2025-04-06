import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../../../config/axios"; // Axios cấu hình

const OrderDetail: React.FC = () => {
  const { orderCode } = useParams<{ orderCode: string }>(); // Lấy mã đơn hàng từ URL
  const [order, setOrder] = useState<any>(null); // Lưu thông tin đơn hàng
  const [loading, setLoading] = useState<boolean>(true); // Trạng thái loading
  const [error, setError] = useState<string | null>(null); // Trạng thái lỗi

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        console.log("Fetching order details for order code:", orderCode); // Debugging
        const response = await instance.get(`/order_detail/${orderCode}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Lấy token từ localStorage
          },
        });

        console.log("Response data:", response.data); // Debugging
        
        if (response.data) {
          setOrder(response.data); // Lưu đơn hàng vào state
        } else {
          setError("Không tìm thấy đơn hàng.");
        }
      } catch (err: any) {
        console.error("Error fetching order details:", err); // Debugging
        setError("Không thể tải chi tiết đơn hàng");
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

  console.log("Loading status:", loading); // Debugging
  console.log("Order data:", order); // Debugging

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>; // Hiển thị thông báo lỗi nếu có
  }

  if (!order) {
    return <div>Không tìm thấy đơn hàng.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Chi Tiết Đơn Hàng</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Thông Tin Đơn Hàng</h2>
        <p><strong>Mã đơn hàng:</strong> {order.code_order}</p>
        <p><strong>Người nhận:</strong> {order.user_name}</p>
        <p><strong>Email:</strong> {order.user_email}</p>
        <p><strong>Số điện thoại:</strong> {order.user_phone}</p>
        <p><strong>Địa chỉ:</strong> {order.user_address}</p>
        <p><strong>Trạng thái:</strong> {order.status}</p>
        <p><strong>Phương thức thanh toán:</strong> {order.payment_method}</p>
        <p><strong>Tổng tiền:</strong> {Number(order.total_price).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-4">Sản Phẩm Trong Đơn Hàng</h2>
      {order.order_details.map((item: any) => (
        <div key={item.id} className="bg-white p-4 mb-4 rounded-lg shadow-sm">
          <div className="flex items-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-cover rounded-lg mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p><strong>Mã sản phẩm:</strong> {item.code}</p>
              <p><strong>Giá:</strong> {Number(item.price_product).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
              <p><strong>Số lượng:</strong> {item.quantity}</p>
              <p><strong>Tổng tiền:</strong> {Number(item.total_line).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderDetail;
