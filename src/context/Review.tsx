import { createContext, useEffect, useState } from "react";
import { IReviews } from "../interfaces/Reviews";
import { deleteReview, getAllReviews, hideReview, updateReviewStatus } from "../services/Review";

type Props = {
  children: React.ReactNode;
};

export const ReviewContext = createContext({} as any);

const ReviewProvider = ({ children }: Props) => {
  const [reviews, setReviews] = useState<IReviews[]>([]);

  // Fetch danh sách review
  const fetchReviews = async () => {
    try {
      const data = await getAllReviews();
      setReviews(Array.isArray(data) ? data : Object.values(data));
    } catch (error) {
      console.error("Lỗi khi lấy đánh giá:", error);
      setReviews([]);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Cập nhật trạng thái review (Ẩn/Hiện)
  const onUpdateStatus = async (id: number | string, newStatus: number) => {
    try {
      await updateReviewStatus(id, newStatus);
      setReviews((prev) =>
        prev.map((rev) => (rev.id === id ? { ...rev, del_flg: newStatus } : rev))
      );
    } catch (error) {
      console.error("Lỗi cập nhật trạng thái:", error);
    }
  };

  // Ẩn review (Xóa mềm)
  const onHideReview = async (id: number | string) => {
    try {
      await hideReview(id);
      fetchReviews();
    } catch (error) {
      console.error("Lỗi khi ẩn review:", error);
    }
  };
  const onDelete = async (id: number) => {
    try {
        if (window.confirm("Bạn có muốn xóa không?")) {
            await deleteReview(id);
            alert("Xóa đánh giá thành công!");
            setReviews((prevReviews) =>
                Array.isArray(prevReviews) ? prevReviews.filter((review) => review.id !== id) : []
            );
        }
    } catch (error) {
        console.log(error);
    }
};


  return (
    <ReviewContext.Provider value={{ reviews, fetchReviews, onUpdateStatus, onHideReview ,onDelete}}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
