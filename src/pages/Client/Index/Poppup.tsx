import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomePopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const [hasReceivedVoucher, setHasReceivedVoucher] = useState(false); // Trạng thái đã nhận voucher chưa
  const navigate = useNavigate();

  // Kiểm tra trạng thái đăng nhập và voucher khi trang được tải lại
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    const voucherStatus = localStorage.getItem("hasReceivedVoucher");
  
    const isLogged = loginStatus === "true";
    const hasVoucher = voucherStatus === "true";
  
    setIsLoggedIn(isLogged);
    setHasReceivedVoucher(hasVoucher);
  
    if (isLogged && !hasVoucher) {
      toast.success("Đăng nhập thành công! Bạn đã nhận được voucher CHAOMUNG!");
      localStorage.setItem("hasReceivedVoucher", "true");
      setHasReceivedVoucher(true);
      setIsOpen(false); // Tắt popup sau khi nhận voucher
    }
  
    if (isLogged && hasVoucher) {
      setIsOpen(false); // 👈 Tắt popup nếu đã đăng nhập và đã nhận
    }
  }, []);
  

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  const handlePopupClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleLogin = () => {
    // Giả lập đăng nhập và lưu trạng thái
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("hasReceivedVoucher", "false");
    setIsLoggedIn(true);
    setHasReceivedVoucher(false);
    setIsLoginOpen(false);
    setIsOpen(false); // 👈 Thêm dòng này để đóng popup
    navigate("/login");
  };
  

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="relative"
        onClick={handlePopupClick}
      >
        <button
          className="absolute top-2 right-2 text-white text-2xl"
          onClick={handleClosePopup}
        >
          ✖
        </button>

        {/* Hiển thị "Đăng nhập ngay nhận voucher" khi chưa đăng nhập */}
        {!isLoggedIn && !hasReceivedVoucher && (
          <div className="text-white text-2xl text-center">
<div className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg text-center w-96">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎁 Ưu đãi cho bạn</h2>
  <p className="text-gray-700 mb-4">Đăng nhập ngay để nhận voucher <strong>CHAOMUNG</strong> trị giá đặc biệt!</p>
  <button
    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
    onClick={handleLogin}
  >
    Đăng Nhập
  </button>
</div>

           
          </div>
        )}

        {/* Popup đăng nhập */}
        {isLoginOpen && !isLoggedIn && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-60">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-2xl text-center mb-4">Đăng Nhập</h2>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                onClick={handleLogin} // Giả lập đăng nhập
              >
                Đăng Nhập
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
