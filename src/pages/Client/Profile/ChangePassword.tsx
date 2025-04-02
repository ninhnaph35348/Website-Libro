import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updatePassword } from "../../../store/auth/authSlice"; // Assuming you have an action for password update.

const ChangePassword: React.FC = () => {
  const dispatch = useDispatch();
  
  // Local state for form fields
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
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

    // Assuming `updatePassword` is a redux action to handle password change logic.
    try {
      await dispatch(updatePassword({ currentPassword, newPassword })); // Dispatch the action to update password
      alert("Đổi mật khẩu thành công!");
    } catch (err) {
      setError("Đổi mật khẩu thất bại. Vui lòng thử lại.");
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
          <label className="block text-sm font-medium">Mật khẩu hiện tại:</label>
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
          <label className="block text-sm font-medium">Xác nhận mật khẩu mới:</label>
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
            className={`px-4 py-2 ${loading ? "bg-gray-400" : "bg-green-500"} text-white rounded`}
            disabled={loading}
          >
            {loading ? "Đang xử lý..." : "Đổi mật khẩu"}
          </button>
        </div>
      </form>

      <div className="mt-4">
        <Link to="/profile" className="text-sm text-blue-600">
          Quay lại trang thông tin tài khoản
        </Link>
      </div>
    </div>
  );
};

export default ChangePassword;
