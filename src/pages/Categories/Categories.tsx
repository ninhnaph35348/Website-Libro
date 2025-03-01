import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../../context/Category";
import { ICategories } from "../../interfaces/Categories";

const Categories = () => {
  const { categories, onDelete } = useContext(CategoryContext);
  const navigate = useNavigate();

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Quản lý Danh Mục</h2>
      <button
        onClick={() => navigate("/categories/add")}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Thêm Danh Mục
      </button>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Tên</th>
            <th className="border p-2">Mô tả</th>
            <th className="border p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat: ICategories) => (
            <tr key={cat.id} className="border">
              <td className="border p-2">{cat.id}</td>
              <td className="border p-2">{cat.name}</td>
              <td className="border p-2">{cat.description}</td>
              <td className="border p-2 flex gap-2 justify-center">
                <button
                  onClick={() => onDelete(cat.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Xóa
                </button>
                <button
                  onClick={() => navigate(`/categories/edit/${cat.id}`)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Sửa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
