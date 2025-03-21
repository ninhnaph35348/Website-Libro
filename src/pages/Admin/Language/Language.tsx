import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../../context/Language';
import { ILanguage } from '../../../interfaces/Language';

const Language = () => {
  const { languages, onDelete } = useContext(LanguageContext);

  const navigate = useNavigate();

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Quản lý Ngôn Ngữ</h2>
      <button onClick={() => navigate('add')} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Thêm Ngôn Ngữ
      </button>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">STT</th>
            <th className="border p-2">Tên</th>
            <th className="border p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {languages.map((lang: ILanguage, index: number) => (
            <tr key={lang.id ?? index} className="border">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{lang.name}</td>
              <td className="border p-2 flex gap-2 justify-center">
                <button onClick={() => onDelete(lang.id)} className="bg-red-500 text-white px-2 py-1 rounded">Xóa</button>
                <button onClick={() => navigate(`edit/${lang.id}`)} className="bg-yellow-500 text-white px-2 py-1 rounded">Sửa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Language;
