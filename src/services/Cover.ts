import instance from "../config/axios";
import { ICover } from "../interfaces/Cover";

export const getAllCover = async () => {
  try {
    const { data } = await instance.get("covers");
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const getCoverById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`covers/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const createCover = async (coverData: ICover) => {
  try {
    const { data } = await instance.post("covers", coverData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const updateCover = async (
  coverData: ICover,
  id: number | string
) => {
  try {
    const { data } = await instance.put(`covers/edit/${id}`, coverData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const deleteCover = async (id: number | string) => {
  try {
    const { data } = await instance.put(`covers/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};
