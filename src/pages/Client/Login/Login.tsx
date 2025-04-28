import React, { useState } from "react";
// import face from "../../../assets/img/facebook.png";
// import goge from "../../../assets/img/google.png";
import { Mail, Lock, Loader } from "lucide-react"; // Sử dụng icon
import { useNavigate } from "react-router-dom"; // Điều hướng
// import { signInWithGoogle } from "../../../../firebase"; // Đăng nhập Google
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/auth/store";
import { login, setUser } from "../../../store/auth/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginClient: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  // ✅ Hàm kiểm tra dữ liệu nhập vào
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

  // ✅ Xử lý đăng nhập bằng email & password
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Thêm loginType vào trong payload khi gọi login API
      const res = await dispatch(
        login({ email, password, loginType: "client" })
      ).unwrap();

      if (!res || !res.token) {
        throw new Error("API không trả về token hợp lệ");
      }

      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      dispatch(setUser(res.user));

      toast.success("🎉 Đăng nhập thành công!");
      setTimeout(() => navigate("/"), 1000);
    } catch (err: any) {
      console.error("❌ Lỗi API:", err);

      // Lấy message từ API nếu có
      const apiMessage = err.message || err;

      setErrors({ general: apiMessage });
    }
  };

  // ✅ Xử lý đăng nhập với Google

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="w-full max-w-md transform transition-all duration-300">
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Đăng nhập
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
                  placeholder="Vui lòng nhập Email"
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
                  placeholder="Vui lòng nhập Mật khẩu"
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

          {/* <div className="orting-badge text-center my-4 text-gray-500">
            Hoặc
          </div> */}

          {/* ✅ Đăng nhập Google */}
          {/* <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-100 w-full">
            <img src={goge} alt="Google" className="h-5 w-5" />
            <span>Tiếp tục với Google</span>
          </button> */}

          {/* ✅ Đăng nhập Facebook */}
          {/* <a
            className="flex items-center justify-center space-x-2 border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-100"
            href="https://www.facebook.com/"
          >
            <img src={face} alt="facebook" className="h-5 w-5" />
            <span>Tiếp tục với Facebook</span>
          </a> */}

          {/* Điều khoản */}
          {/* <div className="form-check-3 flex items-center mt-3">
            <input className="form-check-input" type="radio" name="terms" />
            <label className="ml-2 text-sm text-gray-600">
              Tôi đồng ý với Điều khoản & Điều kiện
            </label>
          </div> */}

          {/* Quên mật khẩu */}
          <div className="mt-6 text-center">
            <button
             onClick={() => navigate("/forgot-password")}
             className="text-indigo-600 hover:underline">
              Quên mật khẩu?
            </button>
          </div>

          {/* Đăng ký */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Chưa có tài khoản?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Đăng ký ngay
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginClient;
