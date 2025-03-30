import { createContext, useEffect, useState } from "react";
import { deleteOrder, getAllOrder, updateOrder } from "../services/Order";
import { IOrder } from "../interfaces/Orders";

type Props = {
  children: React.ReactNode;
import {

    deleteOrder,
    getAllOrder,
    updateOrder,
} from "../services/Order";
import { IOrder } from "../interfaces/Orders";

type Props = {
    children: React.ReactNode;
};

export const OrderContext = createContext({} as any);

const OrderProvider = ({ children }: Props) => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [reload, setReload] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>(""); // State lưu từ khóa tìm kiếm
  const [filteredOrders, setFilteredOrders] = useState<IOrder[]>([]); // State lưu danh sách sau khi lọc

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllOrder();
        if (response?.data && Array.isArray(response.data)) {
          setOrders(response.data);
          setFilteredOrders(response.data); // Cập nhật danh sách lọc ban đầu
        } else {
          console.warn("Dữ liệu không đúng định dạng:", response);
          setOrders([]);
          setFilteredOrders([]);
        }
      } catch (error) {
        console.error("Lỗi khi fetch sản phẩm:", error);
        setOrders([]);
        setFilteredOrders([]);
      }
    })();
  }, [reload]);
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [reload, setReload] = useState(false);
  // Xử lý tìm kiếm theo `code_order` với độ trễ 0.5s
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        const result = orders.filter((order) =>
          order.code_order.toString().includes(searchTerm)
        );
        setFilteredOrders(result);
      } else {
        setFilteredOrders(orders);
      }
    }, 500);

    return () => clearTimeout(timeoutId); // Dọn dẹp timeout khi searchTerm thay đổi
  }, [searchTerm, orders]);

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
    <OrderContext.Provider
      value={{
        orders: filteredOrders, // Trả về danh sách đã lọc
        onStatus,
        onEdit,
        setSearchTerm, // Thêm hàm cập nhật từ khóa tìm kiếm
      }}
    >
      {children}
    </OrderContext.Provider>
  );
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
