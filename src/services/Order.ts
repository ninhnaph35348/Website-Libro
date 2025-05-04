
import instance from "../config/axios";
import { IOrder } from "../interfaces/Orders";

export const getAllOrder = async () => {
  try {
    const { data } = await instance.get("orders");
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};

export const getOrderById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`orders/${id}`);
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};

export const getOrderDetailById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`orders/order-detail/${id}`);
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
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
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};

export const deleteOrder = async (id: number | string) => {
  try {
    const { data } = await instance.put(`orders/${id}`);
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};
