import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../../context/Cart";
import { IProductVariant } from "../../../interfaces/ProductVariants";
import { getProductVariantById } from "../../../services/ProductVariants";

const Shopdetail = () => {
  const [productVariant, setProductVariant] = useState<IProductVariant | null>(null);
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    (async () => {
      if (code) {
        try {
          const response = await getProductVariantById(code);
          const data = response?.data; // Kiểm tra API trả về gì
          if (data) {
            setProductVariant(data);
          } else {
            setProductVariant(null);
          }
        } catch (error) {
          console.error("Lỗi khi tải sản phẩm:", error);
          setProductVariant(null);
        }
      }
    })();
  }, [code]);

  if (!productVariant || !productVariant.product) {
    return <p className="text-center mt-10 text-gray-500">Sản phẩm không tồn tại.</p>;
  }

  const { product } = productVariant;

  const handleAddToCart = () => {
    if (product.status !== 1) {
      alert("Sản phẩm đã hết hàng!");
      return;
    }
    try {
      addToCart(productVariant, quantity);
      setTimeout(() => navigate("/shop-cart"), 1000);
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
      alert("Đã có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng!");
    }
  };

  return (
    <section className="shop-details-section section-padding">
      <div className="container">
        <div className="breadcrumb-wrapper">
          <h1 className="text-2xl font-bold text-center">Chi Tiết Sản Phẩm</h1>
          <ul className="breadcrumb flex justify-center gap-2 text-gray-500">
            <li><Link to="/">Trang chủ</Link></li>
            <li>/</li>
            <li>Chi tiết sản phẩm</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Hình ảnh sản phẩm */}
          <div>
            <img
              src={`http://127.0.0.1:8000/storage/${product.image}`}
              alt={product.title}
              className="w-full rounded-lg"
            />
            {product.images?.length > 0 && (
              <div className="flex gap-2 mt-4">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={`http://127.0.0.1:8000/storage/${img}`}
                    alt={`Hình ảnh ${index}`}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Thông tin sản phẩm */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description || "Chưa có mô tả."}</p>
            <p className="font-bold text-lg">Giá: {productVariant.promotion || productVariant.price}₫</p>
            <p><strong>Tác giả:</strong> {product.author}</p>
            <p><strong>Nhà xuất bản:</strong> {product.publisher}</p>
            <p><strong>Loại bìa:</strong> {productVariant.cover}</p>

            {/* Bộ chọn số lượng */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <input
                type="number"
                className="w-12 text-center border rounded"
                value={quantity}
                min="1"
                max={productVariant.quantity}
                onChange={(e) =>
                  setQuantity(Math.min(productVariant.quantity, Math.max(1, Number(e.target.value))))
                }
              />
              <button
                onClick={() => setQuantity((q) => Math.min(productVariant.quantity, q + 1))}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                +
              </button>
            </div>

            {/* Nút thêm vào giỏ hàng */}
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              disabled={product.status !== 1}
              onClick={handleAddToCart}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shopdetail;
