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

  // Kiểm tra trạng thái đăng nhập khi trang được tải lại
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "true") {
      setIsLoggedIn(true); // Nếu đã đăng nhập trước đó, set isLoggedIn là true
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
    setIsLoggedIn(true);
    setHasReceivedVoucher(true); // Đánh dấu đã nhận voucher
    setIsLoginOpen(false); // Đóng popup đăng nhập

    // Chuyển hướng sang trang login sau khi đăng nhập thành công
    navigate("/login");
  };

  // Hiển thị thông báo nhận voucher sau khi đăng nhập thành công
  useEffect(() => {
    if (isLoggedIn && !hasReceivedVoucher) {
      toast.success("Đăng nhập thành công! Bạn đã nhận được voucher CHAOMUNG!");
      setHasReceivedVoucher(true); // Đảm bảo chỉ nhận voucher 1 lần
    }
  }, [isLoggedIn, hasReceivedVoucher]);

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
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

        {/* Hiển thị "Đăng nhập ngay nhận voucher" khi chưa đăng nhập */}
        {!isLoggedIn && !hasReceivedVoucher && (
          <div className="text-white text-2xl text-center">
            <p className="animate-pulse">Đăng nhập ngay để nhận voucher!</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
              onClick={handleLogin} // Giả lập đăng nhập
            >
              Đăng Nhập
            </button>
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
