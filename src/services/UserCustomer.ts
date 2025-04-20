import { IUser } from "../interfaces/User";
import instance from "../config/axios";

export const getAllUsers = async () => {
  try {
    const { data } = await instance.get("users");
    return data.filter((user: IUser) => user.role === "client");
  } catch (error: any) {
    console.error(
      "Lỗi khi lấy danh sách user:",
      error.response?.data || error.message
    );
    throw new Error(
      error.response?.data?.message || "Lỗi khi lấy danh sách user"
    );
  }
};

export const getUserById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`users/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Lỗi khi lấy thông tin user:",
      error.response?.data || error.message
    );
    throw new Error(
      error.response?.data?.message || "Lỗi khi lấy thông tin user"
    );
  }
};

export const updateUser = async (
  userData: Partial<IUser>,
  id: number | string
) => {
  try {
    console.log("🔍 Dữ liệu trước khi gửi lên API:", id, typeof id);
    if (!id) throw new Error("ID không hợp lệ!");
    const { data } = await instance.put(`users/edit/${id}`, userData);
    console.log("📤 Dữ liệu sau khi cập nhật:", data);
    return data;
  } catch (error: any) {
    console.error(
      "❌ Lỗi khi cập nhật user:",
      error.response?.data || error.message
    );
    throw new Error(error.response?.data?.message || "Lỗi khi cập nhật user");
  }
};

export const deleteUser = async (id: number | string) => {
  try {
    console.log("Xóa user với ID:", id);
    const { data } = await instance.put(`users/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "❌ Lỗi khi xóa user:",
      error.response?.data || error.message
    );
    throw new Error(error.response?.data?.message || "Lỗi khi xóa user");
  }
};
