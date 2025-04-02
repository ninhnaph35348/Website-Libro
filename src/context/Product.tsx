import { createContext, useState } from "react";
import { IProduct } from "../interfaces/Products";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../services/Product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Props = {
    children: React.ReactNode;
};
export const ProductContext = createContext({} as any);

const ProductProvider = ({ children }: Props) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
    const [searchTimeout, setSearchTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

    const getAllProduct = async () => {
            try {
                const response = await getAllProducts();
                if (response?.data && Array.isArray(response.data)) {
                    setProducts(response.data);
                    setFilteredProducts(response.data);
                } else {
                    console.warn("Dữ liệu không đúng định dạng:", response);
                    setProducts([]);
                    setFilteredProducts([]);
                }
            } catch (error) {
                console.error("Lỗi khi fetch sản phẩm:", error);
                setProducts([]);
                setFilteredProducts([]);
            }
        }

    // ✅ Hàm lọc sản phẩm theo title với độ trễ 500ms
    const filterProductsByTitle = (title: string) => {
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        const newTimeout = setTimeout(() => {
            if (title.trim() === "") {
                setFilteredProducts(products);
            } else {
                const filtered = products.filter(product =>
                    product.title.toLowerCase().includes(title.toLowerCase())
                );
                setFilteredProducts(filtered);
            }
        }, 500); // Độ trễ 0.5 giây

        setSearchTimeout(newTimeout);
    };

    const createFormData = (dataProduct: IProduct) => {
        const formData = new FormData();

        Object.entries(dataProduct).forEach(([key, value]) => {
            if (key !== "image" && key !== "images" && key !== "genres") {
                formData.append(key, String(value));
            }
        });

        if (Array.isArray(dataProduct.genres)) {
            dataProduct.genres.forEach((genre) => {
                formData.append("genres[]", String(genre));
            });
        }

        if (dataProduct.image instanceof File) {
            formData.append("image", dataProduct.image);
        }

        if (Array.isArray(dataProduct.images)) {
            dataProduct.images.forEach((image) => {
                if (image instanceof File) {
                    formData.append("images[]", image);
                } else if (typeof image === "string") {
                    formData.append("images[]", image); // Gửi ảnh cũ dạng URL
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
            setFilteredProducts((prevProducts) => [...prevProducts, data]);
            alert("Thêm sản phẩm thành công!");
        } catch (error) {
            console.error("❌ Lỗi khi thêm sản phẩm:", error);
        }
    };

    const onEdit = async (dataProduct: IProduct, id: number | string) => {
        try {
            const formData = createFormData(dataProduct);
            const data = await updateProduct(formData, id);

            setProducts((prevProducts) =>
                prevProducts.map((product) => (product.id === id ? data : product))
            );
            setFilteredProducts((prevProducts) =>
                prevProducts.map((product) => (product.id === id ? data : product))
            );

            toast.success("Sửa sản phẩm thành công!");
        } catch (error) {
            console.error("❌ Lỗi khi sửa sản phẩm:", error);
        }
    };

    const onDelete = async (id: number | string) => {
        try {
            if (window.confirm("Bạn có muốn xóa không?")) {
                console.log("🔄 Đang xóa sản phẩm với ID:", id);
                
                const response = await deleteProduct(id);
                console.log("✅ Kết quả API:", response);
    
                toast.success("Xóa sản phẩm thành công!");
    
                await deleteProduct(id);
                alert("Xóa thành công!");

                setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
                setFilteredProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
            }
        } catch (error) {
            console.error("❌ Lỗi khi xóa sản phẩm:", error);
        }
    };
    

    return (
        <ProductContext.Provider value={{ products, filteredProducts, getAllProduct, onAdd, onDelete, onEdit, filterProductsByTitle }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;