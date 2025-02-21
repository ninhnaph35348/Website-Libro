
const Notfound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white">
          <h1 className="text-9xl font-extrabold drop-shadow-lg">404</h1>
          <p className="text-2xl mt-4 drop-shadow-md">Oops! Trang bạn đang tìm không tồn tại.</p>
          <a href="/" className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300">Quay về trang chủ</a>
        </div>
      );
}

export default Notfound