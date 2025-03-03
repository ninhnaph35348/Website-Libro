import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { PublisherContext } from '../../context/Publisher';

const AddPublisher = () => {
  const { onAdd } = useContext(PublisherContext); // Đặt useContext trong function component
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const [newPublisher   , setnewPublisher  ] = useState({ name: "" }); // Khai báo state cho input
// 
  const onSubmit = async (formData) => {
    await onAdd(formData);
    navigate('/publishers');
    reset();
  };

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Thêm Nhà Xuất Bản</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full border p-2 mr-2 mb-2"
          type="text"
          placeholder="Tên nhà xuất bản"
          {...register("name", { required: "Tên không được để trống" })}
          value={newPublisher.name}
          onChange={(e) => setnewPublisher({ name: e.target.value })}
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

export default AddPublisher;
