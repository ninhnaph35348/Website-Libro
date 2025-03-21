import instance from "../config/axios";

// Lấy toàn bộ danh sách review
export const getAllReviews = async () => {
    try {
        const { data } = await instance.get("reviews/");
        return Array.isArray(data) ? data : Object.values(data);
    } catch (error) {
        console.error("Lỗi API:", error);
        return [];
    }
};

// Lấy chi tiết review theo ID
export const getReviewById = async (id: number | string) => {
    try {
        const { data } = await instance.get(`reviews/${id}`);
        return data;
    } catch (error) {
        throw new Error("Lỗi khi lấy chi tiết review");
    }
};

// Cập nhật trạng thái review (Ẩn/Hiện)
export const updateReviewStatus = async (id: number | string, del_flg: number) => {
    try {
        console.log("Gửi yêu cầu cập nhật:", { id, del_flg });
        const { data } = await instance.put(`reviews/hidden/${id}`, { del_flg }); // Sửa URL
        console.log("Kết quả API:", data);
        return data;
    } catch (error) {
        console.error("Lỗi cập nhật trạng thái review:", error);
        throw new Error("Lỗi cập nhật trạng thái review");
    }
};




// Ẩn review (Soft delete)
export const hideReview = async (id: number | string) => {
    try {
        const { data } = await instance.put(`reviews/${id}/hide`);
        return data;
    } catch (error) {
        throw new Error("Lỗi khi ẩn review");
    }
};
export const deleteReview = async (id: number | string) => {
    try {
        const { data } = await instance.delete(`reviews/${id}`);
        return data;
    } catch (error) {
        console.error("Lỗi khi xóa đánh giá:", error);
        throw new Error("Lỗi khi xóa đánh giá");
    }
};
