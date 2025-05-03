import { createContext, useState, useCallback } from "react";
import { IReviews } from "../interfaces/Reviews";
import {
  deleteReview,
  getReviewsForClient,
  hideReview,
  onUpdateStatus,
  addReview as createReview,
  getAllReviews,
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

  const getAllReview = async () => {
    try {
      const data = await getAllReviews();
      setReviews(Array.isArray(data) ? data : Object.values(data));
    } catch (error) {
      console.error("Lỗi khi lấy đánh giá:", error);
      setReviews([]);
    }
  };
  const fetchReviews = useCallback(async (productCode: string) => {
    try {
      const data = await getReviewsForClient(productCode);
      console.log("Dữ liệu từ fetchReviews:", data);
      setReviews(data);
    } catch (error) {
      console.error("Lỗi khi lấy đánh giá:", error);
      setReviews([]);
    }
  }, []);

  const addReview = useCallback(
    async (reviewData: Partial<IReviews>, productCode: string) => {
      try {
        const newReview = await createReview(reviewData, productCode);
        setReviews((prevReviews) => [...prevReviews, newReview]);
        toast.success("Đánh giá đã được thêm thành công!");
        return newReview;
      } catch (error: any) {
        if (error.response && error.response.status === 409) {
          toast.warning("Chỉ được bình luận một lần cho mỗi sản phẩm!");
        } else {
          toast.error("Thêm đánh giá thất bại!");
          console.error("Lỗi khi thêm review:", error);
        }
        throw error;
      }
    },
    []
  );

  const handleUpdateStatus = async (id: number, currentStatus: number) => {
    const isHiding = currentStatus === 0;
    const message = isHiding
      ? "Bạn có muốn ẩn bình luận này không?"
      : "Bạn có muốn hiển thị bình luận này không?";

    if (!window.confirm(message)) return;

    try {
      const newStatus = isHiding ? 1 : 0;
      await onUpdateStatus(id, newStatus);
      setReviews((prevReviews) =>
        prevReviews.map((rev) =>
          rev.id === id ? { ...rev, status: newStatus } : rev
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

  const onHideReview = async (id: number | string) => {
    if (!window.confirm("Bạn có chắc chắn muốn ẩn đánh giá này không?")) return;
    try {
      await hideReview(id);
      setReviews((prevReviews) =>
        prevReviews.map((rev) =>
          rev.id === Number(id) ? { ...rev, del_flg: 1 } : rev
        )
      );
      toast.success("Đánh giá đã được ẩn thành công!");
    } catch (error) {
      console.error("Lỗi khi ẩn review:", error);
      toast.error("Đã xảy ra lỗi khi ẩn đánh giá!");
    }
  };

  const onDelete = async (id: number) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa vĩnh viễn không?")) return;
    try {
      await deleteReview(id);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== id)
      );
      toast.success("Xóa đánh giá thành công!");
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
        getAllReview,
        fetchReviews,
        handleUpdateStatus,
        onHideReview,
        onDelete,
        addReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
