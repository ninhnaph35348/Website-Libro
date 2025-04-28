import React, { useState } from "react";
import axios from "axios";
import { Mail, Lock, User, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../../interfaces/User";
import face from "../../../assets/img/facebook.png";
import goge from "../../../assets/img/google.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>({
    id: "",
    username: "",
    fullname: "",
    email: "",
    password: "",
    role: "client",
    address: "",
    province: "",
    district: "",
    ward: ""
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<
    Partial<IUser & { confirmPassword?: string }>
  >({});

  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value)); // Cập nhật độ mạnh mật khẩu
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let validationErrors: Partial<IUser & { confirm_password?: string }> = {};

    if (!user.fullname)
      validationErrors.fullname = "Tên đầy đủ không được để trống";
    if (!user.username)
      validationErrors.username = "Tên người dùng không được để trống";
    if (!user.email) validationErrors.email = "Email không được để trống";
    if (!user.password)
      validationErrors.password = "Mật khẩu không được để trống";
    if (user.password !== confirmPassword)
      validationErrors.confirm_password = "Mật khẩu xác nhận không khớp";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const formData = {
        ...user,
        confirm_password: confirmPassword, // ✅ Thêm trường này để Laravel nhận đúng format
      };

      console.log("Dữ liệu gửi đi:", formData); // Debug dữ liệu trước khi gửi

      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/register",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      localStorage.setItem("token", data.token);
      toast.success("Đăng ký thành công!", {
        position: "top-right",
        autoClose: 3000,
      });
      navigate("/login");
    } catch (error: any) {
      console.error("Lỗi đăng ký:", error.response?.data || error.message);
      setErrors({
        email:
          error.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại.",
      });
    } finally {
      setLoading(false);
    }
  };
  const checkPasswordStrength = (password: string) => {
    if (password.length < 6) return "Mật khẩu yếu 🔴";
    if (/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(password))
      return "Mật khẩu trung bình 🟡";
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password))
      return "Mật khẩu mạnh 🟢";
    return "Mật khẩu yếu 🔴";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="w-full max-w-md bg-white p-8 shadow-xl rounded-2xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Tạo tài khoản
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tên đầy đủ
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="fullname"
                className="pl-10 py-2 w-full border rounded-lg"
                value={user.fullname}
                placeholder="Nhập họ tên"
                onChange={handleChange}
              />
            </div>
            {errors.fullname && (
              <p className="text-sm text-red-500">{errors.fullname}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tên người dùng
            </label>
            <input
              type="text"
              name="username"
              className="pl-10 py-2 w-full border rounded-lg"
              value={user.username}
              placeholder="Nhập tên người dùng"
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-sm text-red-500">{errors.username}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="pl-10 py-2 w-full border rounded-lg"
              value={user.email}
              placeholder="Nhập email"
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mật khẩu
            </label>
            <input
              type="password"
              name="password"
              className="pl-10 py-2 w-full border rounded-lg"
              value={user.password}
              placeholder="Nhập mật khẩu"
              onChange={handleChange}
            />
            {passwordStrength && (
              <p className="text-sm mt-1">{passwordStrength}</p>
            )}{" "}
            {/* Hiển thị độ mạnh mật khẩu */}
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              className="pl-10 py-2 w-full border rounded-lg"
              value={confirmPassword}
              placeholder="Nhập lại mật khẩu"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            {loading ? (
              <Loader className="animate-spin h-5 w-5 mx-auto" />
            ) : (
              "Đăng ký"
            )}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Đã có tài khoản?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-indigo-600 font-semibold hover:underline"
            >
              Đăng nhập ngay
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
