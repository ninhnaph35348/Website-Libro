import { createContext, useState } from "react";
import { IUser } from "../interfaces/User";

export const AuthContext = createContext({} as any);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser[]>([]);

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
  };

  return (
    <AuthContext.Provider value={{ user, getAllOrders, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
