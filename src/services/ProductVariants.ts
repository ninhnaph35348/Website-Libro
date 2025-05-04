import instance from "../config/axios";
import { IProductVariant } from "../interfaces/ProductVariants";

export const getAllProductVariant = async () => {
  try {
    const { data } = await instance.get("product_variants");
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};
export const getAllProductVariantsByStatus = async () => {
  try {
    const { data } = await instance.get("product_variants_status");
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};

export const getAllProductVariantLatest = async () => {
  try {
    const { data } = await instance.get("product_variants/latest");
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};

export const getProductVariantsToprate = async () => {
  try {
    const { data } = await instance.get("product_variants_toprate");
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};

export const getAllProductsBestsellers = async () => {
  try {
    const { data } = await instance.get("products-bestsellers");
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};

export const getProductVariantById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`product_variants/${id}`);
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};

export const getProductCover = async (id: number | string, code: number | string) => {
  try {
    const { data } = await instance.get(`product_variants/${code}/cover/${id}`);
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};

export const createProductVariant = async (productvariantData: IProductVariant) => {
  try {
    const { data } = await instance.post("product_variants", productvariantData);
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};

export const updateProductVariant = async (productvariantData: FormData, id: number | string, code: number | string) => {
  try {
    productvariantData.append("_method", "PUT");
    const { data } = await instance.post(`product_variants/edit/${code}/cover/${id}`, productvariantData);
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};

export const statusProductVariant = async (productvariantData: FormData, code: number | string, id: number | string) => {
  try {
    const { data } = await instance.post(`product_variants/update-status/${code}/id/${id}`, productvariantData);
    return data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message || "Lỗi không xác định");
  }
};
