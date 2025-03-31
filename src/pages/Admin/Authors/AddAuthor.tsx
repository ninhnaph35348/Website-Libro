import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthorContext } from "../../../context/Author";
import { IAuthor } from "../../../interfaces/Authors";


const AddAuthor = () => {
  const { onAdd } = useContext(AuthorContext);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IAuthor>();
  const navigate = useNavigate();

  const onSubmit = async (formData: IAuthor) => {
    await onAdd(formData); // Gửi dữ liệu lên context
    reset(); // Reset form về trạng thái ban đầu
    navigate(".."); // Quay lại trang danh sách
  };

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Thêm Tác giả</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full border p-2 mb-2"
          type="text"
          placeholder="Tên tác giả"
          {...register("name", { required: "Tên không được để trống" })}
          onChange={(e) => setValue("name", e.target.value)} // Cập nhật giá trị của useForm
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

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

export default AddAuthor;
