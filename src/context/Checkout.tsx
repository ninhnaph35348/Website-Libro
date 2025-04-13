import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ICheckout } from "../interfaces/Checkout";
import {
  createCheckout,
} from "../services/Checkout";
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

  const onAdd = async (dataCheckout: ICheckout): Promise<ICheckout | null> => {
    try {
      const response: ICreateCheckoutResponse = await createCheckout(dataCheckout);
      setCheckouts([...checkouts, response.order]);
      toast.success(response.message || "Đặt hàng thành công!");
      return response.order; // ✅ Trả về đơn hàng để lấy code_order
    } catch (error) {
      toast.error("Lỗi khi Đặt hàng!");
      console.error(error);
      return null;
    }
  };
  
  

  return (
    <CheckoutContext.Provider value={{ checkouts, onAdd }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;