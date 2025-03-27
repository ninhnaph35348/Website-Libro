import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IReviews } from "../../../interfaces/Reviews";
import { ReviewContext } from "../../../context/Review";

const Review = () => {
  const { reviews, handleUpdateStatus, onHideReview } =
    useContext(ReviewContext);

  const navigate = useNavigate();

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Quản lý Đánh Giá</h2>

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">STT</th>
            <th className="border p-2">Đánh giá</th>
            <th className="border p-2">Nội dung</th>
            <th className="border p-2">Tên người dùng</th>
            <th className="border p-2">Tên sản phẩm</th>
            <th className="border p-2">Trạng thái</th>
            <th className="border p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((rev: IReviews, index: number) => (
            <tr key={rev.id ?? index} className="border">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{rev.rating}⭐</td>
              <td className="border p-2">{rev.review}</td>
              <td className="border p-2">{rev.username}</td>
              <td className="border p-2">{rev.title}</td>
              <td className="border p-2 text-center">
                <span
                  className={`px-2 py-1 text-xs font-bold rounded ${
                    rev.status === 1
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {rev.status === 1 ? "Chưa duyệt" : "Đã duyệt"}
                </span>
              </td>
              <td className="border p-2 flex gap-2 justify-center">
                {/* Cập nhật trạng thái */}
                <button
                  onClick={() => handleUpdateStatus(rev.id, rev.status)}
                  className={`px-2 py-1 rounded text-white ${
                    rev.status === 1 ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {rev.status === 1 ? "Đã duyệt" : " Chưa duyệt"}
                </button>

                {/* Xem chi tiết */}
                <button
                  onClick={() => navigate(`detail/${rev.id}`)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Xem chi tiết
                </button>

                {/* Xóa (ẩn review) */}
                <button
                  onClick={() => onHideReview(rev.id)}
                  className="bg-gray-500 text-white px-2 py-1 rounded"
                  disabled={rev.del_flg === 1} 
                >
                  Ẩn
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Review;
///
