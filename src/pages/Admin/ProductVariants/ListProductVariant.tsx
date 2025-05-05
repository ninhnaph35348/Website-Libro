import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductVariantContext } from "../../../context/ProductVariants";
import { IProductVariant } from "../../../interfaces/ProductVariants";
import { Switch, Tooltip } from "antd";
import { FaEdit } from "react-icons/fa";

const ListProductVariant = () => {
  const { productvariants, getAllProductVariants, onStatus } = useContext(
    ProductVariantContext
  );
  const navigate = useNavigate();

  useEffect(() => {
    getAllProductVariants();
  }, []);
  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Danh Sách Biến Thể</h2>
      <Link to="add" className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Thêm Biến Thể
      </Link>
      <table className="w-full border-collapse border border-gray-200 mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">STT</th>
            <th className="border p-2">Tên sản phẩm</th>
            <th className="border p-2">Giá bán</th>
            <th className="border p-2">Khuyến mãi</th>
            <th className="border p-2">Loại bìa</th>
            <th className="border p-2">Số lượng</th>
            <th className="border p-2">Đã bán</th>
            <th className="border p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {productvariants.map(
            (productvariant: IProductVariant, index: number) => (
              <tr key={index}>
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">
                  <Link
                    className="text-blue-400 hover:text-blue-600"
                    to={`/admin/product/${productvariant.product.code}`}
                  >
                    {productvariant.product.title}
                  </Link>
                </td>
                <td className="border p-2">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(productvariant.price as any)}
                </td>
                <td className="border p-2">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(productvariant.promotion)}
                </td>

                <td className="border p-2">{productvariant.cover}</td>
                <td className="border p-2">{productvariant.quantity} quyển</td>
                <td className="border p-2">{productvariant.sold_quantity}</td>
                <td className="border p-2 text-center ">
                  <div className="flex justify-center gap-2">
                    <Tooltip
                      title={
                        productvariant.del_flg == "0"
                          ? "Đang mở bán"
                          : "Đang ngưng bán"
                      }
                    >
                      <Switch
                        checked={productvariant.del_flg == "0"}
                        onChange={(checked) =>
                          onStatus(
                            productvariant.product.code,
                            productvariant.id,
                            checked ? "0" : "1",
                          )
                        }
                      />
                    </Tooltip>
                    <button
                      onClick={() =>
                        navigate(
                          `edit/${productvariant.product.code}/cover/${productvariant.cover_id}`
                        )
                      }
                      className="bg-yellow-500 text-white px-2 py-1 rounded"
                    >
                      <FaEdit className="text-xl" />
                    </button>
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListProductVariant;
