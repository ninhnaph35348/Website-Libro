import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Language = () => {
  const [languages, setLanguages] = useState([
    { id: 1, name: "Tiếng Việt" },
    { id: 2, name: "Tiếng Anh" }
  ]);
 
  const navigate = useNavigate();

  const deleteLanguage = (id) => {
    setLanguages(languages.filter(lang => lang.id !== id));
  };

  return (
    <div className="p-6 w-full bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Quản lý Ngôn Ngữ</h2>
      <div className="mt-4 py-[12px]">
        <Link to="/languages/add-languages" className="bg-blue-500 text-white px-4 py-2 rounded">
          Thêm Ngôn Ngữ
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
          {languages.map(lang => (
            <tr key={lang.id} className="border">
              <td className="border p-2">{lang.id}</td>
              <td className="border p-2">{lang.name}</td>
              <td className="border p-2 flex gap-2">
                <button onClick={() => deleteLanguage(lang.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Xóa
                </button>
                <button onClick={() => navigate(`/languages/edit/${lang.id}`)} className="bg-yellow-500 text-white px-2 py-1 rounded">Sửa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Language;
