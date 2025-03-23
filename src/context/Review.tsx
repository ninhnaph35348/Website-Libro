import { createContext, useEffect, useState } from "react";
import { IReviews } from "../interfaces/Reviews";
import { deleteReview, getAllReviews, hideReview, onUpdateStatus } from "../services/Review";
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
    const isHiding = currentStatus === 0; // Nếu `del_flg` hiện tại là 0 thì sẽ chuyển sang 1 (tức là ẩn)

    const message = isHiding 
        ? "Bạn có muốn ẩn bình luận này không?" 
        : "Bạn có muốn hiển thị lại bình luận này không?";

    if (!window.confirm(message)) {
        return; // Nếu người dùng nhấn Cancel, thoát ra
    }

    try {
        console.log("Trước khi cập nhật:", { id, currentStatus, isHiding });

        const response = await onUpdateStatus(id, isHiding ? 1 : 0);
        console.log("Kết quả API:", response);

        // Cập nhật lại danh sách review ngay lập tức
        setReviews((prevReviews) =>
            prevReviews.map((rev) =>
                rev.id === id ? { ...rev, del_flg: isHiding ? 1 : 0 } : rev
            )
        );

        alert(isHiding ? "Bình luận đã bị ẩn!" : "Bình luận đã được hiển thị!");
        console.log("Sau khi cập nhật:", reviews);
    } catch (error) {
        console.error("Lỗi cập nhật trạng thái:", error);
        alert("Cập nhật trạng thái thất bại!");
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
        if (!window.confirm("Bạn có chắc chắn muốn xóa vĩnh viễn không?")) return;

        await deleteReview(id); 
        alert("Xóa đánh giá thành công!");

        // Cập nhật danh sách review mà không cần load lại trang
        setReviews((prevReviews) => 
            prevReviews ? prevReviews.filter((review) => review.id !== id) : []
        );

        navigate('/admin/reviews');
    } catch (error) {
        console.error("Lỗi khi xóa review:", error);
        alert("Đã xảy ra lỗi khi xóa đánh giá!");
    }
};

  return (
    <ReviewContext.Provider value={{ reviews, fetchReviews, handleUpdateStatus, onHideReview ,onDelete}}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
