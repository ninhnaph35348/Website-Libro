import instance from "../config/axios";
import { IReviews } from "../interfaces/Reviews";

export const getAllReviews = async () => {
  try {
    const { data } = await instance.get("reviews/");
    return Array.isArray(data) ? data : Object.values(data);
  } catch (error) {
    console.error("Lỗi API:", error);
    return [];
  }
};

// API cho client: Lấy đánh giá theo product_code
export const getReviewsForClient = async (
  productCode: string
): Promise<IReviews[]> => {
  try {
    const url = `review-products/${productCode}`;
    const { data } = await instance.get(url);
    // console.log("API getReviewsForClient response:", data);
    if (!data || typeof data !== "object") return [];
    const reviews = Array.isArray(data) ? data : Object.values(data);
    return reviews;
  } catch (error) {
    console.error("Lỗi API getReviewsForClient:", error);
    return [];
  }
};

export const getReviewById = async (id: number | string): Promise<IReviews> => {
  try {
    const { data } = await instance.get(`reviews/${id}`);
    return data;
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết review:", error);
    throw new Error("Lỗi khi lấy chi tiết review");
  }
};

export const addReview = async (
  reviewData: Partial<IReviews>
): Promise<IReviews> => {
  try {
    const { data } = await instance.post("reviews/", reviewData);
    return data;
  } catch (error) {
    console.error("Lỗi khi thêm review:", error);
    throw error;
  }
};

export const onUpdateStatus = async (
  id: number | string,
  status: number
): Promise<IReviews> => {
  try {
    // console.log("🔹 Gửi yêu cầu cập nhật trạng thái:", { id, status });
    const { data } = await instance.put(`reviews/edit/${id}`, { status });
    console.log("✅ Dữ liệu trả về từ API:", data);
    return data;
  } catch (error) {
    console.error("❌ Lỗi cập nhật trạng thái review:", error);
    throw new Error("Lỗi cập nhật trạng thái review");
  }
};

export const hideReview = async (id: number | string): Promise<IReviews> => {
  try {
    const { data } = await instance.put(`reviews/${id}`, {
      del_flg: 1,
      updated_at: new Date().toISOString(),
    });
    return data;
  } catch (error) {
    console.error("Lỗi khi ẩn review:", error);
    throw new Error("Lỗi khi ẩn review");
  }
};

export const deleteReview = async (id: number | string): Promise<void> => {
  try {
    await instance.delete(`reviews/${id}`);
  } catch (error) {
    console.error("Lỗi khi xóa đánh giá:", error);
    throw new Error("Lỗi khi xóa đánh giá");
  }
};
