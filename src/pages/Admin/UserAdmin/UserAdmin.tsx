import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminUserContext } from "../../../context/UserAdmin";
import { IUser } from "../../../interfaces/User";
import { Switch, Tooltip } from "antd";
import { LoaderPinwheel } from "lucide-react";
import { toast } from "react-toastify";

// Component quản lý danh sách tài khoản admin
const AdminAccounts = () => {
  // Lấy dữ liệu và hàm từ AdminUserContext
  const { adminUsers, getAllUsers, onStatus, filterUsersByUsername } =
    useContext(AdminUserContext);
  const navigate = useNavigate();

  // Gọi API lấy danh sách tài khoản khi component được tải
  useEffect(() => {
    getAllUsers();
  }, []);

  // Quản lý trạng thái tìm kiếm và phân trang
  const [searchTerm, setSearchTerm] = useState(""); // Từ khóa tìm kiếm
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const itemsPerPage = 10; // Số tài khoản mỗi trang

  // Tính tổng số trang dựa trên số lượng tài khoản
  const totalPages = Math.ceil((adminUsers?.length || 0) / itemsPerPage);

  // Lấy danh sách tài khoản cho trang hiện tại
  const paginatedUsers =
    adminUsers?.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    ) || [];

  // Xử lý chuyển đổi trang
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Xử lý tìm kiếm theo tên đăng nhập
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterUsersByUsername(value);
    setCurrentPage(1); // Đặt lại về trang đầu tiên khi tìm kiếm
  };

  // Xử lý bật/tắt trạng thái tài khoản
  const handleStatusChange = async (id: number | string, checked: boolean) => {
    const admin = adminUsers.find((user: IUser) => user.id === id);
    if (!admin || !["admin", "s.admin"].includes(admin.role)) {
      toast.error("Không thể thay đổi trạng thái cho tài khoản này!");
      return;
    }
    const newStatus = checked ? "active" : "inactive";
    try {
      await onStatus(id, newStatus);
      // Không gọi toast.success ở đây để tránh lặp thông báo
    } catch (error) {
      toast.error("Có lỗi xảy ra khi thay đổi trạng thái!");
      console.error("Lỗi khi thay đổi trạng thái:", error);
    }
  };

  // Hiển thị vòng quay tải khi dữ liệu chưa sẵn sàng
  if (!adminUsers) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderPinwheel className="animate-spin w-12 h-12 text-gray-500" />
      </div>
    );
  }

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      {/* Tiêu đề trang */}
      <h2 className="text-xl font-bold mb-4">Quản lý Tài Khoản Admin</h2>

      {/* Nút thêm tài khoản và ô tìm kiếm */}
      <div className="mb-4 flex justify-between items-center w-full">
        <button
          onClick={() => navigate("add")}
          className="bg-green-500 text-white px-4 py-2 rounded w-1/3"
        >
          Thêm Admin
        </button>
        <input
          type="text"
          placeholder="Tìm kiếm tài khoản..."
          value={searchTerm}
          onChange={handleSearch}
          className="border px-4 py-2 w-1/3 rounded"
        />
      </div>

      {/* Bảng danh sách tài khoản */}
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="border p-2">STT</th>
            <th className="border p-2">Tên Đăng Nhập</th>
            <th className="border p-2">Tên Đầy Đủ</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Trạng Thái</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.length > 0 ? (
            paginatedUsers.map((admin: IUser, index: number) => (
              <tr key={admin.id ?? index} className="border">
                <td className="border p-2 text-center">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="border p-2">
                  <Link
                    className="text-blue-400 hover:text-blue-600"
                    to={`detail/${admin.id}`}
                  >
                    {admin.username}
                  </Link>
                </td>
                <td className="border p-2">{admin.fullname}</td>
                <td className="border p-2">{admin.email}</td>
                <td className="border p-2 text-center">
                  <Tooltip
                    title={
                      admin.status === "active"
                        ? "Đang hoạt động"
                        : admin.status === "inactive"
                        ? "Đã khóa"
                        : "Không xác định"
                    }
                  >
                    <Switch
                      checked={admin.status === "active"}
                      onChange={(checked) =>
                        handleStatusChange(admin.id, checked)
                      }
                      disabled={admin.status === undefined}
                    />
                  </Tooltip>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center p-4 text-gray-500">
                Không có tài khoản nào phù hợp!
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Điều hướng phân trang */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
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

export default AdminAccounts;
