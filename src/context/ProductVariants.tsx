import { createContext, useState } from "react";
import { IProductVariant } from "../interfaces/ProductVariants";
import {
  createProductVariant,
  statusProductVariant,
  getAllProductsBestsellers,
  getAllProductVariant,
  getAllProductVariantLatest,
  updateProductVariant,
  getAllProductVariantsByStatus,
  getProductVariantsToprate,
} from "../services/ProductVariants";
import { toast } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

export const ProductVariantContext = createContext({} as any);

const ProductVariantProvider = ({ children }: Props) => {
  const [productvariants, setProductVariants] = useState<IProductVariant[]>([]);
  const [productVariantByStatus, setProductVariantByStatus] = useState<
    IProductVariant[]
  >([]);
  const [productVariantLatest, setProductVariantLatest] = useState<
    IProductVariant[]
  >([]);
  const [productBestsellers, setProductBestsellers] = useState<
    IProductVariant[]
  >([]);
  const [productToprate, setToprate] = useState<IProductVariant[]>([]);

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

  const Toprate = async () => {
    try {
      const data = await getProductVariantsToprate();
      setToprate(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onAdd = async (dataProductVariant: IProductVariant) => {
    try {
      const data = await createProductVariant(dataProductVariant);
      setProductVariants([...productvariants, data]);
      toast.success("Thêm biến thể sản phẩm thành công!");
    } catch (error) {
      console.log(error);
    }
  };

  const onStatus = async (code: string | number, newStatus: "0" | "1") => {
    try {
      const formData = new FormData();
      formData.append("del_flg", newStatus);
      formData.append("_method", "put");
      await statusProductVariant(formData, code);
      await getAllProductVariants();
      toast.success("Cập nhật trạng thái sản phẩm thành công!");
    } catch (error) {
      console.error("❌ Lỗi khi cập nhật trạng thái sản phẩm:", error);
    }
  };

  const onEdit = async (
    formData: IProductVariant,
    id: number | string,
    code: number | string
  ) => {
    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        const value = (formData as any)[key];
        if (value !== undefined && value !== null) {
          formDataToSend.append(key, value);
        }
      }

      const data = await updateProductVariant(formDataToSend, id, code);

      const newProductVariants = productvariants.map((productvariant) =>
        productvariant.product.code === code ? data : productvariant
      );
      setProductVariants(newProductVariants);
      toast.success("Cập nhật biến thể sản phẩm thành công!");
      await getAllProductVariants();
      return newProductVariants;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductVariantContext.Provider
      value={{
        productvariants,
        productVariantLatest,
        productBestsellers,
        productToprate,
        productVariantByStatus,
        Toprate,
        Bestsellers,
        getAllProductVariants,
        fetchLatestVariants,
        getVariantsByStatus,
        onAdd,
        onStatus,
        onEdit,
      }}
    >
      {children}
    </ProductVariantContext.Provider>
  );
};

export default ProductVariantProvider;
