import { createContext, useEffect, useState } from "react";
import {
  getAllUsers,
  updateUser,
  deleteUser,
  getUserById,
} from "../services/UserCustomer";
import { IUser } from "../interfaces/User";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
};

export const CustomerUserContext = createContext({} as any);

const CustomerUserProvider = ({ children }: Props) => {
  const [customerUsers, setCustomerUsers] = useState<IUser[]>([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getAllUsers();
        setCustomerUsers(data);
      } catch (error) {
        toast.error("Lỗi khi tải danh sách khách hàng!");
        console.error("Lỗi khi lấy danh sách khách hàng:", error);
      }
    };
    fetchCustomers();
  }, [reload]);

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
      toast.success("Cập nhật tài khoản khách hàng thành công!");
      setReload((prev) => !prev);
    } catch (error) {
      toast.error("Lỗi khi cập nhật khách hàng!");
      console.error("Lỗi khi cập nhật khách hàng:", error);
    }
  };

  return (
    <CustomerUserContext.Provider value={{ customerUsers, onDelete, onEdit, onDetail }}>
      {children}
    </CustomerUserContext.Provider>
  );
};

export default CustomerUserProvider;
