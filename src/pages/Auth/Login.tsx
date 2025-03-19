import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setUser } from "../../store/auth/authSlice";
import { RootState, AppDispatch } from "../../store/auth/store";
import { useNavigate } from "react-router-dom";
import { Loader, Mail, Lock } from "lucide-react";

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
    const newErrors: { email?: string; password?: string } = {};
    if (!email) newErrors.email = "Vui lòng nhập email";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Email không hợp lệ";
    if (!password) newErrors.password = "Vui lòng nhập mật khẩu";
    else if (password.length < 6)
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    dispatch(login({ email, password })).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        localStorage.setItem("token", res.payload.token);
        dispatch(setUser(res.payload.user)); // Cập nhật Redux state
        console.log("User sau login:", res.payload.user); // Kiểm tra user
        navigate("/admin");
        window.location.reload();
      }
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="w-full max-w-md transform transition-all duration-300">
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Đăng nhập Admin
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Vui lòng nhập thông tin đăng nhập
          </p>
          {error && <div className="mb-6 text-red-500 text-sm">{error}</div>}
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
                  placeholder="Vui Long Nhap Email"
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
                  placeholder="Vui Long Nhap Mat Khau"
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
