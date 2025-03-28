import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../../context/Product";
import { IProduct } from "../../../interfaces/Products";

const ProductList = () => {
  const { filteredProducts, onDelete, filterProductsByTitle } =
    useContext(ProductContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Xử lý sự kiện khi nhập vào ô tìm kiếm
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterProductsByTitle(value);
  };

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Quản lý Sản phẩm</h2>

      {/* Thanh tìm kiếm và nút thêm mới */}
      <div className="mb-4 flex justify-between items-center w-full">
        <button
          onClick={() => navigate("/admin/product/add")}
          className="bg-green-500 text-white px-3 py-2 rounded w-1/6"
        >
          Thêm mới sản phẩm
        </button>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={handleSearch}
          className="border px-3 py-2 w-1/3 rounded"
        />
      </div>

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="border p-2">STT</th>
            <th className="border p-2">Mã</th>
            <th className="border p-2">Tiêu đề</th>
            <th className="border p-2">Tác giả</th>
            <th className="border p-2">Ngôn ngữ</th>
            <th className="border p-2">Nhà cung cấp</th>
            <th className="border p-2">Thể loại</th>
            <th className="border p-2">Ảnh</th>
            <th className="border p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: IProduct, index: number) => (
              <tr key={product.id ?? index} className="border">
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">
                  <Link
                    className="text-blue-400 hover:text-blue-600"
                    to={`${product.code}`}
                  >
                    {product.code}
                  </Link>
                </td>
                <td className="border p-2">{product.title}</td>
                <td className="border p-2">{product.author}</td>
                <td className="border p-2">{product.language}</td>
                <td className="border p-2">{product.supplier_name}</td>
                <td className="border p-2">{product.category}</td>
                <td className="border p-2 text-center">
                  <img
                    className="w-20 h-20"
                    src={`http://127.0.0.1:8000/storage/` + product.image}
                    alt="No"
                  />
                </td>
                <td className="h-auto p-2 space-x-2 text-center min-w-32">
                  <button
                    onClick={() => onDelete(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Xóa
                  </button>
                  <button
                    onClick={() => navigate(`edit/${product.code}`)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="text-center p-4 text-gray-500">
                Không có sản phẩm nào phù hợp!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
