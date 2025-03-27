import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IReviews } from "../../../interfaces/Reviews";
import { getReviewById } from "../../../services/Review";
import { ReviewContext } from "../../../context/Review";

const ReviewDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview, ] = useState<IReviews | null>(null);
  const { onDelete } = useContext(ReviewContext);

  useEffect(() => {
    (async () => {
      const response = await getReviewById(id as string);
      console.log("Dữ liệu review:", response);
      setReview(response.data); // Đảm bảo API trả về đúng format
    })();
  }, [id]);

  if (!review) return <p>Đang tải...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="p-10 w-full mx-auto bg-white shadow-xl rounded-lg max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">Chi tiết Review</h2>
        <p><strong>Sản phẩm:</strong> {review.title}</p>
        <p><strong>Đánh giá:</strong> {review.rating} ⭐</p>
        <p><strong>Nội dung:</strong> {review.review}</p>
        <p><strong>Ngày đánh giá:</strong> {new Date(review.created_at).toLocaleString()}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700"
        >
          Quay lại
        </button>
        <button
        onClick={() => onDelete(review.id)}
        className="mt-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700"
        >
        Xóa
    </button>
      </div>
    </div>
  );
};

export default ReviewDetail;
