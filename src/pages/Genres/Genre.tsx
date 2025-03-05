import { useContext } from "react";
import { GenreContext } from "../../context/Genre";
import { Link } from "react-router-dom";
import { IGenre } from "../../interfaces/Genre";

const Genres = () => {
    const { genres, onDelete } = useContext(GenreContext);

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Danh Sách Thể Loại</h2>
            <Link to="/genres/add" className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">
                Thêm Thể Loại
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
                    {genres.map((genre: IGenre) => (
                        <tr key={genre.id}>
                            <td className="border p-2 text-center">{genre.id}</td>
                            <td className="border p-2">{genre.name}</td>
                            <td className="border p-2 text-center">
                                <Link to={`/genres/edit/${genre.id}`} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                                    Sửa
                                </Link>
                                <button
                                    onClick={() => onDelete(genre.id)}
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

export default Genres;
