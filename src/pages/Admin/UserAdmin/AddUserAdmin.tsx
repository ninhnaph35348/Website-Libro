import { useState } from "react";
import { createAdmin } from "../../../services/UserAdmin";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddAdmin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    address: "",
    phone: "",
    birth_date: "",
    role: "admin",
    status: "active",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullname)
      newErrors.fullname = "Họ và tên không được để trống";
    if (!formData.username)
      newErrors.username = "Tên đăng nhập không được để trống";
    if (!formData.email) newErrors.email = "Email không được để trống";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await createAdmin(formData, avatarFile ?? undefined);
      setFormData({
        fullname: "",
        username: "",
        email: "",
        address: "",
        phone: "",
        birth_date: "",
        role: "admin",
        status: "active",
      });
      setAvatarFile(null);
      toast.success("Thêm admin thành công!");
      navigate("..", { state: { refresh: true } });
    } catch (error) {
      console.error(error);
      toast.error("Lỗi khi thêm admin!");
    }
  };

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg max-w-md">
      <h2 className="text-xl font-bold mb-4">Thêm Admin</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Họ và tên */}
        <div>
          <label className="block font-medium">Họ và tên:</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Nhập họ và tên"
          />
          {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
        </div>

        {/* Tên đăng nhập */}
        <div>
          <label className="block font-medium">Tên đăng nhập:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Nhập tên đăng nhập"
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Nhập email"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        {/* Địa chỉ (Không bắt buộc) */}
        <div>
          <label className="block font-medium">Địa chỉ:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Nhập địa chỉ"
          />
        </div>

        {/* Số điện thoại */}
        <div>
          <label className="block font-medium">Số điện thoại:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Nhập số điện thoại"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>

        {/* Ngày sinh */}
        <div>
          <label className="block font-medium">Ngày sinh:</label>
          <input
            type="date"
            name="birth_date"
            value={formData.birth_date}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.birth_date && (
            <p className="text-red-500">{errors.birth_date}</p>
          )}
        </div>

        {/* Trạng thái */}
        <div>
          <label className="block font-medium">Trạng thái:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="active">Hoạt động</option>
            <option value="inactive">Không hoạt động</option>
          </select>
        </div>

        {/* Ảnh đại diện */}
        <div>
          <label className="block font-medium">Ảnh đại diện:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="w-full border p-2 rounded"
            placeholder="Chọn ảnh đại diện"
          />
          {preview && (
            <img
              src={preview}
              alt="Xem trước avatar"
              className="mt-2 w-24 h-24 object-cover rounded-full"
            />
          )}
        </div>
        {/* <div className="flex gap-2 "> */}
        {/* Nút thêm */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 text-sm rounded w-full "
        >
          Thêm Admin
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 text-white px-4 py-2 text-sm rounded-lg shadow-md hover:bg-gray-700 w-full "
        >
          Quay lại
        </button>
        {/* </div> */}
      </form>
    </div>
  );
};

export default AddAdmin;
