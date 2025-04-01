import { createContext, useEffect, useState } from "react";
import { IReviews } from "../interfaces/Reviews";
import {
  deleteReview,
  getAllReviews,
  hideReview,
  onUpdateStatus,
} from "../services/Review";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
};

export const ReviewContext = createContext({} as any);

const ReviewProvider = ({ children }: Props) => {
  const [reviews, setReviews] = useState<IReviews[]>([]);
  const navigate = useNavigate();

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

  // Cập nhật trạng thái review (Ẩn/Hiện)
  const handleUpdateStatus = async (id: number, currentStatus: number) => {
    const isHiding = currentStatus === 0; // Nếu `status` hiện tại là 0 thì sẽ chuyển sang 1 (tức là ẩn)
    const isApproving = currentStatus === 1; // Nếu `status` là 1 (Chưa duyệt) thì chuyển sang 0 (Đã duyệt)

    const message = isApproving
      ? "Bạn có muốn duyệt bình luận này không?"
      : "Bạn có muốn chuyển bình luận này về chưa duyệt không?";

    if (!window.confirm(message)) return;

    try {
      const response = await onUpdateStatus(id, isHiding ? 1 : 0);

      // Cập nhật lại danh sách review ngay lập tức
      setReviews((prevReviews) =>
        prevReviews.map((rev) =>
          rev.id === id ? { ...rev, status: isHiding ? 1 : 0 } : rev
        )
      );

      toast.success(
        isHiding ? "Bình luận đã bị ẩn!" : "Bình luận đã được hiển thị!"
      );
    } catch (error) {
      console.error("Lỗi cập nhật trạng thái:", error);
      toast.error("Cập nhật trạng thái thất bại!");
    }
  };

  // Ẩn review (Xóa mềm)
  const onHideReview = async (id: number | string) => {
    try {
      if (!window.confirm("Bạn có chắc chắn muốn ẩn đánh giá này không?"))
        return;

      await hideReview(id);
      toast.success("Đánh giá đã được ẩn thành công!");

      fetchReviews(); // Cập nhật danh sách review
    } catch (error) {
      console.error("Lỗi khi ẩn review:", error);
      toast.error("Đã xảy ra lỗi khi ẩn đánh giá!");
    }
  };

  // Xóa review (Xóa vĩnh viễn)
  const onDelete = async (id: number) => {
    try {
      if (!window.confirm("Bạn có chắc chắn muốn xóa vĩnh viễn không?")) return;

      await deleteReview(id);
      toast.success("Xóa đánh giá thành công!");

      // Cập nhật danh sách review mà không cần load lại trang
      setReviews((prevReviews) =>
        prevReviews ? prevReviews.filter((review) => review.id !== id) : []
      );

      navigate("/admin/reviews");
    } catch (error) {
      console.error("Lỗi khi xóa review:", error);
      toast.error("Đã xảy ra lỗi khi xóa đánh giá!");
    }
  };

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        fetchReviews,
        handleUpdateStatus,
        onHideReview,
        onDelete,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
