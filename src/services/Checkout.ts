import instance from "../config/axios";
import { ICheckout } from "../interfaces/Checkout";


export const createCheckout = async (checkoutData: ICheckout) => {
  try {
    const { data } = await instance.post("carts/order/checkout", checkoutData);
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    // Nếu không có message rõ ràng, thì fallback
    throw new Error(error.message || "Lỗi không xác định");
  }

};
