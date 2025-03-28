import { createContext, useEffect, useState } from "react";
import { IReviews } from "../interfaces/Reviews";
import {
  deleteReview,
  getAllReviews,
  hideReview,
  onUpdateStatus,
} from "../services/Review";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    fetchReviews();
  }, []);

  // Cập nhật trạng thái review (Ẩn/Hiện)
  const handleUpdateStatus = async (id: number, currentStatus: number) => {
    const isApproving = currentStatus === 1; // Nếu `status` là 1 (Chưa duyệt) thì chuyển sang 0 (Đã duyệt)

    const message = isApproving
      ? "Bạn có muốn duyệt bình luận này không?"
      : "Bạn có muốn chuyển bình luận này về chưa duyệt không?";

    if (!window.confirm(message)) return;

    try {
      const response = await onUpdateStatus(id, isApproving ? 0 : 1);
      console.log("Kết quả API:", response);

      // Cập nhật danh sách review ngay lập tức
      setReviews((prevReviews) =>
        prevReviews.map((rev) =>
          rev.id === id ? { ...rev, status: isApproving ? 0 : 1 } : rev
        )
      );

      alert(
        isApproving
          ? "Bình luận đã được duyệt!"
          : "Bình luận đã chuyển về chưa duyệt!"
      );
    } catch (error) {
      console.error("Lỗi cập nhật trạng thái:", error);
      alert("Cập nhật trạng thái thất bại!");
    }
  };

  // Ẩn review (Xóa mềm)
  const onHideReview = async (id: number | string) => {
    try {
      // Hiển thị hộp thoại xác nhận
      if (!window.confirm("Bạn có chắc chắn muốn ẩn đánh giá này không?"))
        return;

      await hideReview(id);
      alert("Đánh giá đã được ẩn thành công!");

      fetchReviews(); // Cập nhật danh sách review
    } catch (error) {
      console.error("Lỗi khi ẩn review:", error);
      alert("Đã xảy ra lỗi khi ẩn đánh giá!");
    }
  };

  const onDelete = async (id: number) => {
    try {
      if (!window.confirm("Bạn có chắc chắn muốn xóa vĩnh viễn không?")) return;

      await deleteReview(id);
      alert("Xóa đánh giá thành công!");

      // Cập nhật danh sách review mà không cần load lại trang
      setReviews((prevReviews) =>
        prevReviews ? prevReviews.filter((review) => review.id !== id) : []
      );

      navigate("/admin/reviews");
    } catch (error) {
      console.error("Lỗi khi xóa review:", error);
      alert("Đã xảy ra lỗi khi xóa đánh giá!");
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
