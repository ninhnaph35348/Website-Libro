import { useContext } from "react";
import { LanguageContext } from "../../../context/Language";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ILanguage } from "../../../interfaces/Language";

const AddLanguage = () => {
  const context = useContext(LanguageContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ILanguage>();
  const navigate = useNavigate();

  const onSubmit = async (data: ILanguage) => {
    if (context) {
      await context.onAdd(data);
      navigate("..");
      reset();
    }
  };

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Thêm Ngôn Ngữ</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full border p-2 mb-2"
          type="text"
          placeholder="Tên ngôn ngữ"
          {...register("name", { required: "Tên không được để trống" })}
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

export default AddLanguage;