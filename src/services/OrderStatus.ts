import instance from "../config/axios";
// import { IOrderStatus } from "../interfaces/OrderStatus";

export const getAllOrderstatus = async () => {
  try {
    const { data } = await instance.get("status");
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

// export const getOrderstatusById = async (id: number | string) => {
//   try {
//     const { data } = await instance.get(`orderstatuss/${id}`);
//     return data;
//   } catch (error) {
//     throw new Error("Lỗi");
//   }
// };

// export const createOrderstatus = async (orderstatusData: IOrderStatus) => {
//   try {
//     const { data } = await instance.post("orderstatuss", orderstatusData);
//     return data;
//   } catch (error) {
//     throw new Error("Lỗi");
//   }
// };

// export const updateOrderstatus = async (
//   orderstatusData: IOrderStatus,
//   id: number | string
// ) => {
//   try {
//     const { data } = await instance.put(`orderstatuss/${id}`, orderstatusData);
//     return data;
//   } catch (error) {
//     throw new Error("Lỗi");
//   }
// };

// export const deleteOrderstatus = async (id: number | string) => {
//   try {
//     const { data } = await instance.put(`orderstatuss/${id}`);
//     return data;
//   } catch (error) {
//     throw new Error("Lỗi");
//   }
// };
