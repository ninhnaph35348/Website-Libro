import { useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Input, Button } from "antd";
import { ProductVariantContext } from "../../../context/ProductVariants";
import { IProductVariant } from "../../../interfaces/ProductVariants";
import { ProductContext } from "../../../context/Product";
import { IProduct } from "../../../interfaces/Products";
import { ICover } from "../../../interfaces/Cover";
import { CoverContext } from "../../../context/Cover";
import FormSelect from "../../../components/form/FormSelect";
import { getProductVariantById } from "../../../services/ProductVariants";

const EditProductvariant = () => {
    const { onEdit } = useContext(ProductVariantContext);
    const { products, getAllProduct } = useContext(ProductContext);
    const { covers, getAllCovers } = useContext(CoverContext);
    const [loading, setLoading] = useState(true);
    const param = useParams();

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
        reset,
        setValue,
        formState: { errors },
    } = useForm<IProductVariant>();

    const navigate = useNavigate();
    // 🛠 Fetch sản phẩm theo ID khi vào trang
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProductVariantById(param.id as string);
                if (response?.data) {
                    const variant = response.data[0];
                    // reset({
                    //     price: variant.price,
                    //     promotion: variant.promotion,
                    //     quantity: variant.quantity,
                    //     cover_id: covers.find((a: any) => a.id === variant.cover.id)?.id || "",
                    //     product_id: products.find((p: any) => p.id === variant.product.id)?.id || "",
                    // });
                    // console.log(variant);

                    setValue("price", Number(variant.price));
                    setValue("promotion", Number(variant.promotion));
                    setValue("quantity", variant.quantity);
                    setValue("cover_id", covers.find((c: any) => c.name === variant.author)?.id || "");
                    setValue("product_id", products.find((p: any) => p.name === variant.publisher)?.id || "");
                }
            } catch (error) {
                console.error("Lỗi khi lấy sản phẩm:", error);
            } finally {
                setLoading(false);
            }
        };

        if (param.id && covers.length > 0 && products.length > 0) {
            fetchProduct();
        }
    }, [param.id, covers, products, setValue]);



    const onSubmit = async (data: IProductVariant) => {
        if (!param.id) {
            console.error("ID không hợp lệ!");
            return;
        }
        try {
            await onEdit(data, param.id);
            // navigate(-1);
        } catch (error) {
            console.error("❌ Lỗi khi cập nhật sản phẩm:", error);
        }
    };
    if (loading) {
        return <p>Đang tải...</p>;
    }

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Thêm Biến Thể</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
