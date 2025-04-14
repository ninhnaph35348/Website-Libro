import instance from "../config/axios";
import { IProductVariant } from "../interfaces/ProductVariants";

export const getAllProductVariant = async () => {
  try {
    const { data } = await instance.get("product_variants");
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};
export const getAllProductVariantsByStatus = async () => {
  try {
    const { data } = await instance.get("product_variants_status");
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const getAllProductVariantLatest = async () => {
  try {
    const { data } = await instance.get("product_variants/latest");
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const getAllProductsBestsellers = async () => {
  try {
    const { data } = await instance.get("products-bestsellers");
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const getProductVariantById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`product_variants/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const getProductCover = async (id: number | string, code: number | string) => {
  try {
    const { data } = await instance.get(`product_variants/${code}/cover/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const createProductVariant = async (productvariantData: IProductVariant) => {
  try {
    const { data } = await instance.post("product_variants", productvariantData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const updateProductVariant = async ( productvariantData: FormData, id: number | string ) => {
  try {
    productvariantData.append("_method", "PUT");
    const { data } = await instance.put(`product_variants/edit/${id}`, productvariantData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const statusProductVariant = async (id: number | string) => {
  try {
    const { data } = await instance.put(`product_variants/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};
