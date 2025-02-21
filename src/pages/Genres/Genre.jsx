import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Genre = () => {
  const [genres, setGenres] = useState([
    { id: 1, name: "Tiểu thuyết" },
    { id: 2, name: "Khoa học" }
  ]);

  const navigate = useNavigate();

  const deleteGenre = (id) => {
    setGenres(genres.filter(gen => gen.id !== id));
  };

  return (
    <div className="p-6 w-full bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Quản lý Thể Loại</h2>
      <div className="mt-4 py-[12px]">
        <Link to="/genres/add-genres" className="bg-blue-500 text-white px-4 py-2 rounded">
          Thêm Thể Loại
        </Link>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className='border p-2'>ID</th>
            <th className="border p-2">Tên</th>
            <th className="border p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {genres.map(gen => (
            <tr key={gen.id} className="border">
              <td className="border p-2">{gen.id}</td>
              <td className="border p-2">{gen.name}</td>
              <td className="border p-2 flex gap-2">
              <button onClick={() => deleteGenre(gen.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Xóa
                </button>
              <button onClick={() => navigate(`/languages/edit/${gen.id}`)} className="bg-yellow-500 text-white px-2 py-1 rounded">Sửa</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Genre;
