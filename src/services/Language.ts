import axios from "axios";

const API_URL = "http://localhost:8000/api/languages"; // Thay đổi theo API của bạn

// 🟢 Lấy danh sách tất cả ngôn ngữ
export const getAllLanguages = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi lấy danh sách ngôn ngữ:", error);
        return [];
    }
};

// 🔵 Lấy thông tin một ngôn ngữ theo ID
export const getLanguageById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi lấy thông tin ngôn ngữ:", error);
        return null;
    }
};

// 🟡 Thêm ngôn ngữ mới
export const createLanguage = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi thêm ngôn ngữ:", error);
        return null;
    }
};

// 🟠 Cập nhật ngôn ngữ
export const updateLanguage = async (data, id) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi cập nhật ngôn ngữ:", error);
        return null;
    }
};

// 🔴 Xóa ngôn ngữ
export const deleteLanguage = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Lỗi khi xóa ngôn ngữ:", error);
    }
};
