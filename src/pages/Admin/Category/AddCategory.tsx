import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../../../context/Category";
import { useForm } from "react-hook-form";
import { ICategories } from "../../../interfaces/Categories";

const AddCategory = () => {
  const { onAdd } = useContext(CategoryContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICategories>();
  const navigate = useNavigate();

  const [newCategory, setNewCategory] = useState({ name: "", description: "" });

  const onSubmit = async (formData: ICategories) => {
    await onAdd(formData);
    navigate("..");
    reset();
  };

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Thêm Danh Mục</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full border p-2 mb-2"
          type="text"
          placeholder="Tên danh mục"
          {...register("name", { required: "Tên không được để trống" })}
          value={newCategory.name}
          onChange={(e) =>
            setNewCategory({ ...newCategory, name: e.target.value })
          }
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <textarea
          className="w-full border p-2 mb-2"
          placeholder="Mô tả danh mục"
          {...register("description")}
          value={newCategory.description}
          onChange={(e) =>
            setNewCategory({ ...newCategory, description: e.target.value })
          }
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}

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

export default AddCategory;
