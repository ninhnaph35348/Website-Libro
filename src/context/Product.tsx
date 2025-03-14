import { createContext, useEffect, useState } from "react";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../services/Product";
import { IProduct } from "../interfaces/Products";

type Props = {
    children: React.ReactNode;
};
export const ProductContext = createContext({} as any);

const ProductProvider = ({ children }: Props) => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await getAllProducts();
                if (response?.data && Array.isArray(response.data)) {
                    setProducts(response.data);
                } else {
                    console.warn("Dữ liệu không đúng định dạng:", response);
                    setProducts([]);
                }
            } catch (error) {
                console.error("Lỗi khi fetch sản phẩm:", error);
                setProducts([]);
            }
        })();
    }, []);

    const createFormData = (dataProduct: IProduct) => {
        const formData = new FormData();

        // ✅ Thêm thông tin sản phẩm vào FormData (trừ ảnh & genres)
        Object.entries(dataProduct).forEach(([key, value]) => {
            if (key !== "image" && key !== "images" && key !== "genres") {
                formData.append(key, String(value));
            }
        });

        // ✅ Xử lý genres (gửi ID)
        if (Array.isArray(dataProduct.genres)) {
            dataProduct.genres.forEach((genre) => {
                formData.append("genres[]", String(genre)); // Giả định `dataProduct.genres` là `number[]`
            });
        }

        // ✅ Xử lý ảnh chính (nếu có)
        if (dataProduct.image instanceof File) {
            formData.append("image", dataProduct.image);
        }

        // ✅ Xử lý ảnh bổ sung
        if (Array.isArray(dataProduct.images)) {
            dataProduct.images.forEach((image) => {
                if (image instanceof File) {
                    formData.append("images[]", image);
                }
            });
        }

        return formData;
    };


    const onAdd = async (dataProduct: IProduct) => {
        try {
            const formData = createFormData(dataProduct);
            const data = await createProduct(formData);
            setProducts((prevProducts) => [...prevProducts, data]);

            alert("Thêm sản phẩm thành công!");
        } catch (error) {
            console.error("❌ Lỗi khi thêm sản phẩm:", error);
        }
    };


    const onEdit = async (dataProduct: IProduct, id: number | string) => {
        try {
            const formData = createFormData(dataProduct);
            formData.append("_method", "PUT"); // 🔥 Đảm bảo server hiểu đây là PUT request

            const data = await updateProduct(formData, id);

            setProducts((prevProducts) =>
                prevProducts.map((product) => (product.id === id ? data : product))
            );

            alert("Sửa sản phẩm thành công!");
        } catch (error) {
            console.error("❌ Lỗi khi sửa sản phẩm:", error);
        }
    };



    // ✅ Xóa sản phẩm
    const onDelete = async (id: number | string) => {
        try {
            if (window.confirm("Bạn có muốn xóa không?")) {
                await deleteProduct(id);
                alert("Xóa thành công!");
                setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
            }
        } catch (error) {
            console.error("❌ Lỗi khi xóa sản phẩm:", error);
        }
    };

    return (
        <ProductContext.Provider value={{ products, onAdd, onDelete, onEdit }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
