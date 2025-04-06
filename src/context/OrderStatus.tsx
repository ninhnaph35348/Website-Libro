import { createContext, useState } from "react";
import { IOrderStatus } from "../interfaces/OrderStatus";
import { getAllOrderstatus } from "../services/OrderStatus";

type Props = {
    children: React.ReactNode;
};

export const OrderStatusContext = createContext({} as any);

const OrderStatusProvider = ({ children }: Props) => {
    const [orderstatus, setOrderStatus] = useState<IOrderStatus[]>([]);
    // const [reload, setReload] = useState(false);

    const getAllStatus = async () => {
        try {
          const data = await getAllOrderstatus();
          //  console.log("👉 Dữ liệu trạng thái nhận được:", data);  // <== LOG NÀY
          //console.log(orderstatus); // Xem giá trị của orderstatus sau khi gọi getAllStatus()

          setOrderStatus(data);
        } catch (error) {
          // console.log("❌ Lỗi khi lấy trạng thái đơn hàng:", error);
        }
      }
      


    
    return (
        <OrderStatusContext.Provider value={{ orderstatus, getAllStatus }}>
            {children}
        </OrderStatusContext.Provider>
    );
};

export default OrderStatusProvider;