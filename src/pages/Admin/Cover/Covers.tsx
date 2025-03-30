import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ICover } from "../../../interfaces/Cover";
import { CoverContext } from "../../../context/Cover";

const Covers = () => {
    const { covers, onDelete } = useContext(CoverContext);
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
                    {covers.map((cover: ICover, index: number) => (
                        <tr key={index}>
                            <td className="border p-2 text-center">{index + 1}</td>
                            <td className="border p-2">{cover.type}</td>
                            <td className="border p-2 text-center flex gap-2 justify-center">
                                <button
                                    onClick={() => onDelete(cover.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Xóa
                                </button>
                                <button
                                    onClick={() => navigate(`edit/${cover.id}`)}
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

export default Covers;
