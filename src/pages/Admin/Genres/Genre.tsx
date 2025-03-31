import { useContext, useEffect, useState } from "react";
import { GenreContext } from "../../../context/Genre";
import { Link, useNavigate } from "react-router-dom";
import { IGenre } from "../../../interfaces/Genre";

const Genres = () => {
    const { genres, getAllGenries, onDelete } = useContext(GenreContext);
    const navigate = useNavigate();
    useEffect(() => {
        getAllGenries();
    }, []);

    // Phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Tính tổng số trang
    const totalPages = Math.ceil(genres.length / itemsPerPage);

    // Lấy thể loại theo trang hiện tại
    const paginatedGenres = genres.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Xử lý chuyển trang
    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Danh Sách Thể Loại</h2>
            <div className="mb-4">
                <Link to="add" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Thêm Thể Loại
                </Link>
            </div>
            <table className="w-full border-collapse border border-gray-200 mt-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">STT</th>
                        <th className="border p-2">Tên</th>
                        <th className="border p-2">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedGenres.length > 0 ? (
                        paginatedGenres.map((genre: IGenre, index: number) => (
                            <tr key={genre.id ?? index}>
                                <td className="border p-2 text-center">{(currentPage - 1) * itemsPerPage + index + 1}</td>
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
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3} className="text-center p-4 text-gray-500">
                                Không có thể loại nào!
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Điều hướng phân trang */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                    {/* Nút Trước */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={`px-4 py-2 rounded-full border shadow-md transition-all duration-300 
                                    ${currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:scale-105"}`}
                        disabled={currentPage === 1}
                    >
                        ◀ Trước
                    </button>

                    {/* Các số trang */}
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 rounded-full border shadow-md transition-all duration-300 font-semibold
                                        ${currentPage === index + 1 ? "bg-blue-500 text-white scale-110 shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105"}`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    {/* Nút Tiếp */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={`px-4 py-2 rounded-full border shadow-md transition-all duration-300 
                                    ${currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:scale-105"}`}
                        disabled={currentPage === totalPages}
                    >
                        Tiếp ▶
                    </button>
                </div>
            )}
        </div>
    );
};

export default Genres;