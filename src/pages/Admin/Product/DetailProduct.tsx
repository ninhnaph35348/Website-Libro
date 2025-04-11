import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../../../interfaces/Products";
import { getProductById } from "../../../services/Product";

interface IData {
    data: IProduct
}

const ProductDetail = () => {
    const [product, setProduct] = useState<IProduct | null>(null);
    // const [quantity, setQuantity] = useState<number>(1);
  const navigate = useNavigate();
    const { code } = useParams<{ code: string }>();

    useEffect(() => {
        (async () => {
            if (code) {
                const data: IData = await getProductById(code);
                setProduct(data.data);
            }
        })();
    }, [code]);

    if (!product) return <p className="text-center mt-10">Sản phẩm không tồn tại.</p>;

    return (
        <div className="max-w-3xl mx-auto p-6 border rounded-lg shadow-md">
            {/* Hình ảnh chính */}
            <img src={`http://127.0.0.1:8000/storage/` + product.image} alt={product.title} className="w-full object-cover rounded" />

            {/* Danh sách ảnh phụ */}
            <div className="flex gap-2 mt-4">
                {product.images.map((img: any, index: any) => (
                    <img key={index} src={`http://127.0.0.1:8000/storage/` + img} alt={`Product image ${index}`} className="w-24 h-24 object-cover rounded" />
                ))}
            </div>

            {/* Thông tin sản phẩm */}
            <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
            <p className="text-gray-600">{product.description}</p>
            <p className="mt-2"><strong>Tác giả:</strong> {product.author}</p>
            <p className="mt-2"><strong>Danh mục:</strong> {product.category}</p>
            <p className="mt-2"><strong>Nhà xuất bản:</strong> {product.publisher}</p>
            <p className="mt-2"><strong>Nhà cung cấp:</strong> {product.supplier_name}</p>
            <p className="mt-2"><strong>Thể loại:</strong> {product.genres.join(", ")}</p>
            {/* <p className="mt-2"><strong>Trạng thái:</strong> {product.status === "in_stock" ? "Còn hàng" : "Hết hàng"}</p> */}
    <button
      onClick={() => navigate(-1)}
      className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded"
    >
      Quay lại
    </button>
        </div>
    );
};

export default ProductDetail;
