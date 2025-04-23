import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/auth/store";
import { Link, useNavigate } from "react-router-dom";
import { updatePassword } from "../../../store/auth/authSlice"; // Assuming you have an action for password update.
import { toast } from "react-toastify";

const ChangePasswordAdmin: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Local state for form fields
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Mật khẩu mới và xác nhận mật khẩu không khớp.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log("Current password:", currentPassword); // Debug
      console.log("New password:", newPassword); // Debug
      console.log("Confirm password:", confirmPassword); // Debug

      // Dispatch the action to update password
      await dispatch(
        updatePassword({
          currentPassword,
          newPassword,
          newPasswordConfirmation: confirmPassword,
        })
      );

      // Nếu cập nhật thành công
      toast.success("đổi mật khẩu thành công");
      setTimeout(() => navigate("/admin/profile-admin"), 2000);
    } catch (err: any) {
      // Kiểm tra lỗi trả về từ backend
      if (err.response && err.response.status === 401) {
        // Lỗi mật khẩu cũ không đúng
        setError(err.response.data.message); // Hiển thị thông báo lỗi từ backend
      } else {
        // Lỗi khác
        setError("Đổi mật khẩu thất bại. Vui lòng thử lại.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Đổi mật khẩu</h2>
      </div>

      {/* Display Error */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Password Change Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">
            Mật khẩu hiện tại:
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Mật khẩu mới:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Xác nhận mật khẩu mới:
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className={`px-4 py-2 ${
              loading ? "bg-gray-400" : "bg-green-500"
            } text-white rounded`}
            disabled={loading}
          >
            {loading ? "Đang xử lý..." : "Đổi mật khẩu"}
          </button>
        </div>
      </form>

      <div className="mt-4">
        <Link to="/admin/profile-admin" className="text-sm text-blue-600">
          Quay lại trang thông tin tài khoản
        </Link>
      </div>
    </div>
  );
};

export default ChangePasswordAdmin;
