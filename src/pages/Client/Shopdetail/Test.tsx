import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../../context/Cart";
import { IProductVariant } from "../../../interfaces/ProductVariants";
import { getProductVariantById } from "../../../services/ProductVariants";

const Test = () => {
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
                    const data = response?.data;
                    if (Array.isArray(data) && data.length > 0) {
                        setProductVariant(data[0]);
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


    const handleAddToCart = () => {
        console.log("Clicked");
        // if (productVariant.product.status !== 1) {
        //   alert("Sản phẩm đã hết hàng!");
        //   return;
        // }
        try {
            addToCart(productVariant, quantity);
            alert("Thêm thành công!");
            setTimeout(() => navigate("/shop-cart"), 1000);
        } catch (error) {
            console.error("Lỗi khi thêm vào giỏ hàng:", error);
            alert("Đã có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng!");
        }
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            {/* Hình ảnh sản phẩm */}
            <div className="flex justify-end gap-4">
                {/* Ảnh sản phẩm chính */}
                <img
                    src={`http://127.0.0.1:8000/storage/${productVariant.product.image}`}
                    alt={productVariant.product.title}
                    className="border border-gray-300 p-3 shadow-md hover:shadow-lg transition w-3/5 rounded-xl object-cover"
                />

                {/* Danh sách ảnh nhỏ */}
                {productVariant.product.images?.length > 0 && (
                    <div className="space-y-2">
                        {productVariant.product.images.map((img, index) => (
                            <div
                                key={index}
                                className="border border-gray-300 rounded-xl p-1 shadow-md hover:shadow-lg transition"
                            >
                                <img
                                    src={`http://127.0.0.1:8000/storage/${img}`}
                                    alt={`Hình ảnh ${index}`}
                                    className="w-32 h-32 object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Thông tin sản phẩm */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">{productVariant.product.title}</h2>
                <p className="text-gray-600">{productVariant.product.description || "Chưa có mô tả."}</p>
                <p className="font-bold text-lg">Giá: {productVariant.promotion || productVariant.price}₫</p>
                <p><strong>Số lượng: </strong>{productVariant.quantity} quyển</p>
                <p><strong>Tác giả:</strong> {productVariant.product.author}</p>
                <p><strong>Nhà xuất bản:</strong> {productVariant.product.publisher}</p>
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
                    disabled={productVariant.product.status !== 1}
                    onClick={handleAddToCart}
                >
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>

    )
}

export default Test