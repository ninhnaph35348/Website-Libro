import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReviewContext } from "../../../context/Review";
import { IReviews } from "../../../interfaces/Reviews";

const Review = () => {
  const { reviews, getAllReview, handleUpdateStatus, onHideReview } =
    useContext(ReviewContext);
  const navigate = useNavigate();

  useEffect(() => {
    getAllReview();
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
            {/* <th className="border p-2">Trạng thái</th> */}
            <th className="border p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {reviews.length === 0 ? (
            <tr>
              <td colSpan={7} className="border p-2 text-center text-gray-500">
                Không có đánh giá nào.
              </td>
            </tr>
          ) : (
            reviews.map((rev: IReviews, index: number) => (
              <tr key={rev.id ?? index} className="border hover:bg-gray-50">
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2 text-center">{rev.rating}⭐</td>
                <td className="border p-2">
                  <button
                    onClick={() => navigate(`detail/${rev.id}`)}
                    className="text-blue-500 hover:underline"
                  >
                    {rev.review}
                  </button>
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => navigate(`/admin/product/${rev.code}`)}
                    className="text-blue-500 hover:underline"
                  >
                    {rev.username}
                  </button>
                </td>
                <td className="border p-2">{rev.title}</td>
                {/* <td className="border p-2 text-center">
                  <span
                    className={`px-2 py-1 text-xs font-bold rounded ${
                      rev.status === 1
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {rev.status === 1 ? "Chưa duyệt" : "Đã duyệt"}
                  </span>
                </td> */}
                <td className="border p-2 flex gap-2 justify-center">
                  {/* Nút duyệt */}
                  {/* <button
                    onClick={() => handleUpdateStatus(rev.id, rev.status)}
                    className={`px-2 py-1 rounded text-white ${
                      rev.status === 0
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                    }`}
                    disabled={rev.status === 0}
                  >
                    {rev.status === 0 ? "Đã duyệt" : "Duyệt"}
                  </button> */}

                  {/* Nút chi tiết */}
                  {/* <button
                    onClick={() => navigate(`detail/${rev.id}`)}
                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                  >
                    Chi tiết
                  </button> */}

                  {/* Nút ẩn */}
                  <button
                    onClick={() => onHideReview(rev.id)}
                    className={`px-2 py-1 rounded text-white ${
                      rev.del_flg === 1
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                    disabled={rev.del_flg === 1}
                  >
                    Ẩn
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Review;
