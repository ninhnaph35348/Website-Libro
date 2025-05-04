import instance from "../config/axios";
import { IVnPay } from "../interfaces/VnPay";


export const createVnPay = async (payData: IVnPay) => {
  try {
    const { data } = await instance.post("vnpay-create", payData);
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};


