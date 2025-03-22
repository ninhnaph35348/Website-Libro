import { useNavigate } from "react-router-dom";
import { AdminUserContext } from "../../../context/UserAdmin";
import { IUser } from "../../../interfaces/User";
import { useContext } from "react";
import { LoaderPinwheel } from "lucide-react";

const AdminAccounts = () => {
  const { adminUsers, onDelete } = useContext(AdminUserContext); // ✅ Đúng cú pháp
  const navigate = useNavigate();

  if (!adminUsers) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderPinwheel className="animate-spin w-12 h-12 text-gary-500" />
      </div>
    );
  }
  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Quản lý Tài Khoản Admin</h2>
      <button
        onClick={() => navigate("add")} // ✅ Đảm bảo đường dẫn hợp lệ
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Thêm Admin
      </button>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">STT</th>
            <th className="border p-2">Tên Đăng Nhập</th>
            <th className="border p-2">Tên đầy đủ</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {adminUsers.map((admin: IUser, index:number) => (
            <tr key={admin.id ?? index} className="border">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{admin.username}</td>
              <td className="border p-2">{admin.fullname}</td>
              <td className="border p-2">{admin.email}</td>
              <td className="border p-2 flex gap-2 justify-center">
                <button
                  onClick={() => navigate(`detail/${admin.id}`)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Xem chi tiết
                </button>
                <button
                  onClick={() => onDelete(admin.id)} // ✅ Gọi đúng hàm xóa
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Xóa
                </button>
                <button
                  onClick={() => navigate(`edit/${admin.id}`)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Sửa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAccounts;
