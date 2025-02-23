import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddLanguage = ({ onAdd }) => {
  const [newLanguage, setNewLanguage] = useState({ name: "" });
  const navigate = useNavigate();

  const handleAddLanguage = () => {
    if (!newLanguage.name.trim()) return;
    onAdd({ id: Date.now(), name: newLanguage.name });
    setNewLanguage({ name: "" });
    navigate('/languages'); // Quay lại danh sách
  };

  return (
    <div className="p-6 w-full bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Thêm Ngôn Ngữ</h2>
      <input
        className="w-full border p-2 mb-2"
        type="text"
        placeholder="Tên ngôn ngữ"
        value={newLanguage.name}
        onChange={e => setNewLanguage({ name: e.target.value })}
      />
      <button onClick={handleAddLanguage} className="bg-blue-500 text-white px-4 py-2 rounded">
        Thêm
      </button>
    </div>
  );
};

export default AddLanguage;
