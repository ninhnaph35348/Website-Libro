import instance from "../config/axios";

export const searchAuthor = async (keyword: string = '') => {
    try {
        const { data } = await instance.get("products/search", {
            params: { s: keyword }
        });
        return data;
    } catch (error) {
        console.error("Lỗi API:", error);
        return [];
    }
};