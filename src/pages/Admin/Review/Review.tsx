import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IReviews } from "../../../interfaces/Reviews";
import { ReviewContext } from "../../../context/Review";

const Review = () => {
  const { reviews, fetchReviews, handleUpdateStatus, onHideReview } = useContext(ReviewContext);
  const navigate = useNavigate();


    useEffect(() => {
      fetchReviews();
    }, []);

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
                  className={`px-2 py-1 text-xs font-bold rounded ${rev.status === 1
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-white"
                    }`}
                >
                  {rev.status === 1 ? "Chưa duyệt" : "Đã duyệt"}
                </span>
              </td>

              <td className="border p-2 flex gap-2 justify-center">
                {/* Nút duyệt */}
                <button
                  onClick={() => handleUpdateStatus(rev.id, rev.status)}
                  className={`px-2 py-1 rounded text-white ${rev.status === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500"
                    }`}
                  disabled={rev.status === 0} // Nếu đã duyệt thì vô hiệu hóa
                >
                  {rev.status === 0 ? "Đã duyệt" : "Duyệt"}
                </button>

                {/* Xem chi tiết */}
                <button
                  onClick={() => navigate(`detail/${rev.id}`)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Chi tiết
                </button>

                {/* Nút ẩn */}
                <button
                  onClick={() => onHideReview(rev.id)}
                  className={`px-2 py-1 rounded text-white ${rev.del_flg === 1
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-500"
                    }`}
                  disabled={rev.del_flg === 1} // Nếu đã ẩn thì vô hiệu hóa
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
