import { useContext } from "react";
import { GenreContext } from "../../context/Genre";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IGenre } from "../../interfaces/Genre";

const AddGenre = () => {
    const context = useContext(GenreContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IGenre>();
    const navigate = useNavigate();

    const onSubmit = async (data: IGenre) => {
        if (context) {
            await context.onAdd(data);
            navigate("/genres");
            reset();
        }
    };

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Thêm Thể Loại</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="w-full border p-2 mb-2"
                    type="text"
                    placeholder="Tên thể loại"
                    {...register("name", { required: "Tên không được để trống" })}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                >
                    Thêm
                </button>
            </form>
        </div>
    );
};

export default AddGenre;
