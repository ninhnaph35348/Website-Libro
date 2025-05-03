
import instance from "../config/axios";
import { IOrder } from "../interfaces/Orders";

export const getAllOrder = async () => {
  try {
    const { data } = await instance.get("orders");
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy danh sách đơn hàng");
  }
};

export const getOrderById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`orders/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy chi tiết đơn hàng");
  }
};

export const getOrderDetailById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`orders/order-detail/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy chi tiết đơn hàng");
  }
};

export const updateOrder = async (
  orderData: Partial<IOrder>,
  code_order: number | string
) => {
  try {
    const formData = new FormData();
    formData.append("_method", "PUT");

    Object.entries(orderData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value as string);
      }
    });

    const { data } = await instance.post(`orders/edit/${code_order}`, formData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật đơn hàng!");
  }
};

export const deleteOrder = async (id: number | string) => {
  try {
    const { data } = await instance.put(`orders/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi xóa đơn hàng");
  }
};
