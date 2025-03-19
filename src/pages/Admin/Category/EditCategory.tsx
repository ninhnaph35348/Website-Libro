import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CategoryContext } from '../../../context/Category';
import { useForm } from 'react-hook-form';
import { getCategoryById } from '../../../services/Category';
import { ICategories } from '../../../interfaces/Categories';

const EditCategory = () => {
    const { onEdit } = useContext(CategoryContext);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<ICategories>();
    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        (async () => {
            const category = await getCategoryById(param.id as string | number);
            reset({
                name: category.name,
                description: category.description
            });
        })();
    }, [param.id, reset]);

    const onSubmit = async (category: ICategories) => {
        await onEdit(category, param.id);
        navigate('..');
    };

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Sửa Danh Mục</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="w-full border p-2 mb-2"
                    type="text"
                    placeholder="Tên danh mục"
                    {...register("name", { required: "Tên không được để trống" })}
                    defaultValue={watch("name")}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                <textarea
                    className="w-full border p-2 mb-2"
                    placeholder="Mô tả danh mục"
                    {...register("description")}
                    defaultValue={watch("description")}
                />
                {errors.description && <p className="text-red-500">{errors.description.message}</p>}

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                >
                    Cập nhật
                </button>
            </form>
        </div>
    );
};

export default EditCategory;
