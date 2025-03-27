import { createContext, useEffect, useState } from "react";
import { IProductVariant } from "../interfaces/ProductVariants";
import { createProductVariant, deleteProductVariant, getAllProductVariant, updateProductVariant } from "../services/ProductVariants";


type Props = {
children: React.ReactNode;
};

export const ProductVariantContext = createContext({} as any);

const ProductVariantProvider = ({ children }: Props) => {
const [productvariants, setProductVariants] = useState<IProductVariant[]>([]);
const [reload, setReload] = useState(false);

useEffect(() => {
    (async () => {
        const data = await getAllProductVariant();
        setProductVariants(data?.data);
    })();
}, [reload]);

const onAdd = async (dataProductVariant: IProductVariant) => {
    try {
        const data = await createProductVariant(dataProductVariant);
        setProductVariants([...productvariants, data]);
        alert("Thêm thể loại thành công!");
        setReload((prev) => !prev);
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
        setReload((prev) => !prev);
    } catch (error) {
        console.log(error);
    }
};

return (
    <ProductVariantContext.Provider value={{ productvariants, onAdd, onDelete, onEdit }}>
        {children}
    </ProductVariantContext.Provider>
);
};

export default ProductVariantProvider;