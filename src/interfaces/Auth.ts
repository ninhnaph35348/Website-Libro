import { IUser } from "./User";

export interface AuthState {
  user: IUser | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface RegisterRequest {
  username: string;
  fullname: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  loginType: "client" | "admin" | "sadmin";
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  token: string;
  password: string;
  password_confirmation: string;
}

export interface AuthResponse {
  message: string;
  user?: IUser;
  token?: string;
  role?: string;
}

export interface ResetPasswordResponse {
  status: "success" | "error";
  message: string;
}