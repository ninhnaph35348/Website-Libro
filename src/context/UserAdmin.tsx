import { createContext, useEffect, useState } from "react";
import {
  getAllAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  getAdminById,
} from "../services/UserAdmin";
import { IUser } from "../interfaces/User";
import { set } from "react-hook-form";

type Props = {
  children: React.ReactNode;
};

export const AdminUserContext = createContext({} as any);

const AdminUserProvider = ({ children }: Props) => {
  const [adminUsers, setAdminUsers] = useState<IUser[]>([]);
  const [reload, setReload] = useState(false); // 👈 Thêm state reload
  // Fetch danh sách admin khi component mount
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const data = await getAllAdmins();
        setAdminUsers(data);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách admin:", error);
      }
    };
    fetchAdmins();
  }, [reload]);

  // Lấy thông tin chi tiết của một admin
  const onDetail = async (id: number | string) => {
    try {
      return await getAdminById(id);
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết admin:", error);
      return null;
    }
  };

  // Thêm admin mới

  const onAdd = async (adminUser: IUser) => {
    try {
      const data = await createAdmin(adminUser);
      setAdminUsers([...adminUsers, data]);
      alert("Thêm tài khoản admin thành công!");
      setReload((prev) => !prev);
    } catch (error) {
      console.error("Lỗi khi thêm admin:", error);
    }
  };

  // Xóa admin
  const onDelete = async (id: number) => {
    try {
      if (!window.confirm("Bạn có chắc chắn muốn xóa?")) return;
      await deleteAdmin(id);
      setAdminUsers((prev) => prev.filter((user) => user.id !== id)); // ✅ Cập nhật danh sách ngay
      alert("Xóa tài khoản admin thành công!");
    } catch (error) {
      console.error("Lỗi khi xóa admin:", error);
    }
  };

  // Cập nhật admin
  const onEdit = async (formData: IUser, id: number | string) => {
    try {
      const data = await updateAdmin(formData, id);
      const newAdmins = adminUsers.map((user) =>
        user.id === id ? data : user
      );
      setAdminUsers(newAdmins);

      alert("Cập nhật tài khoản admin thành công!");
      setReload((prev) => !prev); // 👈 Set lại state reload
    } catch (error) {
      console.error("Lỗi khi cập nhật admin:", error);
    }
  };

  return (
    <AdminUserContext.Provider
      value={{ adminUsers, onAdd, onDelete, onEdit, onDetail }}
    >
      {children}
    </AdminUserContext.Provider>
  );
};

export default AdminUserProvider;
