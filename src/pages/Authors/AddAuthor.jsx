import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddAuthor = ({ onAdd  }) => {
  const [newAuthor, setNewAuthor] = useState({ name: "" });
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!newAuthor.name) return;
    onAdd({ id: Date.now(), ...newAuthor });
    setNewAuthor({ name: "" });
    navigate('/admin/authors');
  };

  return (
    <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Thêm Nhà Xuất Bản</h2>
      
        <input className="w-full border p-2 mr-2 mb-2" type="text" placeholder="Tên nhà xuất bản" value={newAuthor.name} onChange={e => setNewAuthor({ name: e.target.value })} />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Thêm</button>
      
    </div>
  );
};

export default AddAuthor;
