import instance from "../config/axios";
import { IOrder } from "../interfaces/Orders";

export const getAllOrder = async () => {
  try {
    const { data } = await instance.get("orders");
    console.log("haha");
    
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const getOrderById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`orders/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const updateOrder = async (
  orderData: IOrder,
  id: number | string
) => {
  try {
    const { data } = await instance.put(`orders/${id}`, orderData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const deleteOrder = async (id: number | string) => {
  try {
    const { data } = await instance.put(`orders/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};
