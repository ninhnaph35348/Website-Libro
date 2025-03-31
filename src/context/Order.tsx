import { createContext, useEffect, useState } from "react";
import { deleteOrder, getAllOrder, updateOrder } from "../services/Order";
import { IOrder } from "../interfaces/Orders";

type Props = {
  children: React.ReactNode;
};

export const OrderContext = createContext({} as any);

const OrderProvider = ({ children }: Props) => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllOrder();
        if (response?.data && Array.isArray(response.data)) {
          setOrders(response.data);
        } else {
          console.warn("Dữ liệu không đúng định dạng:", response);
          setOrders([]);
        }
      } catch (error) {
        console.error("Lỗi khi fetch sản phẩm:", error);
        setOrders([]);
      }
    })();
  }, [reload]);

  const onStatus = async (id: number) => {
    try {
      if (window.confirm("Bạn có muốn xóa không?")) {
        await deleteOrder(id);
        alert("Đổi trạng thái thành công!");
        setOrders(orders.filter((order) => order.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onEdit = async (formData: IOrder, code_order: number | string) => {
    try {
      if (window.confirm("Bạn có chắc muốn cập nhật đơn hàng này không?")) {
        const data = await updateOrder(formData, code_order);
        const newOrders = orders.map((order) =>
          order.code_order === code_order ? data : order
        );
        setOrders(newOrders);
        setReload((prev) => !prev);
        alert("Cập nhật đơn hàng thành công!");
      }
    } catch (error) {
      alert("Cập nhật thất bại! Vui lòng thử lại.");
      console.error(error);
    }
  };

  return (
    <OrderContext.Provider value={{ orders, onStatus, onEdit }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
