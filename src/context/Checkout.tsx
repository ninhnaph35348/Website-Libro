import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ICheckout } from "../interfaces/Checkout";
import { createCheckout } from "../services/Checkout";
interface ICreateCheckoutResponse {
  message: string;
  total_price_cart: number;
  order: ICheckout;
  order_details: any[];
}

type Props = {
  children: React.ReactNode;
};

export const CheckoutContext = createContext({} as any);

const CheckoutProvider = ({ children }: Props) => {
  const [checkouts, setCheckouts] = useState<ICheckout[]>([]);
  const [userInfo, setUserInfo] = useState<ICheckout | null>(null);

  const onAdd = async (dataCheckout: ICheckout): Promise<ICheckout | null> => {
    try {
      const response: ICreateCheckoutResponse = await createCheckout(
        dataCheckout
      );
      setCheckouts((prevCheckouts) => [...prevCheckouts, response.order]);
      toast.success(response.message || "Đặt hàng thành công!");
      return response.order;
    } catch (error: any) {
      toast.error(error.message || "Đặt hàng thất bại!");
      console.error("Checkout error:", error.message);
      return null;
    }
  };

  const login = (user: ICheckout) => {
    setUserInfo(user); // Cập nhật thông tin người dùng khi đăng nhập
  };

  return (
    <CheckoutContext.Provider value={{ checkouts, onAdd, userInfo, login }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
