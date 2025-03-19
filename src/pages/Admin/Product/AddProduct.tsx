import { ChangeEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../../context/Product";
import { CategoryContext } from "../../../context/Category";
import { AuthorContext } from "../../../context/Author";
import { PublisherContext } from "../../../context/Publisher";
import { LanguageContext } from "../../../context/Language";
import { GenreContext } from "../../../context/Genre";
import { IProduct } from "../../../interfaces/Products";

const AddProduct = () => {
    const { onAdd } = useContext(ProductContext);
    const { categories } = useContext(CategoryContext);
    const { authors } = useContext(AuthorContext);
    const { publishers } = useContext(PublisherContext);
    const { languages } = useContext(LanguageContext);
    const { genres } = useContext(GenreContext);
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IProduct>();

    const [image, setImage] = useState<File | null>(null);
    const [images, setImages] = useState<File[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

    const handleGenreChange = (genreId: number) => {
        setSelectedGenres((prev) =>
            prev.includes(genreId)
                ? prev.filter((id) => id !== genreId) // Bỏ chọn nếu đã chọn trước đó
                : [...prev, genreId] // Thêm nếu chưa có trong danh sách
        );
    };


    // Xử lý chọn ảnh chính
    const handleMainImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]); // Chỉ lấy ảnh đầu tiên làm ảnh chính
        }
    };

    // Xử lý chọn ảnh bổ sung
    const handleAdditionalImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImages(Array.from(e.target.files)); // Chuyển FileList thành Array<File>
        }
    };
    console.log("Ảnh bổ sung sau khi chọn:", images);

    // Xóa ảnh đã chọn
    const handleRemoveImage = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };
    const onSubmit = async (formData: IProduct) => {
        const productData = {
            ...formData,
            genres: selectedGenres.filter((id) => typeof id === "number"), // ✅ Chỉ gửi danh sách ID của thể loại
            image,
            images,
        };
        console.log("🚀 Dữ liệu sản phẩm gửi đi:", productData);
        await onAdd(productData, reset);
        navigate("/admin/product");
    };


    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Thêm mới sản phẩm</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">
                {/* Cột 1 - Thông tin sản phẩm */}
                <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                    {[
                        { name: "title", label: "Tiêu đề" },
                        { name: "code", label: "Mã" },
                        { name: "supplier_name", label: "Tên nhà cung cấp" },
                        { name: "description", label: "Mô tả", type: "textarea" },
                    ].map(({ name, label, type }) => (
                        <div key={name}>
                            <label className="block text-gray-700 font-medium mb-1">{label}</label>
                            {type === "textarea" ? (
                                <textarea rows={5} {...register(name as keyof IProduct, { required: `${label} là bắt buộc` })} className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            ) : (
                                <input {...register(name as keyof IProduct, { required: `${label} là bắt buộc` })} className="w-full p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            )}
                            {errors[name as keyof IProduct] && (
                                <span className="text-red-500 text-sm">{errors[name as keyof IProduct]?.message}</span>
                            )}
                        </div>
                    ))}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Thể loại</label>
                        <div className="grid grid-cols-2 gap-2">
                            {genres.map((genre: any) => (
                                <label key={genre.id} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        value={genre.id}
                                        checked={selectedGenres.includes(genre.id)}
                                        onChange={() => handleGenreChange(genre.id)}
                                    />
                                    <span>{genre.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Cột 2 - Lựa chọn và hình ảnh */}
                <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
                    {[
                        { name: "author_id", label: "Tác giả", options: authors },
                        { name: "publisher_id", label: "Nhà xuất bản", options: publishers },
                        { name: "language_id", label: "Ngôn ngữ", options: languages },
                        { name: "category_id", label: "Danh mục", options: categories },
                        // { name: "genres", label: "Thể loại", options: genres },
                    ].map(({ name, label, options }) => (
                        <div key={name}>
                            <label className="block text-gray-700 font-medium mb-1">{label}</label>
                            <select {...register(name as keyof IProduct, { required: `${label} là bắt buộc` })} className="w-full p-2 border rounded-lg">
                                <option value="">Chọn {label}</option>
                                {options.map((option: any) => (
                                    <option key={option.id} value={option.id}>{option.name}</option>
                                ))}
                            </select>
                            {errors[name as keyof IProduct] && (
                                <span className="text-red-500 text-sm">{errors[name as keyof IProduct]?.message}</span>
                            )}
                        </div>
                    ))}

                    {/* Ảnh chính */}
                    <div>
                        <h3 className="text-xl font-semibold">Ảnh chính</h3>
                        <input type="file" onChange={handleMainImageChange} className="w-full p-2 border border-gray-300 rounded-lg" />
                        {image && (
                            <div className="mt-2 flex items-center gap-4">
                                <span>{image.name}</span>
                                <button
                                    onClick={() => setImage(null)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    X
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Ảnh bổ sung */}
                    <div>
                        <h3 className="text-xl font-semibold">Hình ảnh bổ sung</h3>
                        <input type="file" multiple onChange={handleAdditionalImagesChange} className="w-full p-2 border border-gray-300 rounded-lg" />
                        <div className="mt-4 space-y-2">
                            {images.map((image, index) => (
                                <div key={index} className="flex items-center justify-between p-2 border rounded-lg">
                                    <span>{image.name}</span>
                                    <button
                                        onClick={() => handleRemoveImage(index)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                    >
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Nút hành động */}
                <div className="w-full text-center col-span-2 flex justify-center gap-4">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Quay lại
                    </button>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Thêm Sản phẩm
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
