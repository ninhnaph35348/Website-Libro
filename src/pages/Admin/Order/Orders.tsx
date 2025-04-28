import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../../context/Order";
import { OrderStatusContext } from "../../../context/OrderStatus";
import { Link } from "react-router-dom";
import { IOrder } from "../../../interfaces/Orders";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orders = () => {
  const { orders, getAllOrders, filterOrdersByCode, onEdit } =
    useContext(OrderContext);
  const { orderstatus, getAllStatus } = useContext(OrderStatusContext);

  // State cho lọc trạng thái, tìm kiếm và phân trang
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getAllStatus();
    getAllOrders();
  }, []);

  // Lọc đơn hàng theo trạng thái
  const filteredOrdersByStatus =
    filterStatus === "all"
      ? orders
      : orders.filter((o) => o.status === filterStatus);

  // Tính tổng số trang
  const totalPages = Math.ceil(filteredOrdersByStatus.length / itemsPerPage);

  // Lấy đơn hàng của trang hiện tại
  const paginatedOrders = filteredOrdersByStatus.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleStatusChange = async (
    orderId: number | string,
    newStatus: string
  ) => {
    try {
      await onEdit({ order_status_id: newStatus }, orderId);
      await getAllOrders();
    } catch (error) {
      toast.error("Cập nhật thất bại! Vui lòng thử lại.");
      console.error(error);
      alert("Cập nhật thất bại! Vui lòng thử lại.");
      console.error("Lỗi khi cập nhật trạng thái:", error);
    }
  };

  // Xử lý reset tìm kiếm
  const handleResetSearch = () => {
    setSearchTerm("");
    filterOrdersByCode("");
    setCurrentPage(1);
  };

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      {/* Header, bộ lọc và tìm kiếm */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
        <h2 className="text-xl font-bold">Danh Sách Đơn Hàng</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center relative">
            <label className="font-medium mr-2">Tìm kiếm mã đơn:</label>
            <input
              type="text"
              className="border p-2 rounded w-full sm:w-64 focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập mã đơn hàng..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                filterOrdersByCode(e.target.value);
                setCurrentPage(1);
              }}
            />
            {searchTerm && (
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={handleResetSearch}
              >
                ✕
              </button>
            )}
          </div>
          <div className="flex items-center">
            <label className="font-medium mr-2">Lọc trạng thái:</label>
            <select
              className="border p-2 rounded focus:ring-2 focus:ring-blue-500"
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="all">Tất cả</option>
              {orderstatus.map((st: any) => (
                <option key={st.id} value={st.name}>
                  {st.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="border p-2">STT</th>
            <th className="border p-2">Mã Đơn Hàng</th>
            <th className="border p-2">Khách Hàng</th>
            <th className="border p-2">Giá Trị</th>
            <th className="border p-2">Thời gian</th>
            <th className="border p-2">Trạng Thái</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.length > 0 ? (
            paginatedOrders.map((order: IOrder, idx: number) => (
              <tr key={order.id ?? idx}>
                <td className="border p-2 text-center">
                  {(currentPage - 1) * itemsPerPage + idx + 1}
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
                <td className="border p-2">{order.created_at}</td>
                <td className="border p-2 text-center">
                  <select
                    className="border p-1 rounded focus:ring-2 focus:ring-blue-500"
                    value={
                      orderstatus.find((s: any) => s.name === order.status)
                        ?.id || ""
                    }
                    onChange={(e) =>
                      handleStatusChange(
                        order.code_order as any,
                        e.target.value
                      )
                    }
                  >
                    {orderstatus
                      .filter(
                        (s: any) =>
                          s.id >=
                          (orderstatus.find(
                            (s2: any) => s2.name === order.status
                          )?.id || 0)
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
              <td colSpan={6} className="text-center p-4 text-gray-500">
                Không có đơn hàng phù hợp
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full border shadow-md transition-all duration-300 ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:scale-105"
            }`}
          >
            ◀ Trước
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-full border shadow-md transition-all duration-300 font-semibold ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white scale-110 shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full border shadow-md transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:scale-105"
            }`}
          >
            Tiếp ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default Orders;
