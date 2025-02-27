import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PublisherContext } from '../../context/Publisher';
import { useForm } from 'react-hook-form';
import { getPublisherById } from '../../services/Publisher';

const EditPublisher = () => {
    const { onEdit } = useContext(PublisherContext);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        (async () => {
            const publisher = await getPublisherById(param.id);
            reset({
                name: publisher.name,
              
            });
        })();
    }, [param.id, reset]);

    const onSubmit = async (publisher) => {
        await onEdit(publisher, param.id);
        navigate('/publishers');
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

export default EditPublisher;
