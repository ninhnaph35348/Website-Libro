import { useContext } from "react";
import { VoucherContext } from "../../../context/Voucher";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IVoucher } from "../../../interfaces/Voucher";

const AddVoucher = () => {
    const context = useContext(VoucherContext);
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<IVoucher>();
    const navigate = useNavigate();

    const discountType = watch("discount_type");
    
    const onSubmit = async (data: IVoucher) => {
        const formattedData = {
            ...data,
            status: 0,
        };

        if (context) {
            await context.onAdd(formattedData);
            reset();
            navigate(-1);
        }
    };

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Thêm mã giảm giá</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">

                <div>

                    <label className="block text-gray-700 font-medium mb-1">Mã giảm giá</label>
                    <input
                        className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Mã giảm giá"
                        {...register("code", { required: "Mã không được để trống" })}
                    />
                    {errors.code && <p className="text-red-500">{errors.code.message}</p>}
                </div>

                <div>

                    <label className="block text-gray-700 font-medium mb-1">Số tiền giảm</label>
                    <div className="relative">
                        <input
                            className="w-full pr-10 p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number"
                            placeholder={discountType === "percent" ? "Phần trăm (%)" : "Số tiền giảm (đ)"}
                            {...register("discount", {
                                required: "Giảm giá không được để trống",
                                validate: (value) =>
                                    discountType === "percent"
                                        ? value <= 100 || "Phần trăm giảm giá không được vượt quá 100%"
                                        : true,
                            })}
                        />
                        <span className="absolute right-3 top-2.5 text-gray-500">
                            {discountType === "percent" ? "%" : "đ"}
                        </span>
                    </div>

                    {errors.discount && <p className="text-red-500">{errors.discount.message}</p>}

                </div>

                <div>

                    <label className="block text-gray-700 font-medium mb-1">Loại hình giảm</label>
                    <div className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 " >
                        <select className="w-full"
                            {...register("discount_type", { required: true })}
                        >
                            <option value="fixed">Giảm cố định</option>
                            <option value="percent">Giảm theo phần trăm</option>
                        </select>
                    </div>

                </div>

                <div>

                    <label className="block text-gray-700 font-medium mb-1">Số tiền giảm tối đa</label>
                    <input
                        className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="number"
                        placeholder="Số tiền giảm tối đa (có thể bỏ trống)"
                        {...register("max_discount")}
                    />

                </div>

                <div>

                    <label className="block text-gray-700 font-medium mb-1">Giá trị đơn hàng tối thiểu</label>
                    <input
                        className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="number"
                        placeholder="Giá trị đơn hàng tối thiểu"
                        {...register("min_order_value", {
                            required: "Vui lòng nhập giá trị đơn hàng tối thiểu",
                        })}
                    />
                    {errors.min_order_value && (
                        <p className="text-red-500">{errors.min_order_value.message}</p>
                    )}

                </div>

                <div>

                    <label className="block text-gray-700 font-medium mb-1">Số lượng mã</label>
                    <input
                        className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="number"
                        placeholder="Số lượng mã"
                        {...register("quantity", { required: "Số lượng không được để trống" })}
                    />
                    {errors.quantity && <p className="text-red-500">{errors.quantity.message}</p>}

                </div>

                <div>

                    <label className="block text-gray-700 font-medium mb-1">Số lần sử dụng tối đa</label>
                    <input
                        className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="number"
                        placeholder="Số lần sử dụng tối đa mỗi người"
                        {...register("max_usage_per_user", {
                            required: "Vui lòng nhập số lần sử dụng tối đa mỗi người",
                        })}
                    />
                    {errors.max_usage_per_user && (
                        <p className="text-red-500">{errors.max_usage_per_user.message}</p>
                    )}

                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-1">Bắt đầu từ</label>
                        <input
                            className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="datetime-local"
                            {...register("valid_from", { required: "Ngày bắt đầu không được để trống" })}
                        />
                        {errors.valid_from && (
                            <p className="text-red-500">{errors.valid_from.message}</p>
                        )}
                    </div>

                    <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-1">Kết thúc lúc</label>
                        <input
                            className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="datetime-local"
                            {...register("valid_to", { required: "Ngày kết thúc không được để trống" })}
                        />
                        {errors.valid_to && (
                            <p className="text-red-500">{errors.valid_to.message}</p>
                        )}
                    </div>
                </div>

                <div className="flex gap-2 mt-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Thêm
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                    >
                        Quay lại
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddVoucher;
