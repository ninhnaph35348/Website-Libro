import { IUser } from "./../interfaces/User";
import instance from "../config/axios";

// 🟢 Lấy danh sách Admin
export const getAllAdmins = async () => {
  try {
    const { data } = await instance.get("users"); // 🔹 Lấy tất cả users
    return data.filter((user: IUser) => user.role === "admin"); // 🔹 Lọc admin ở frontend
  } catch (error: any) {
    console.error(
      "Lỗi khi lấy danh sách admin:",
      error.response?.data || error.message
    );
    throw new Error(
      error.response?.data?.message || "Lỗi khi lấy danh sách admin"
    );
  }
};

// 🟢 Lấy thông tin Admin theo ID
export const getAdminById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`users/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Lỗi khi lấy thông tin admin:",
      error.response?.data || error.message
    );
    throw new Error(
      error.response?.data?.message || "Lỗi khi lấy thông tin admin"
    );
  }
};

// 🟢 Thêm Admin mới
export const createAdmin = async (adminData: any, avatarFile?: File) => {
  try {
    const formData = new FormData();
    formData.append("username", adminData.username);
    formData.append("email", adminData.email);
    formData.append("role", adminData.role);
    formData.append("fullname", adminData.fullname); // 🔥 Thêm fullname vào đây!
    formData.append("password", adminData.password);
    formData.append("status", adminData.status);
    formData.append("address", adminData.address);
    formData.append("phone", adminData.phone);
    formData.append("birth_date", adminData.birth_date);

    if (avatarFile) {
      formData.append("avatar", avatarFile); // 🟢 Thêm avatar vào formData
    }

    const { data } = await instance.post("users", formData, {
      headers: { "Content-Type": "multipart/form-data" }, // 🔹 Gửi dạng multipart
    });

    return data;
  } catch (error: any) {
    console.error("Lỗi khi tạo admin:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Lỗi khi tạo admin");
  }
};

// 🟢 Cập nhật thông tin Admin
export const updateAdmin = async (adminData: IUser, id: number | string) => {
  try {
    console.log("🔍 Dữ liệu trước khi gửi lên API:", id, typeof id);

    if (!id) throw new Error("ID không hợp lệ!");

    const { data } = await instance.put(`users/edit/${id}`, adminData);

    console.log("✅ Phản hồi từ API:", data);
    return data;
  } catch (error: any) {
    console.error(
      "❌ Lỗi khi cập nhật admin:",
      error.response?.data || error.message
    );
    throw new Error(error.response?.data?.message || "Lỗi khi cập nhật admin");
  }
};

// 🟢 Xóa Admin
export const deleteAdmin = async (id: number | string) => {
  try {
    console.log("Xóa admin với ID:", id);
    const { data } = await instance.put(`users/${id}`);
    return data;
  } catch (error: any) {
    console.error("Lỗi khi xóa admin:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Lỗi khi xóa admin");
  }
};
