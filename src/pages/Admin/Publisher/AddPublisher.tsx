import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PublisherContext } from "../../../context/Publisher";
import { useForm } from "react-hook-form";
import { IPublishers } from "../../../interfaces/Publishers";

const AddPublisher = () => {
  const { onAdd } = useContext(PublisherContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPublishers>();
  const navigate = useNavigate();

  const [newPublisher, setNewPublisher] = useState({ name: "" });

  const onSubmit = async (formData: IPublishers) => {
    await onAdd(formData);
    navigate("..");
    reset();
  };

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Thêm Nhà Xuất Bản</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full border p-2 mb-2"
          type="text"
          placeholder="Tên nhà xuất bản"
          {...register("name", { required: "Tên không được để trống" })}
          value={newPublisher.name}
          onChange={(e) =>
            setNewPublisher({ ...newPublisher, name: e.target.value })
          }
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

export default AddPublisher;
