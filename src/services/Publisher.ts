import instance from "../config/axios";
import { IPublisher } from '../interfaces/Publishers';
export const getAllPublishers = async () => {
    try {
        const { data } = await instance.get('publishers/');
        return data;
    } catch (error) {
        throw new Error("Lỗi khi lấy danh sách nhà xuất bản");
    }
};

export const getPublisherById = async (id: number | String) => {
    try {
        const { data } = await instance.get(`publishers/${id}`);
        return data;
    } catch (error) {
        throw new Error("Lỗi khi lấy thông tin nhà xuất bản");
    }
};

export const createPublisher = async (publisherData: IPublisher) => {
    try {
        const { data } = await instance.post('publishers', publisherData);
        return data;
    } catch (error) {
        throw new Error("Lỗi khi thêm nhà xuất bản");
    }
};


export const updatePublisher = async (publisherData: IPublisher, id: number | string) => {
    try {
        const { data } = await instance.put(`publishers/${id}`, publisherData);
        return data;
    } catch (error) {
        throw new Error("Lỗi khi cập nhật nhà xuất bản");
    }
};

export const deletePublisher = async (id: number | string) => {
    try {
        const { data } = await instance.delete(`publishers/${id}`);
        return data;
    } catch (error) {
        throw new Error("Lỗi khi xóa nhà xuất bản");
    }
};
