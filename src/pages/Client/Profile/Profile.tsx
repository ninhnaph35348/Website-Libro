import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../../interfaces/User";
import { RootState } from "../../../store/auth/store";
import { fetchUser, updateAvatar } from "../../../store/auth/authSlice";
import { Link } from "react-router-dom";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user) as IUser | null;
  const ordersCount = useSelector((state: RootState) => state.auth.ordersCount); // Lấy số đơn hàng từ store
  const loading = useSelector((state: RootState) => state.auth.loading);
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser() as any);
    }
  }, [dispatch, user]);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file)); // Display image preview
    }
  };

  const handleAvatarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!avatar) {
      return;
    }
    const formData = new FormData();
    formData.append("avatar", avatar);

    try {
      await dispatch(updateAvatar(formData)); // Dispatch action to upload the avatar
      alert("Cập nhật avatar thành công!");
    } catch (error) {
      alert("Có lỗi xảy ra khi cập nhật avatar.");
    }
  };

  if (loading) return <p>Đang tải thông tin người dùng...</p>;
  if (!user) return <p>Không có dữ liệu người dùng</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="relative w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            {/* Avatar */}
            {avatarPreview ? (
              <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover rounded-full" />
            ) : (
              <span className="text-xl font-bold">B</span>
            )}
            {/* Avatar Upload Button */}
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 text-white rounded-full"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold">Thông tin tài khoản</h2>
            <p className="text-sm">Thành viên Bạc</p>
          </div>
        </div>
        <button className="text-sm text-blue-600">Cập nhật thông tin ngay</button>
      </div>

      {/* Avatar Upload Form */}
      <form onSubmit={handleAvatarSubmit} className="mt-4">
        {avatar && (
          <div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Cập nhật Avatar
            </button>
          </div>
        )}
      </form>

      {/* User Info Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-500">Số đơn hàng</p>
          <p className="text-lg font-semibold">{ordersCount} đơn hàng</p> {/* Hiển thị số đơn hàng */}
        </div>
        <div>
          <p className="text-sm text-gray-500">Đã thanh toán</p>
          <p className="text-lg font-semibold">0 đ</p>
        </div>
      </div>

      {/* User Details Section */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Username:</label>
          <input
            type="text"
            value={user.username}
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Họ và tên:</label>
          <input
            type="text"
            value={user.fullname || ""}
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            value={user.email}
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Số điện thoại:</label>
          <input
            type="text"
            value={user.phone || ""}
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Ngày sinh:</label>
          <input
            type="text"
            value={user.birth_date || ""}
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Địa chỉ:</label>
          <input
            type="text"
            value={user.address || ""}
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        
        
      </div>
      

      {/* Edit Profile Button */}
      {/* <div className="mt-6">
        <Link
          to="/profile/edit"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Chỉnh sửa thông tin
        </Link>
      </div> */}

      {/* Change Password Button */}
      {/* <div className="mt-4">
        <Link
          to="/profile/change-password"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Đổi mật khẩu
        </Link>
      </div> */}
    </div>
  );
};

export default Profile;
