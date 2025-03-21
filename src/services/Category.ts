import { ICategories } from "../interfaces/Categories";
import instance from "../config/axios";

export const getAllCategories = async () => {
  try {
    const { data } = await instance.get("categories/");
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const getCategoryById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`categories/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const createCategory = async (categoryData: ICategories) => {
  try {
    const { data } = await instance.post("categories", categoryData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const updateCategory = async (
  categoryData: ICategories,
  id: number | string
) => {
  try {
    const { data } = await instance.put(`categories/edit/${id}`, categoryData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const deleteCategory = async (id: number | string) => {
  try {
    const { data } = await instance.put(`categories/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};
