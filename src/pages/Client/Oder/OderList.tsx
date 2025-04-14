import React, { useContext, useEffect, useState } from "react";
import instance from "../../../config/axios"; // Axios cấu hình
import { useNavigate, Link } from "react-router-dom"; // Import Link từ react-router-dom
import dayjs from "dayjs";
import { OrderStatusContext } from "../../../context/OrderStatus"; // Context chứa trạng thái đơn hàng
import { IOrder } from "../../../interfaces/Orders"; // Interface đơn hàng

const OrderList: React.FC = () => {
  const { orderstatus, getAllStatus } = useContext(OrderStatusContext); // Lấy dữ liệu trạng thái từ context
  const [orders, setOrders] = useState<IOrder[]>([]); // Lưu danh sách đơn hàng
  const [loading, setLoading] = useState<boolean>(true); // Trạng thái loading
  const [error, setError] = useState<string | null>(null); // Trạng thái lỗi

  // Lấy danh sách đơn hàng theo người dùng
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await instance.get("/order_detail", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Lấy token từ localStorage
          },
        });

        if (response.data && Array.isArray(response.data.data)) {
          setOrders(response.data.data); // Lưu đơn hàng vào state
        } else {
          setOrders([]); // Nếu không có đơn hàng nào
        }
      } catch (err: any) {
        setError("Không thể tải danh sách đơn hàng");
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
    getAllStatus(); // Lấy trạng thái đơn hàng từ context
  }, []);

  // Hàm lấy tên trạng thái từ order_status_id

  if (loading || orderstatus.length === 0) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>; // Hiển thị thông báo lỗi nếu có
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Danh Sách Đơn Hàng</h1>
      {orders.length === 0 ? (
        <p>Không có đơn hàng nào.</p>
      ) : (
        <div className="overflow-x-auto shadow rounded-lg bg-white">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Mã đơn hàng</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Tổng tiền</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Ngày đặt</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Trạng thái</th>
                {/* <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Hành động</th> */}
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.code_order} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    <Link
                      to={`/order_detail/${order.code_order}`} // Chuyển hướng đến trang chi tiết đơn hàng
                      className="text-blue-600 hover:underline"
                    >
                      {order.code_order}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {order.total_price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
        {order.created_at || "Không rõ"}
      </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {(order.status)} {/* Lấy tên trạng thái từ order_status_id */}
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderList;
