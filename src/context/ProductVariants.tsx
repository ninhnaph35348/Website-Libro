import { createContext, useState } from "react";
import { IProductVariant } from "../interfaces/ProductVariants";
import { createProductVariant, statusProductVariant, getAllProductsBestsellers, getAllProductVariant, getAllProductVariantLatest, updateProductVariant, getAllProductVariantsByStatus } from "../services/ProductVariants";


type Props = {
    children: React.ReactNode;
};

export const ProductVariantContext = createContext({} as any);

const ProductVariantProvider = ({ children }: Props) => {
    const [productvariants, setProductVariants] = useState<IProductVariant[]>([]);
    const [productVariantByStatus, setProductVariantByStatus] = useState<IProductVariant[]>([]);
    const [productVariantLatest, setProductVariantLatest] = useState<IProductVariant[]>([]);
    const [productBestsellers, setProductBestsellers] = useState<IProductVariant[]>([]);

    const getAllProductVariants = async () => {
        try {
            const data = await getAllProductVariant();
            setProductVariants(data?.data);
        } catch (error) {
            console.log("Lỗi khi lấy danh sách biến thể sản phẩm:", error);
        }
    };
    const getVariantsByStatus = async () => {
        try {
            const data = await getAllProductVariantsByStatus();
            setProductVariantByStatus(data?.data);
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

    const Bestsellers = async () => {
        try {
            const data = await getAllProductsBestsellers();
            setProductBestsellers(data?.data);
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
                await statusProductVariant(id);
                alert("Xóa thể loại thành công!");
                setProductVariants(productvariants.filter((productvariant) => productvariant.id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onEdit = async (formData: IProductVariant, id: number | string) => {
        try {
            const formDataToSend = new FormData();

            // Convert IProductVariant object to FormData
            for (const key in formData) {
                const value = (formData as any)[key];
                if (value !== undefined && value !== null) {
                    formDataToSend.append(key, value);
                }
            }

            const data = await updateProductVariant(formDataToSend, id);

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
        <ProductVariantContext.Provider value={{productvariants, productVariantLatest, productBestsellers,productVariantByStatus, Bestsellers, getAllProductVariants, fetchLatestVariants,getVariantsByStatus, onAdd, onDelete, onEdit }}>
            {children}
        </ProductVariantContext.Provider>
    );
};

export default ProductVariantProvider;