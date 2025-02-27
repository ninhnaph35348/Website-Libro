import { useState, ChangeEvent } from "react";

interface FormData {
    code: string;
    title: string;
    price: string;
    promotion: string;
    quantity: string;
    supplier_name: string;
    author_id: string;
    publisher_id: string;
    language_id: string;
    category_id: string;
    genres: string[];
}

const AddProduct = () => {
    const [formData, setFormData] = useState<FormData>({
        code: "",
        title: "",
        price: "",
        promotion: "",
        quantity: "",
        supplier_name: "",
        author_id: "",
        publisher_id: "",
        language_id: "",
        category_id: "",
        genres: [],
    });
    const [images, setImages] = useState<File[]>([]);
    const [additionalImages, setAdditionalImages] = useState<File[]>([]);
    const [availableOptions] = useState({
        authors: ["Author 1", "Author 2", "Author 3"],
        publishers: ["Publisher 1", "Publisher 2", "Publisher 3"],
        languages: ["English", "French", "Spanish"],
        categories: ["Fiction", "Non-fiction", "Science", "History"],
        genres: ["Action", "Drama", "Fantasy", "Horror"],
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleGenreChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            genres: checked ? [...prev.genres, value] : prev.genres.filter((g) => g !== value),
        }));
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>, setImageFunc: React.Dispatch<React.SetStateAction<File[]>>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            setImageFunc((prevImages) => [...prevImages, ...files]);
        }
    };

    const handleRemoveImage = (index: number, setImageFunc: React.Dispatch<React.SetStateAction<File[]>>, imagesList: File[]) => {
        setImageFunc(imagesList.filter((_, i) => i !== index));
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Create New Product</h2>
            <div className="grid grid-cols-2 gap-6">
                <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
                    {[...Object.keys(formData)].map((field) => {
                        if (field === "genres") return null;
                        const fieldObj = availableOptions[field as keyof typeof availableOptions] || null;
                        return (
                            <div key={field}>
                                <label className="block text-gray-700 font-medium mb-1">{field}</label>
                                {fieldObj ? (
                                    <select
                                        name={field}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select {field}</option>
                                        {fieldObj.map((option, index) => (
                                            <option key={index} value={option}>{option}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type={field === "price" || field === "promotion" || field === "quantity" ? "number" : "text"}
                                        name={field}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    />
                                )}
                            </div>
                        );
                    })}
                </form>
                <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Genres</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {availableOptions.genres.map((genre, index) => (
                            <label key={index} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    value={genre}
                                    checked={formData.genres.includes(genre)}
                                    onChange={handleGenreChange}
                                    className="w-4 h-4"
                                />
                                <span>{genre}</span>
                            </label>
                        ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Upload Images</h3>
                    <input type="file" multiple onChange={(e) => handleImageChange(e, setImages)} className="w-full p-2 border border-gray-300 rounded-lg" />
                    <div className="mt-4 space-y-2">
                        {images.map((image, index) => (
                            <div key={index} className="flex items-center justify-between p-2 border rounded-lg">
                                <span>{image.name}</span>
                                <button
                                    onClick={() => handleRemoveImage(index, setImages, images)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Additional Images</h3>
                    <input type="file" multiple onChange={(e) => handleImageChange(e, setAdditionalImages)} className="w-full p-2 border border-gray-300 rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
