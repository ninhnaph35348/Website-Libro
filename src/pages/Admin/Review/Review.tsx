import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReviewContext } from "../../../context/Review";
import { IReviews } from "../../../interfaces/Reviews";

const Review = () => {
  const { reviews, fetchReviews, onHideReview } = useContext(ReviewContext);


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
            <th className="border p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((rev: IReviews, index: number) => (
            <tr key={rev.id ?? index} className="border">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{rev.rating}⭐</td>
              <td className="border p-2"><Link to={`detail/${rev.id}`}>{rev.review}</Link></td>
              <td className="border p-2"><Link to={`/admin/product/${rev.code}`}>{rev.username}</Link></td>
              <td className="border p-2">{rev.title}</td>

              <td className=" p-2 flex gap-2 justify-center">
                <button
                  onClick={() => onHideReview(rev.id)}
                  className={`px-2 py-1 rounded text-white ${rev.del_flg === 1
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-500"
                    }`}
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
