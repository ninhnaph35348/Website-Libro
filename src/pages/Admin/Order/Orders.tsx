import { useContext, useState } from "react";
import { OrderContext } from "../../../context/Order";
import { OrderStatusContext } from "../../../context/OrderStatus";
import { Link } from "react-router-dom";
import { IOrder } from "../../../interfaces/Orders";

const Orders = () => {
  const { orders, onEdit } = useContext(OrderContext);
  const { orderstatus } = useContext(OrderStatusContext);

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Tính tổng số trang
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  // Lấy danh sách đơn hàng theo trang hiện tại
  const paginatedOrders = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Xử lý chuyển trang
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (!orders || !Array.isArray(orders)) {
    return (
      <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
        Đang tải đơn hàng...
      </div>
    );
  }

  const handleStatusChange = async (orderId: number, newStatus: string) => {
    try {
      await onEdit({ order_status_id: newStatus }, orderId);
    } catch (error) {
      alert("Cập nhật thất bại! Vui lòng thử lại.");
      console.error(error);
    }
  };

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Danh Sách Đơn Hàng</h2>
      <table className="w-full border-collapse border border-gray-200 mt-4">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="border p-2">STT</th>
            <th className="border p-2">Mã Đơn Hàng</th>
            <th className="border p-2">Khách Hàng</th>
            <th className="border p-2">Giá Trị</th>
            <th className="border p-2">Trạng Thái</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.length > 0 ? (
            paginatedOrders.map((order: IOrder, index: number) => (
              <tr key={order.id ?? index}>
                <td className="border p-2 text-center">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="border p-2">
                  <Link
                    className="text-blue-400 hover:text-blue-600"
                    to={`${order.code_order}`}
                  >
                    {order.code_order}
                  </Link>
                </td>
                <td className="border p-2">{order.user_name || "Khách lẻ"}</td>
                <td className="border p-2">
                  {Number(order.total_price).toLocaleString()} VND
                </td>
                <td className="border p-2 text-center">
                  <select
                    className="border p-1 rounded"
                    value={
                      orderstatus.find(
                        (status: any) => status.name === order.status
                      )?.id || ""
                    }
                    onChange={(e) =>
                      handleStatusChange(
                        order.code_order,
                        Number(e.target.value) as any
                      )
                    }
                  >
                    {orderstatus
                      .filter(
                        (status: any) =>
                          status.id >=
                          (orderstatus.find((s: any) => s.name === order.status)
                            ?.id || 0)
                      )
                      .map((status: any) => (
                        <option key={status.id} value={status.id}>
                          {status.name}
                        </option>
                      ))}
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center p-4 text-gray-500">
                Không có đơn hàng nào
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Điều hướng phân trang */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {/* Nút Trước */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-4 py-2 rounded-full border shadow-md transition-all duration-300 
                                    ${
                                      currentPage === 1
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:scale-105"
                                    }`}
            disabled={currentPage === 1}
          >
            ◀ Trước
          </button>

          {/* Các số trang */}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-full border shadow-md transition-all duration-300 font-semibold
                                        ${
                                          currentPage === index + 1
                                            ? "bg-blue-500 text-white scale-110 shadow-lg"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105"
                                        }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Nút Tiếp */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-4 py-2 rounded-full border shadow-md transition-all duration-300 
                                    ${
                                      currentPage === totalPages
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:scale-105"
                                    }`}
            disabled={currentPage === totalPages}
          >
            Tiếp ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default Orders;
