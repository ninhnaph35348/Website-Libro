import { createContext, useState } from "react";
import { IProductVariant } from "../interfaces/ProductVariants";
import { createProductVariant, deleteProductVariant, getAllProductVariant, getAllProductVariantLatest, updateProductVariant } from "../services/ProductVariants";


type Props = {
    children: React.ReactNode;
};

export const ProductVariantContext = createContext({} as any);

const ProductVariantProvider = ({ children }: Props) => {
    const [productvariants, setProductVariants] = useState<IProductVariant[]>([]);
    const [productVariantLatest, setProductVariantLatest] = useState<IProductVariant[]>([]);

    const getAllProductVariants = async () => {
        try {
            const data = await getAllProductVariant();
            setProductVariants(data?.data);
        } catch (error) {
            console.log("Lỗi khi lấy danh sách biến thể sản phẩm:", error);
        }
    };

    const fetchLatestVariants = async () => {
        try {
            const data = await getAllProductVariantLatest();
            setProductVariantLatest(data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    const onAdd = async (dataProductVariant: IProductVariant) => {
        try {
            const data = await createProductVariant(dataProductVariant);
            setProductVariants([...productvariants, data]);
            alert("Thêm thể loại thành công!");
        } catch (error) {
            console.log(error);
        }
    };

    const onDelete = async (id: number) => {
        try {
            if (window.confirm("Bạn có muốn xóa không?")) {
                await deleteProductVariant(id);
                alert("Xóa thể loại thành công!");
                setProductVariants(productvariants.filter((productvariant) => productvariant.id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onEdit = async (formData: IProductVariant, id: number | string) => {
        try {
            const data = await updateProductVariant(formData, id);
            const newProductVariants = productvariants.map((productvariant) =>
                productvariant.id === id ? data : productvariant
            );
            setProductVariants(newProductVariants);
            alert("Sửa thể loại thành công!");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ProductVariantContext.Provider value={{ productvariants, productVariantLatest, getAllProductVariants, fetchLatestVariants, onAdd, onDelete, onEdit }}>
            {children}
        </ProductVariantContext.Provider>
    );
};

export default ProductVariantProvider;