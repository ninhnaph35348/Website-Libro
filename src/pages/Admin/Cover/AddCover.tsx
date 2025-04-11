import { useContext } from "react";
import { CoverContext } from "../../../context/Cover";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ICover } from "../../../interfaces/Cover";

const AddCover = () => {
    const context = useContext(CoverContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ICover>();
    const navigate = useNavigate();

    const onSubmit = async (data: ICover) => {
        if (context) {
            await context.onAdd(data);
            navigate(-1);
            reset();
        }
    };

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Thêm Loại Bìa</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="w-full border p-2 mb-2"
                    type="text"
                    placeholder="Tên loại bìa"
                    {...register("type", { required: "Tên không được để trống" })}
                />
                {errors.type && <p className="text-red-500">{errors.type.message}</p>}

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                >
                    Thêm
                </button>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-600 text-white px-4 py-2 rounded mt-2 ml-2"
                >
                    Quay lại
                </button>
            </form>
        </div>
    );
};

export default AddCover;
