import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <h1 className="text-9xl font-extrabold drop-shadow-lg">404</h1>
      <p className="text-2xl mt-4 drop-shadow-md">Oops! Trang bạn đang tìm không tồn tại.</p>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => navigate(-1)} // Quay lại trang trước đó
          className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-full shadow-lg hover:bg-gray-300 transition-all duration-300"
        >
          Quay lại
        </button>

        <a
          href="/"
          className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
        >
          Trang chủ
        </a>
      </div>
    </div>
  );
};

export default Notfound;
