import instance from "../config/axios";

// ! Lấy toàn bộ danh sách review (Chỉ lấy những review có del_flg = 0)
export const getAllReviews = async () => {
    try {
        const { data } = await instance.get("reviews/");
        return Array.isArray(data) ? data : Object.values(data);
    } catch (error) {
        console.error("Lỗi API:", error);
        return [];
    }
};

// ! Lấy chi tiết review theo ID
export const getReviewById = async (id: number | string) => {
    try {
        const { data } = await instance.get(`reviews/${id}`);
        return data;
    } catch (error) {
        throw new Error("Lỗi khi lấy chi tiết review");
    }
};

// ! Cập nhật trạng thái review (Hiện/Ẩn)
export const onUpdateStatus = async (id: number | string, status: number) => {
    try {
        console.log("🔹 Gửi yêu cầu cập nhật trạng thái:", { id, status });

        const { data } = await instance.put(`reviews/edit/${id}`, { status });

        console.log("✅ Dữ liệu trả về từ API:", data);
        return data;
    } catch (error) {
        console.error("❌ Lỗi cập nhật trạng thái review:", error);
        throw new Error("Lỗi cập nhật trạng thái review");
    }
};


// ! Ẩn review (Soft delete - Cập nhật del_flg = 1)
export const hideReview = async (id: number | string) => {
    try {
        const { data } = await instance.put(`reviews/hidden/${id}`);
        return data;
    } catch (error) {
        throw new Error("Lỗi khi ẩn review");
    }
};

// ! Xóa review vĩnh viễn (chỉ gọi khi cần)
export const deleteReview = async (id: number | string) => {
    try {
        const { data } = await instance.delete(`reviews/${id}`);
        return data;
    } catch (error) {
        console.error("Lỗi khi xóa đánh giá:", error);
        throw new Error("Lỗi khi xóa đánh giá");
    }
};


