import { Button, Input } from "antd";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import FormSelect from "../../../components/form/FormSelect";
import { CoverContext } from "../../../context/Cover";
import { ProductContext } from "../../../context/Product";
import { ProductVariantContext } from "../../../context/ProductVariants";
import { ICover } from "../../../interfaces/Cover";
import { IProduct } from "../../../interfaces/Products";
import { IProductVariant } from "../../../interfaces/ProductVariants";
import { getProductCover } from "../../../services/ProductVariants";

const EditProductvariant = () => {
    const { onEdit } = useContext(ProductVariantContext);
    const { products, getAllProduct } = useContext(ProductContext);
    const { covers, getAllCovers } = useContext(CoverContext);
    const [loading, setLoading] = useState(true);
    const { code, id } = useParams<{ code: string; id: string }>();

    useEffect(() => {
        getAllProduct();
        getAllCovers();
    }, []);
    // const { id } = useParams();
    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: { errors },
    } = useForm<IProductVariant>();

    const navigate = useNavigate();
    useEffect(() => {
        const fetchProduct = async () => {
            if (code && id) {
                try {
                    const response = await getProductCover(id, code);
                    if (response?.data) {
                        const variant = response.data;

                        setValue("price", Number(variant.price));
                        setValue("promotion", Number(variant.promotion));
                        setValue("quantity", variant.quantity);
                        setValue("product_id", variant.product.id);
                        setValue("cover_id", variant.cover_id);

                    }
                } catch (error) {
                    console.error("Lỗi khi lấy sản phẩm:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        if (id && covers.length > 0 && products.length > 0) {
            fetchProduct();
        }
    }, [code, id, covers, products, setValue]);



    const onSubmit = async (data: IProductVariant) => {
        try {
            const success = await onEdit(data, id, code);

            if (success) {
                navigate(-1);

            }
        } catch (error) {
            console.error("❌ Lỗi khi cập nhật sản phẩm:", error);
        }
    };
    if (loading) {
        return <p>Đang tải...</p>;
    }

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Sửa Biến Thể</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Select Sản phẩm */}
                <div>
                    <label className="block mb-1">Sản phẩm</label>
                    <Controller
                        name="product_id"
                        control={control}
                        rules={{ required: "Vui lòng chọn sản phẩm" }}
                        render={({ field }) => (
                            <FormSelect
                                {...field}
                                placeholder="Chọn sản phẩm"
                                options={products?.map((product: IProduct) => ({
                                    value: product.id,
                                    label: product.title,
                                }))}
                                error={errors.product_id?.message}
                                onChange={(value) => field.onChange(value)}
                                isDisabled={true}
                            />
                        )}
                    />
                </div>

                {/* Input Giá Bán */}
                <div>
                    <label className="block mb-1">Giá Bán</label>
                    <Input
                        type="number"
                        placeholder="Nhập giá bán"
                        defaultValue={watch("price")}
                        // defaultValue={}
                        {...register("price", { required: "Giá bán không được để trống" })}
                        onChange={(e) => setValue("price", Number(e.target.value), { shouldValidate: true })}
                    />
                    {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                </div>

                {/* Input Giá Khuyến Mãi */}
                <div>
                    <label className="block mb-1">Giá Khuyến Mãi</label>
                    <Input
                        type="number"
                        placeholder="Nhập giá khuyến mãi"
                        defaultValue={watch("promotion")}
                        {...register("promotion")}
                        onChange={(e) => setValue("promotion", e.target.value as any, { shouldValidate: true })}
                    />
                </div>

                {/* Input Số Lượng */}
                <div>
                    <label className="block mb-1">Số Lượng</label>
                    <Input
                        type="number"
                        placeholder="Nhập số lượng"
                        defaultValue={watch("quantity")}
                        {...register("quantity", { required: "Số lượng không được để trống" })}
                        onChange={(e) => setValue("quantity", e.target.value as any, { shouldValidate: true })}
                    />
                    {errors.quantity && <p className="text-red-500">{errors.quantity.message}</p>}
                </div>

                {/* Select Loại Bìa */}
                <div>
                    <label className="block mb-1">Loại bìa</label>
                    <Controller
                        name="cover_id"
                        control={control}
                        rules={{ required: "Vui lòng chọn loại bìa" }}
                        render={({ field }) => (
                            <FormSelect
                                {...field}
                                placeholder="Chọn loại bìa"
                                options={covers?.map((cover: ICover) => ({
                                    value: cover.id,
                                    label: cover.type,
                                }))}
                                error={errors.cover_id?.message}
                                onChange={(value) => field.onChange(value)}
                                // isDisabled={true}
                            />
                        )}
                    />
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-2">
                    <Button type="primary" htmlType="submit">Sửa</Button>
                    <Button onClick={() => navigate(-1)}>Quay lại</Button>
                </div>
            </form>
        </div>
    );
};

export default EditProductvariant;
