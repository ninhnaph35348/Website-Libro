import { createContext, useEffect, useState } from "react";
import {
  getAllUsers,
  updateUser,
  deleteUser,
  getUserById,
} from "../services/UserCustomer";
import { IUser } from "../interfaces/User";

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
        console.error("Lỗi khi lấy danh sách khách hàng:", error);
      }
    };
    fetchCustomers();
  }, [reload]);

  const onDetail = async (id: number | string) => {
    try {
      return await getUserById(id);
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết khách hàng:", error);
      return null;
    }
  };

  // const onAdd = async (customerUser: IUser) => {
  //   try {
  //     const data = await createUser(customerUser);
  //     setCustomerUsers([...customerUsers, data]);
  //     alert("Thêm tài khoản khách hàng thành công!");
  //     setReload((prev) => !prev);
  //   } catch (error) {
  //     console.error("Lỗi khi thêm khách hàng:", error);
  //   }
  // };

  const onDelete = async (id: number) => {
    try {
      if (!window.confirm("Bạn có chắc chắn muốn xóa?")) return;
      await deleteUser(id);
      setCustomerUsers((prev) => prev.filter((user) => user.id !== id));
      alert("Xóa tài khoản khách hàng thành công!");
    } catch (error) {
      console.error("Lỗi khi xóa khách hàng:", error);
    }
  };

  const onEdit = async (formData: IUser, id: number | string) => {
    try {
      const data = await updateUser(formData, id);
      const newCustomers = customerUsers.map((user) =>
        user.id === id ? data : user
      );
      setCustomerUsers(newCustomers);

      alert("Cập nhật tài khoản khách hàng thành công!");
      setReload((prev) => !prev);
    } catch (error) {
      console.error("Lỗi khi cập nhật khách hàng:", error);
    }
  };

  return (
    <CustomerUserContext.Provider
      value={{ customerUsers, onDelete, onEdit, onDetail }}
    >
      {children}
    </CustomerUserContext.Provider>
  );
};

export default CustomerUserProvider;
