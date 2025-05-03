import React, { useState } from "react";
import { Lock, Loader } from "lucide-react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../context/Auth";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState<{
    password?: string;
    passwordConfirmation?: string;
    general?: string;
  }>({});
  const { resetPassword, loading, error } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const { token } = useParams<{ token: string }>();
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email") || "";

  const validateForm = (): boolean => {
    const newErrors: {
      password?: string;
      passwordConfirmation?: string;
      general?: string;
    } = {};

    if (!password) {
      newErrors.password = "Vui lòng nhập mật khẩu mới";
    } else if (password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    if (!passwordConfirmation) {
      newErrors.passwordConfirmation = "Vui lòng xác nhận mật khẩu";
    } else if (password !== passwordConfirmation) {
      newErrors.passwordConfirmation = "Mật khẩu xác nhận không khớp";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await resetPassword({
        email,
        token: token || "",
        password,
        password_confirmation: passwordConfirmation,
      });
      toast.success("🎉 Đặt lại mật khẩu thành công! Vui lòng đăng nhập.");
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
            Đặt lại mật khẩu
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {errors.general || error ? (
              <span className="text-red-500">{errors.general || error}</span>
            ) : (
              "Nhập mật khẩu mới để đặt lại mật khẩu của bạn"
            )}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mật khẩu mới
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  className={`pl-10 py-2 w-full border rounded-lg ${
                    errors.password ? "border-red-300" : "border-gray-300"
                  }`}
                  value={password}
                  placeholder="Nhập mật khẩu mới"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Xác nhận mật khẩu
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  className={`pl-10 py-2 w-full border rounded-lg ${
                    errors.passwordConfirmation
                      ? "border-red-300"
                      : "border-gray-300"
                  }`}
                  value={passwordConfirmation}
                  placeholder="Xác nhận mật khẩu mới"
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </div>
              {errors.passwordConfirmation && (
                <p className="text-sm text-red-500">
                  {errors.passwordConfirmation}
                </p>
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
                "Đặt lại mật khẩu"
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

export default ResetPassword;
