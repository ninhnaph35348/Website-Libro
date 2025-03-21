import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IReviews } from "../../../interfaces/Reviews";
import { ReviewContext } from "../../../context/Review";

const Review = () => {
  const { reviews, onUpdateStatus, onDelete } = useContext(ReviewContext);
  

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Quản lý Đánh Giá</h2>


      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">STT</th>
            <th className="border p-2">Rating</th>
            <th className="border p-2">Review</th>
            <th className="border p-2">User ID</th>
            <th className="border p-2">Product ID</th>
            <th className="border p-2">Trạng thái</th>
            <th className="border p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((rev: IReviews, index: number) => (
            <tr key={rev.id ?? index} className="border">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{rev.rating}</td>
              <td className="border p-2">{rev.review}</td>
              <td className="border p-2">{rev.user_id}</td>
              <td className="border p-2">{rev.product_id}</td>
              <td className="border p-2 text-center">
                <span
                  className={`px-2 py-1 text-xs font-bold rounded ${
                    rev.del_flg === 1
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {rev.del_flg === 1 ? "Ẩn" : "Hiện"}
                </span>
              </td>
              <td className="border p-2 flex gap-2 justify-center">
                {/* Cập nhật trạng thái */}
                <button
                  onClick={() => onUpdateStatus(rev.id, rev.del_flg === 1 ? 0 : 1)}
                  className={`px-2 py-1 rounded text-white ${
                    rev.del_flg === 1 ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {rev.del_flg === 1 ? "Hiện" : "Ẩn"}
                </button>

                {/* Xem chi tiết */}
                <button
                  onClick={() => alert(`Chi tiết review:\n${rev.review}`)}
                  className="px-2 py-1 bg-blue-500 text-white rounded"
                >
                  Xem
                </button>

                {/* Xóa (ẩn review) */}
                <button
        onClick={() => onDelete(rev.id)}
        className="px-2 py-1 rounded bg-gray-500 text-white"
    >
        Xóa
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
