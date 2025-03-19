import axios from "axios";
import { LoginData } from "../interfaces/Auth";

const API_URL = "http://127.0.0.1:8000/api"; // Thay bằng API thực tế

const login = async (data: LoginData) => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data;
};

const authService = { login };
export default authService;
