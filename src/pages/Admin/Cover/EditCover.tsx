import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CoverContext } from '../../../context/Cover';
import { useForm } from 'react-hook-form';
import { getCoverById } from '../../../services/Cover';
import { ICover } from '../../../interfaces/Cover';

const EditCover = () => {
    const { onEdit } = useContext(CoverContext);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<ICover>();
    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        (async () => {
            const cover = await getCoverById(param.id as string | number);
            reset({
                type: cover.type,
            });
        })();
    }, [param.id, reset]);

    const onSubmit = async (cover: ICover) => {
        await onEdit(cover, param.id);
        navigate('..');
    };

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Sửa Loại Bìa</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="w-full border p-2 mb-2"
                    type="text"
                    placeholder="Tên loại bìa"
                    {...register("type", { required: "Tên không được để trống" })}
                    defaultValue={watch("type")}
                />
                {errors.type && <p className="text-red-500">{errors.type.message}</p>}



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

export default EditCover;
