import { useContext } from "react";
import { LanguageContext } from "../../context/Language";
import { Link } from "react-router-dom";

const Languages = () => {
    const { languages, onDelete } = useContext(LanguageContext);

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Danh Sách Ngôn Ngữ</h2>
            <Link to="/languages/add" className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">
                Thêm Ngôn Ngữ
            </Link>
            <table className="w-full border-collapse border border-gray-200 mt-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Tên</th>
                        <th className="border p-2">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {languages.map((language) => (
                        <tr key={language.id}>
                            <td className="border p-2 text-center">{language.id}</td>
                            <td className="border p-2">{language.name}</td>
                            <td className="border p-2 text-center">
                                <Link to={`/languages/edit/${language.id}`} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                                    Sửa
                                </Link>
                                <button
                                    onClick={() => onDelete(language.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Languages;
