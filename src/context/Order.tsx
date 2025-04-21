import { createContext, useState } from "react";
import { IOrder } from "../interfaces/Orders";
import { deleteOrder, getAllOrder, updateOrder } from "../services/Order";
import { toast } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

export const OrderContext = createContext({} as any);

const OrderProvider = ({ children }: Props) => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  const getAllOrders = async () => {
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
  };

  const onStatus = async (id: number) => {
    try {
      if (window.confirm("Bạn có muốn xóa không?")) {
        await deleteOrder(id);
        toast.success("Đổi trạng thái thành công!");
        // Sử dụng updater function để đảm bảo tính đồng bộ
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onEdit = async (formData: IOrder, code_order: number | string) => {
    try {
      if (window.confirm("Bạn có chắc muốn cập nhật đơn hàng này không?")) {
        const data = await updateOrder(formData, code_order);
        // Sử dụng updater function để cập nhật trạng thái mới
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.code_order === code_order ? { ...order, ...data } : order
          )
        );
        toast.success("Cập nhật đơn hàng thành công!");
      }
    } catch (error) {
      toast.error("Cập nhật đơn hàng thất bại!");
      console.error(error);
    }
  };

  return (
    <OrderContext.Provider value={{ orders, getAllOrders, onStatus, onEdit }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
