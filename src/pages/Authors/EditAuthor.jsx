import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthorContext } from '../../context/Author';
import { useForm } from 'react-hook-form';
import { getAuthorById } from '../../services/Author';

const EditAuthor = () => {
    const { onEdit } = useContext(AuthorContext);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        (async () => {
            const author = await getAuthorById(param.id);
            reset({
                name: author.name,
                images: author.images,
                price: author.price,
                description: author.description,
                categoryId: author.categoryId
            });
        })();
    }, [param.id, reset]);

    const onSubmit = async (author) => {
        await onEdit(author, param.id);
        navigate('/authors');
    };

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Sửa Nhà Xuất Bản</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="w-full border p-2 mr-2 mb-2"
                    type="text"
                    placeholder="Tên nhà xuất bản"
                    {...register("name", { required: "Tên không được để trống" })}
                    defaultValue={watch("name")}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}

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

export default EditAuthor;
