import { createContext, useEffect, useState, useRef } from "react";
import { IOrder } from "../interfaces/Orders";
import { deleteOrder, getAllOrder, updateOrder } from "../services/Order";
import { toast } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

export const OrderContext = createContext({} as any);

const OrderProvider = ({ children }: Props) => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<IOrder[]>([]);
  const [reload, setReload] = useState(false);
  const filterTimeout = useRef<number | null>(null);

  // Lấy danh sách đơn hàng khi component mount hoặc reload thay đổi
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getAllOrder();
        if (response?.data && Array.isArray(response.data)) {
          setOrders(response.data);
          setFilteredOrders(response.data);
        } else {
          console.warn("Dữ liệu không đúng định dạng:", response);
          setOrders([]);
          setFilteredOrders([]);
        }
      } catch (error) {
        toast.error("Lỗi khi tải danh sách đơn hàng!");
        console.error("Lỗi khi lấy danh sách đơn hàng:", error);
      }
    };
    fetchOrders();
  }, [reload]);

  // Lọc danh sách đơn hàng theo code_order với debounce 0.5s
  const filterOrdersByCode = (searchTerm: string) => {
    if (filterTimeout.current) {
      clearTimeout(filterTimeout.current);
    }
    filterTimeout.current = window.setTimeout(() => {
      if (!searchTerm.trim()) {
        setFilteredOrders(orders);
      } else {
        const filtered = orders.filter((order) =>
          order.code_order
            ?.toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );
        setFilteredOrders(filtered);
      }
    }, 500);
  };

  // Cleanup khi unmount
  useEffect(() => {
    return () => {
      if (filterTimeout.current) {
        clearTimeout(filterTimeout.current);
      }
    };
  }, []);

  // Xóa đơn hàng
  const onStatus = async (id: number) => {
    try {
      if (window.confirm("Bạn có muốn xóa không?")) {
        await deleteOrder(id);
        setOrders((prev) => prev.filter((order) => order.id !== id));
        setFilteredOrders((prev) => prev.filter((order) => order.id !== id));
        toast.success("Xóa đơn hàng thành công!");
        setReload((prev) => !prev);
      }
    } catch (error) {
      toast.error("Lỗi khi xóa đơn hàng!");
      console.error("Lỗi khi xóa đơn hàng:", error);
    }
  };

  // Cập nhật đơn hàng
  const onEdit = async (formData: Partial<IOrder>, code_order: number | string) => {
    try {
      if (window.confirm("Bạn có chắc muốn cập nhật đơn hàng này không?")) {
        const data = await updateOrder(formData, code_order);
        setOrders((prev) =>
          prev.map((order) =>
            order.code_order === code_order ? { ...order, ...data } : order
          )
        );
        setFilteredOrders((prev) =>
          prev.map((order) =>
            order.code_order === code_order ? { ...order, ...data } : order
          )
        );
        toast.success("Cập nhật đơn hàng thành công!");
        setReload((prev) => !prev);
      }
    } catch (error) {
      toast.error("Cập nhật đơn hàng thất bại!");
      console.error("Lỗi khi cập nhật đơn hàng:", error);
    }
  };

  // Lấy tất cả đơn hàng
  const getAllOrders = async () => {
    try {
      const response = await getAllOrder();
      if (response?.data && Array.isArray(response.data)) {
        setOrders(response.data);
        setFilteredOrders(response.data);
      } else {
        console.warn("Dữ liệu không đúng định dạng:", response);
        setOrders([]);
        setFilteredOrders([]);
      }
    } catch (error) {
      toast.error("Lỗi khi tải danh sách đơn hàng!");
      console.error("Lỗi khi lấy danh sách đơn hàng:", error);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orders: filteredOrders,
        getAllOrders,
        filterOrdersByCode,
        onStatus,
        onEdit,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
