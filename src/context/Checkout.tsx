import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ICheckout } from "../interfaces/Checkout";
import {
  createCheckout,
} from "../services/Checkout";


type Props = {
  children: React.ReactNode;
};

export const CheckoutContext = createContext({} as any);

const CheckoutProvider = ({ children }: Props) => {
  const [checkouts, setCheckouts] = useState<ICheckout[]>([]);

  const onAdd = async (dataCheckout: ICheckout) => {
    try {
      const data = await createCheckout(dataCheckout);
      setCheckouts([...checkouts, data]);
      toast.success("Đặt hàng thành công!");
    } catch (error) {
      toast.error("Lỗi khi Đặt hàng!");
      console.error(error);
    }
  };

  return (
    <CheckoutContext.Provider value={{ checkouts, onAdd }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;