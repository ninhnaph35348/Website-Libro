import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../../context/Product";
import { IProduct } from "../../../interfaces/Products";
import { Switch, Tooltip } from "antd";
import { FaEdit } from "react-icons/fa";

const ProductList = () => {
  const { filteredProducts, getAllProduct, onStatus, filterProductsByTitle } =
    useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProduct();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Get products for the current page
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page changes
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterProductsByTitle(value);
    setCurrentPage(1); // Reset to page 1 on search
  };

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Quản lý Sản phẩm</h2>

      <div className="mb-4 flex justify-between items-center w-full">
        <button
          onClick={() => navigate("add")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Thêm mới sản phẩm
        </button>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Tổng: {filteredProducts.length} sản phẩm
          </span>
          <input
            type="text"
            placeholder="Tìm theo tiêu đề..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="border p-2">STT</th>
            <th className="border p-2">Ảnh</th>
            <th className="border p-2">Mã</th>
            <th className="border p-2">Tiêu đề</th>
            <th className="border p-2">Tác giả</th>
            <th className="border p-2">Nhà cung cấp</th>
            <th className="border p-2">Danh mục</th>
            <th className="border p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product: IProduct, index: number) => (
              <tr key={product.id ?? index} className="border">
                <td className="border p-2 text-center">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="border p-2 text-center">
                  <img
                    className="w-20"
                    src={`http://127.0.0.1:8000/storage/` + product.image}
                    alt="No"
                  />
                </td>
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
                <td className="border p-2">{product.supplier_name}</td>
                <td className="border p-2">{product.category}</td>
                <td className="p-2 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Tooltip
                      title={
                        product.status === "in_stock"
                          ? "Đang mở bán"
                          : "Đang ngưng bán"
                      }
                    >
                      <Switch
                        checked={product.status === "in_stock"}
                        onChange={(checked) =>
                          onStatus(
                            product.code,
                            checked ? "in_stock" : "out_stock"
                          )
                        }
                      />
                    </Tooltip>

                    <button
                      title="Sửa sản phẩm"
                      onClick={() => navigate(`edit/${product.code}`)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded flex items-center gap-2"
                    >
                      <FaEdit className="text-xl" />
                    </button>
                  </div>
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {/* Previous Page Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-4 py-2 rounded-full border shadow-md transition-all duration-300 
              ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:scale-105"
              }`}
            disabled={currentPage === 1}
          >
            ◀ Trước
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-full border shadow-md transition-all duration-300 font-semibold
                ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white scale-110 shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105"
                }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Page Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-4 py-2 rounded-full border shadow-md transition-all duration-300 
              ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:scale-105"
              }`}
            disabled={currentPage === totalPages}
          >
            Tiếp ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
