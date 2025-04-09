import { createContext, useState } from "react";
import { IUser } from "../interfaces/User";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({} as any);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser[]>([]);
  const navigate = useNavigate();

  const getAllOrders = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Lỗi khi fetch sản phẩm:", error);
      setUser([]);
    }
  };

  const login = (userData: any) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser([]);
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // Xóa luôn token
    navigate("/");

  };

  return (
    <AuthContext.Provider value={{ user, getAllOrders, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
