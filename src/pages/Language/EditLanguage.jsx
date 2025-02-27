import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LanguageContext } from '../../context/Language';
import { useForm } from 'react-hook-form';
import { getLanguageById } from '../../services/Language';

const EditLanguage = () => {
    const { onEdit } = useContext(LanguageContext);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        (async () => {
            const language = await getLanguageById(param.id);
            reset({
                name: language.name,
                description: language.description
            });
        })();
    }, [param.id, reset]);

    const onSubmit = async (language) => {
        await onEdit(language, param.id);
        navigate('/languages');
    };

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Sửa Ngôn Ngữ</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="w-full border p-2 mr-2 mb-2"
                    type="text"
                    placeholder="Tên ngôn ngữ"
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

export default EditLanguage;
