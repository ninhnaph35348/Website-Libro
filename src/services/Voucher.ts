import instance from "../config/axios";
import { IVoucher } from "../interfaces/Voucher";

export const getAllVoucher = async () => {
  try {
    const { data } = await instance.get("vouchers");
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const getVoucherById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`vouchers/${id}`);
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};

export const createVoucher = async (voucherData: IVoucher) => {
  try {
    const { data } = await instance.post("vouchers", voucherData);
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};

export const updateVoucher = async (
  voucherData: IVoucher,
  id: number | string
) => {
  try {
    const { data } = await instance.put(`vouchers/edit/${id}`, voucherData);
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};


export const statusVoucher = async (voucherData: FormData, id: number | string) => {
  try {
    const { data } = await instance.put(`vouchers/${id}`, voucherData);
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};