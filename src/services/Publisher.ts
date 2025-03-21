import { IPublishers } from "../interfaces/Publishers";
import instance from "../config/axios";

export const getAllPublishers = async () => {
  try {
    const { data } = await instance.get("publishers/");
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const getPublisherById = async (id: number | string) => {
  try {
    const { data } = await instance.get(`publishers/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const createPublisher = async (publisherData: IPublishers) => {
  try {
    const { data } = await instance.post("publishers", publisherData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const updatePublisher = async (
  publisherData: IPublishers,
  id: number | string
) => {
  try {
    const { data } = await instance.put(`publishers/edit/${id}`, publisherData);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const deletePublisher = async (id: number | string) => {
  try {
    const { data } = await instance.put(`publishers/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};
