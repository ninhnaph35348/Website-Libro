import React, { useState } from "react";
import { Mail, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../context/Auth";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    general?: string;
  }>({});
  const { forgotPassword, loading, error } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: { email?: string; general?: string } = {};

    if (!email) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email không hợp lệ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await forgotPassword({ email });
      toast.success(
        "🎉 Liên kết đặt lại mật khẩu đã được gửi đến email của bạn!"
      );
      setTimeout(() => navigate("/login"), 2000);
    } catch (err: any) {
      console.error("❌ Lỗi API:", err);
      setErrors({ general: error || "Có lỗi xảy ra, vui lòng thử lại" });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="w-full max-w-md transform transition-all duration-300">
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Quên mật khẩu
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {errors.general || error ? (
              <span className="text-red-500">{errors.general || error}</span>
            ) : (
              "Nhập email để nhận liên kết đặt lại mật khẩu"
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
                  placeholder="Vui lòng nhập Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
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
                "Gửi liên kết đặt lại"
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Quay lại{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Đăng nhập
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;