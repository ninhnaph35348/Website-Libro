import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../../interfaces/User";
import { fetchUser } from "../../../store/auth/authSlice";
import { RootState } from "../../../store/auth/store";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user) as IUser | null;
  const ordersCount = 0; 
  const loading = useSelector((state: RootState) => state.auth.loading);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser() as any);
    }
  }, [dispatch, user]);

  if (loading) return <p>Đang tải thông tin người dùng...</p>;
  if (!user) return <p>Không có dữ liệu người dùng</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            {/* Avatar */}
            {user.avatar ? (
              <img
                src={`http://127.0.0.1:8000/storage/${user.avatar}`}
                alt="Avatar"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <span className="text-xl font-bold">{user.username?.[0]}</span>
            )}
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold">Thông tin tài khoản</h2>
            <p className="text-sm">Thành viên Bạc</p>
          </div>
        </div>
      </div>
      {/* User Info Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-500">Số đơn hàng</p>
          <p className="text-lg font-semibold">{ordersCount} đơn hàng</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Đã thanh toán</p>
          <p className="text-lg font-semibold">0 đ</p>
        </div>
      </div>

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
            value={user.birth_date ? dayjs(user.birth_date).format("DD/MM/YYYY") : ""}
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
      
    </div>
  );
};

export default Profile;
