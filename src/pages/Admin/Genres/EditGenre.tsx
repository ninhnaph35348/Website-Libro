import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GenreContext } from '../../../context/Genre';
import { useForm } from 'react-hook-form';
import { getGenreById } from '../../../services/Genre';
import { IGenre } from '../../../interfaces/Genre';

const EditGenre = () => {
    const { onEdit } = useContext(GenreContext);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<IGenre>();
    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        (async () => {
            const genre = await getGenreById(param.id as string | number);
            reset({
                name: genre.name,
            });
        })();
    }, [param.id, reset]);

    const onSubmit = async (genre: IGenre) => {
        await onEdit(genre, param.id);
        navigate('..');
    };

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Sửa Thể Loại</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="w-full border p-2 mb-2"
                    type="text"
                    placeholder="Tên thể loại"
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

export default EditGenre;
