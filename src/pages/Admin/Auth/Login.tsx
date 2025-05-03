import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setUser } from "../../../store/auth/authSlice";
import { RootState, AppDispatch } from "../../../store/auth/store";
import { useNavigate } from "react-router-dom";
import { Loader, Mail, Lock } from "lucide-react";
import { toast } from "react-toastify";

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: { general?: string; email?: string; password?: string } =
      {};

    // Nếu cả email và password đều rỗng
    if (!email && !password) {
      newErrors.general = "Vui lòng nhập đầy đủ thông tin đăng nhập";
    } else {
      if (!email) newErrors.email = "Vui lòng nhập email";
      else if (!/\S+@\S+\.\S+/.test(email))
        newErrors.email = "Email không hợp lệ";

      if (!password) newErrors.password = "Vui lòng nhập mật khẩu";
      else if (password.length < 6)
        newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    try {
      // Thực hiện đăng nhập
      const res = await dispatch(
        login({ email, password, loginType: "admin" })
      ).unwrap();
  
      if (!res || !res.token) {
        throw new Error("API không trả về token hợp lệ");
      }
  
      // Lưu thông tin đăng nhập vào localStorage
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("isLoggedIn", "true");  // Lưu trạng thái đăng nhập
      dispatch(setUser(res.user));
  
      // Kiểm tra trạng thái voucher
      const hasReceivedVoucher = localStorage.getItem("hasReceivedVoucher") === "true";
  
      if (!hasReceivedVoucher) {
        // Nếu chưa nhận voucher, hiển thị thông báo và lưu trạng thái voucher đã nhận
        toast.success("🎉 Bạn đã nhận được voucher CHAOMUNG!");
        localStorage.setItem("hasReceivedVoucher", "true");  // Lưu trạng thái voucher đã nhận
      }
  
      toast.success("🎉 Đăng nhập thành công!");
      navigate("/admin");
    } catch (err: any) {
      console.error("Lỗi đăng nhập:", err);
      const apiMessage = err.message || "Lỗi đăng nhập không xác định";
      setErrors({ general: apiMessage });
      toast.error(apiMessage); // Hiển thị thông báo lỗi nếu có
    }
  };
  
  
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="w-full max-w-md transform transition-all duration-300">
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Đăng nhập Admin
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {errors.general || error ? (
              <span className="text-red-500">{errors.general || error}</span>
            ) : (
              "Vui lòng nhập thông tin đăng nhập"
            )}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  className={`pl-10 py-2 w-full border rounded-lg ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  }`}
                  value={email}
                  placeholder="Vui lòng nhập email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  className={`pl-10 py-2 w-full border rounded-lg ${
                    errors.password ? "border-red-300" : "border-gray-300"
                  }`}
                  value={password}
                  placeholder="Vui lòng nhập mật khẩu"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
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
                "Đăng nhập"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
