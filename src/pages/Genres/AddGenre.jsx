import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddGenre = ({ onAdd }) => {
  const [newGenre, setNewGenre] = useState({ name: "",  });
  const navigate = useNavigate();

  const handleAddGenre = () => {
    if (!newGenre.name) return;
    onAdd({ id: Date.now(), ...newGenre });
    setNewGenre({ name: "" });
    navigate('/genres'); // Quay lại danh sách
  };

  return (
    <div className="p-6 w-full bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Thêm Thể Loại</h2>
      <input
        className="w-full border p-2 mb-2"
        type="text"
        placeholder="Tên thể loại"
        value={newGenre.name}
        onChange={e => setNewGenre({ ...newGenre, name: e.target.value })}
      />
    
      <button onClick={handleAddGenre} className="bg-blue-500 text-white px-4 py-2 rounded">
        Thêm
      </button>
    </div>
  );
};

export default AddGenre;
