import instance from "../config/axios";
import {
  RegisterRequest,
  LoginRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  AuthResponse,
  ResetPasswordResponse,
} from "../interfaces/Auth";

export const register = async (data: RegisterRequest): Promise<AuthResponse> => {
  const response = await instance.post<AuthResponse>("/register", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const login = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await instance.post<AuthResponse>("/login", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const forgotPassword = async (
  data: ForgotPasswordRequest
): Promise<ResetPasswordResponse> => {
  const response = await instance.post<ResetPasswordResponse>(
    "/forgot-password",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const resetPassword = async (
  data: ResetPasswordRequest
): Promise<ResetPasswordResponse> => {
  const response = await instance.post<ResetPasswordResponse>(
    "/reset-password",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

const authService = { register, login, forgotPassword, resetPassword };
export default authService;