import { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthState,
  RegisterRequest,
  LoginRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
} from "../interfaces/Auth";
import * as authService from "../services/AuthService";
import { toast } from "react-toastify";

export const AuthContext = createContext<AuthState & {
  register: (data: RegisterRequest) => Promise<void>;
  login: (data: LoginRequest) => Promise<void>;
  forgotPassword: (data: ForgotPasswordRequest) => Promise<void>;
  resetPassword: (data: ResetPasswordRequest) => Promise<void>;
  logout: () => void;
}>({} as any);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  });
  const navigate = useNavigate();

  const register = async (data: RegisterRequest) => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const response = await authService.register(data);
      setState({
        user: response.user || null,
        token: response.token || null,
        loading: false,
        error: null,
      });
      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
      }
      navigate("/dashboard");
    } catch (err: any) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: err.response?.data?.message || "Đăng ký thất bại",
      }));
      throw err;
    }
  };

  const login = async (data: LoginRequest) => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const response = await authService.login(data);
      setState({
        user: response.user || null,
        token: response.token || null,
        loading: false,
        error: null,
      });
      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
      }

      toast.success(response.message);
      navigate("/dashboard");
    } catch (err: any) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: err.response?.data?.message || "Đăng nhập thất bại",
      }));
      throw err;
    }
  };

  const forgotPassword = async (data: ForgotPasswordRequest) => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      await authService.forgotPassword(data);
      setState((prev) => ({ ...prev, loading: false, error: null }));
    } catch (err: any) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error:
          err.response?.data?.message || "Gửi liên kết đặt lại mật khẩu thất bại",
      }));
      throw err;
    }
  };

  const resetPassword = async (data: ResetPasswordRequest) => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      await authService.resetPassword(data);
      setState((prev) => ({ ...prev, loading: false, error: null }));
      navigate("/login");
    } catch (err: any) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: err.response?.data?.message || "Đặt lại mật khẩu thất bại",
      }));
      throw err;
    }
  };

  const logout = () => {
    setState({
      user: null,
      token: null,
      loading: false,
      error: null,
    });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        register,
        login,
        forgotPassword,
        resetPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;