import { createContext, useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IUser } from "../interfaces/User";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../services/UserCustomer";

type Props = {
  children: React.ReactNode;
};

export const CustomerUserContext = createContext({} as any);

const CustomerUserProvider = ({ children }: Props) => {
  const [customerUsers, setCustomerUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [reload, setReload] = useState(false);
  const filterTimeout = useRef<number | null>(null);

  // Lấy danh sách khách hàng khi mount hoặc reload thay đổi
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setCustomerUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        toast.error("Lỗi khi tải danh sách khách hàng!");
        console.error("Lỗi khi lấy danh sách khách hàng:", error);
      }
    };
    fetchUsers();
  }, [reload]);

  // Lọc danh sách khách hàng theo username với debounce 0.5s
  const filterUsersByUsername = (searchTerm: string) => {
    if (filterTimeout.current) {
      clearTimeout(filterTimeout.current);
    }
    filterTimeout.current = window.setTimeout(() => {
      if (!searchTerm.trim()) {
        setFilteredUsers(customerUsers);
      } else {
        const filtered = customerUsers.filter((user) =>
          user.username.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
      }
    }, 500);
  };

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (filterTimeout.current) {
        clearTimeout(filterTimeout.current);
      }
    };
  }, []);

  const getAllUser = async () => {
    try {
      const data = await getAllUsers();
      setCustomerUsers(data);
      setFilteredUsers(data);
    } catch (error) {
      toast.error("Lỗi khi tải danh sách khách hàng!");
      console.error("Lỗi khi lấy danh sách khách hàng:", error);
    }
  };

  const onDetail = async (id: number | string) => {
    try {
      return await getUserById(id);
    } catch (error) {
      toast.error("Lỗi khi lấy chi tiết khách hàng!");
      console.error("Lỗi khi lấy chi tiết khách hàng:", error);
      return null;
    }
  };

  const onDelete = async (id: number) => {
    try {
      if (!window.confirm("Bạn có chắc chắn muốn xóa?")) return;
      await deleteUser(id);
      setCustomerUsers((prev) => prev.filter((user) => user.id !== id));
      setFilteredUsers((prev) => prev.filter((user) => user.id !== id));
      toast.success("Xóa tài khoản khách hàng thành công!");
    } catch (error) {
      toast.error("Lỗi khi xóa khách hàng!");
      console.error("Lỗi khi xóa khách hàng:", error);
    }
  };

  const onEdit = async (formData: IUser, id: number | string) => {
    try {
      const data = await updateUser(formData, id);
      setCustomerUsers((prev) =>
        prev.map((user) => (user.id === id ? data : user))
      );
      setFilteredUsers((prev) =>
        prev.map((user) => (user.id === id ? data : user))
      );
      toast.success("Cập nhật tài khoản khách hàng thành công!");
      setReload((prev) => !prev);
    } catch (error) {
      toast.error("Lỗi khi cập nhật khách hàng!");
      console.error("Lỗi khi cập nhật khách hàng:", error);
    }
  };

  const onStatus = async (
    id: number | string,
    status: "active" | "inactive"
  ) => {
    try {
      const updatedData = { status };
      const updatedUser = await updateUser(updatedData, id);
      setCustomerUsers((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, status: updatedUser.status } : user
        )
      );
      setFilteredUsers((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, status: updatedUser.status } : user
        )
      );
      toast.success(
        `Đã ${status === "active" ? "kích hoạt" : "khóa"} tài khoản thành công!`
      );
      setReload((prev) => !prev);
    } catch (error) {
      toast.error("Lỗi khi cập nhật trạng thái!");
      console.error("Lỗi khi cập nhật trạng thái:", error);
    }
  };

  return (
    <CustomerUserContext.Provider
      value={{
        customerUsers: filteredUsers,
        getAllUser,
        filterUsersByUsername,
        onDelete,
        onEdit,
        onDetail,
        onStatus,
      }}
    >
      {children}
    </CustomerUserContext.Provider>
  );
};

export default CustomerUserProvider;
