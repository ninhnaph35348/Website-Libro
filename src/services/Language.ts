import instance from "../config/axios";
import { ILanguage } from "../interfaces/Language";

export const getAllLanguage = async () => {
  try {
    const { data } = await instance.get("languages/");
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const getLanguageById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`languages/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const createLanguage = async (languageData: ILanguage) => {
  try {
    const { data } = await instance.post("languages", languageData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const updateLanguage = async (
  languageData: ILanguage,
  id: number | string
) => {
  try {
    const { data } = await instance.put(`languages/edit/${id}`, languageData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const deleteLanguage = async (id: number | string) => {
  try {
    const { data } = await instance.put(`languages/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};
