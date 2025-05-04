import { useContext, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "antd";
import { ProductVariantContext } from "../../../context/ProductVariants";
import { IProductVariant } from "../../../interfaces/ProductVariants";
import { ProductContext } from "../../../context/Product";
import { IProduct } from "../../../interfaces/Products";
import { ICover } from "../../../interfaces/Cover";
import { CoverContext } from "../../../context/Cover";
import FormSelect from "../../../components/form/FormSelect";
import { toast } from "react-toastify";

const AddProductvariant = () => {
  const productvariants = useContext(ProductVariantContext);
  const { products, getAllProduct } = useContext(ProductContext);
  const { covers, getAllCovers } = useContext(CoverContext);

  useEffect(() => {
    getAllProduct();
    getAllCovers();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue, // 👈 Thêm setValue
    formState: { errors },
  } = useForm<IProductVariant>();

  const navigate = useNavigate();

  const onSubmit = async (data: IProductVariant) => {
    if (productvariants) {
      const isSuccess = await productvariants.onAdd(data);
      if (isSuccess) {
        navigate(-1);
        reset();
      }
    }
  };

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Thêm Biến Thể</h2>
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
            {...register("price", { required: "Giá bán không được để trống" })}
            onChange={(e) =>
              setValue("price", e.target.value as any, { shouldValidate: true })
            } // 👈 Fix lỗi required
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>

        {/* Input Giá Khuyến Mãi */}
        <div>
          <label className="block mb-1">Giá Khuyến Mãi</label>
          <Input
            type="number"
            placeholder="Nhập giá khuyến mãi"
            {...register("promotion")}
            onChange={(e) =>
              setValue("promotion", e.target.value as any, {
                shouldValidate: true,
              })
            }
          />
        </div>

        {/* Input Số Lượng */}
        <div>
          <label className="block mb-1">Số Lượng</label>
          <Input
            type="number"
            placeholder="Nhập số lượng"
            {...register("quantity", {
              required: "Số lượng không được để trống",
            })}
            onChange={(e) =>
              setValue("quantity", e.target.value as any, {
                shouldValidate: true,
              })
            }
          />
          {errors.quantity && (
            <p className="text-red-500">{errors.quantity.message}</p>
          )}
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
          <Button type="primary" htmlType="submit">
            Thêm
          </Button>
          <Button onClick={() => navigate(-1)}>Quay lại</Button>
        </div>
      </form>
    </div>
  );
};

export default AddProductvariant;
