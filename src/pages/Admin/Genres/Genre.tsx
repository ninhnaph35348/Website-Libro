import { useContext } from "react";
import { GenreContext } from "../../../context/Genre";
import { Link, useNavigate } from "react-router-dom";
import { IGenre } from "../../../interfaces/Genre";

const Genres = () => {
    const { genres, onDelete } = useContext(GenreContext);
    const navigate = useNavigate();

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Danh Sách Thể Loại</h2>
            <Link to="add" className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                Thêm Thể Loại
            </Link>
            <table className="w-full border-collapse border border-gray-200 mt-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">STT</th>
                        <th className="border p-2">Tên</th>
                        <th className="border p-2">Hành động</th>
                    </tr>
                </thead>
                <tbody>
    {genres.map((genre: IGenre , index: number) => (
        <tr key={genre.id ?? index}>
            <td className="border p-2 text-center">{index + 1}</td>
            <td className="border p-2">{genre.name}</td>
            <td className="border p-2 text-center flex gap-2 justify-center">
                <button 
                    onClick={() => onDelete(genre.id)} 
                    className="bg-red-500 text-white px-2 py-1 rounded"
                >
                    Xóa
                </button>
                <button 
                    onClick={() => navigate(`edit/${genre.id}`)} 
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                    Sửa
                </button>
            </td>
        </tr>
    ))}
</tbody>
            </table>
        </div>
    );
};

export default Genres;
