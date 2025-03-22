import instance from "../config/axios";
import { IGenre } from "../interfaces/Genre";

export const getAllGenre = async () => {
  try {
    const { data } = await instance.get("genres");
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const getGenreById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`genres/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const createGenre = async (genreData: IGenre) => {
  try {
    const { data } = await instance.post("genres", genreData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const updateGenre = async (
  genreData: IGenre,
  id: number | string
) => {
  try {
    const { data } = await instance.put(`genres/edit/${id}`, genreData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const deleteGenre = async (id: number | string) => {
  try {
    const { data } = await instance.put(`genres/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};
