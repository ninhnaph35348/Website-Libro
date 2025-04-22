import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminUserContext } from "../../../context/UserAdmin";
import { IUser } from "../../../interfaces/User";
import { Switch, Tooltip } from "antd";
import { LoaderPinwheel } from "lucide-react";
import { toast } from "react-toastify";

const AdminAccounts = () => {
  const { adminUsers, getAllUsers, onStatus, filterUsersByUsername } =
    useContext(AdminUserContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Gọi API lấy danh sách tài khoản khi component được tải
  useEffect(() => {
    getAllUsers();
  }, []);

  // Xử lý tìm kiếm
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterUsersByUsername(value);
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
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => navigate("add")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Thêm mới tài khoản
        </button>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Tổng: {adminUsers.length} tài khoản
          </span>
          <input
            type="text"
            placeholder="Tìm theo username..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Bảng danh sách tài khoản */}
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">STT</th>
            <th className="border p-2">Tên Đăng Nhập</th>
            <th className="border p-2">Tên Đầy Đủ</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Trạng Thái</th>
          </tr>
        </thead>
        <tbody>
          {adminUsers.length > 0 ? (
            adminUsers.map((admin: IUser, index: number) => (
              <tr key={admin.id ?? index} className="border">
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">
                  <Link
                    to={`detail/${admin.id}`}
                    className="text-blue-400 hover:text-blue-600"
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
    </div>
  );
};

export default AdminAccounts;
