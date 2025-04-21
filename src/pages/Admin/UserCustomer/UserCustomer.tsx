import { useNavigate, Link } from "react-router-dom";
import { CustomerUserContext } from "../../../context/UserCustomer";
import { IUser } from "../../../interfaces/User";
import { useContext, useEffect, useState } from "react";
import { LoaderPinwheel } from "lucide-react";
import { Switch, Tooltip } from "antd";
import { toast } from "react-toastify";

const CustomerAccounts = () => {
  const { customerUsers, getAllUser, onStatus, filterUsersByUsername } =
    useContext(CustomerUserContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllUser();
  }, []);

  const handleStatusChange = async (id: number | string, checked: boolean) => {
    const user = customerUsers.find((user: IUser) => user.id === id);
    if (!user || user.role !== "client") {
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterUsersByUsername(value);
  };

  if (!customerUsers) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderPinwheel className="animate-spin w-12 h-12 text-gray-500" />
      </div>
    );
  }

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Quản lý Tài Khoản Customer</h2>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Tổng: {customerUsers.length} tài khoản
          </span>
          <input
            type="text"
            placeholder="Tìm theo username..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

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
          {customerUsers.length > 0 ? (
            customerUsers.map((customer: IUser, index: number) => (
              <tr key={customer.id ?? index} className="border">
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">
                  <Link
                    to={`detail/${customer.id}`}
                    className="text-blue-400 hover:text-blue-600"
                  >
                    {customer.username}
                  </Link>
                </td>
                <td className="border p-2">{customer.fullname}</td>
                <td className="border p-2">{customer.email}</td>
                <td className="border p-2 text-center">
                  <Tooltip
                    title={
                      customer.status === "active"
                        ? "Đang hoạt động"
                        : customer.status === "inactive"
                        ? "Đã khóa"
                        : "Không xác định"
                    }
                  >
                    <Switch
                      checked={customer.status === "active"}
                      onChange={(checked) =>
                        handleStatusChange(customer.id, checked)
                      }
                      disabled={customer.status === undefined}
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

export default CustomerAccounts;
