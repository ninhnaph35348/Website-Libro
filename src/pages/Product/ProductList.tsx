import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthorContext } from "../../context/Author";
import { IAuthor } from "../../interfaces/Authors";

const ProductList = () => {
  const { authors, onDelete } = useContext(AuthorContext);

  const navigate = useNavigate();

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Quản lý Sản phẩm</h2>
      <button
        onClick={() => navigate("add")}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Thêm mới sản phẩm
      </button>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Tên</th>
            <th className="border p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((aut: IAuthor) => (
            <tr key={aut.id} className="border">
              <td className="border p-2">{aut.id}</td>
              <td className="border p-2">{aut.name}</td>
              <td className="border p-2 flex gap-2 justify-center">
                <button
                  onClick={() => onDelete(aut.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Xóa
                </button>
                <button
                  onClick={() => navigate(`/product/edit/${aut.id}`)}
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

export default ProductList;
