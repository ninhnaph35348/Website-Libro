import instance from "../config/axios";
import { ICheckout } from "../interfaces/Checkout";


export const createCheckout = async (checkoutData: ICheckout) => {
  try {
    const { data } = await instance.post("carts/order/checkout", checkoutData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};
