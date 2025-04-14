import instance from "../config/axios";
import { IVnPay } from "../interfaces/VnPay";


export const createVnPay = async (payData: IVnPay) => {
  try {
    const { data } = await instance.post("vnpay-create", payData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};


