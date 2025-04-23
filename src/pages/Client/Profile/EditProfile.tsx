import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../../store/auth/store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IUser } from "../../../interfaces/User";
import { RootState } from "../../../store/auth/store";
import { fetchUser, updateUser, updateAvatar } from "../../../store/auth/authSlice";
import { districts, provinces, wards } from "../../../data/provinces";

const EditProfile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user) as IUser | null;
  const loading = useSelector((state: RootState) => state.auth.loading);
  const [userData, setUserData] = useState<IUser | null>(null);
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser() as any);
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user) {
      setUserData(user);
      setAvatarPreview(user?.avatar ? `http://127.0.0.1:8000/storage/${user.avatar}` : null);
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "birth_date") {
      setUserData({
        ...userData!,
        birth_date: value,
      });
    } else {
      setUserData({
        ...userData!,
        [name]: value,
      });
    }

    if (name === "province") {
      const selectedProvince = provinces.find((p) => p.code === value);
      setUserData({
        ...userData!,
        province: value,
        district: "",
        ward: "",
        address: `${selectedProvince?.name || ""}`,
      });
    } else if (name === "district") {
      const selectedDistrict = districts.find((d) => d.code === value);
      setUserData({
        ...userData!,
        district: value,
        ward: "",
        address: `${userData?.province ? provinces.find(p => p.code === userData?.province)?.name : ""}, ${selectedDistrict?.name || ""}`,
      });
    } else if (name === "ward") {
      setUserData({
        ...userData!,
        ward: value,
        address: `${userData?.province ? provinces.find(p => p.code === userData?.province)?.name : ""}, ${userData?.district ? districts.find(d => d.code === userData?.district)?.name : ""}, ${wards.find(w => w.code === value)?.name || ""}`,
      });
    } else {
      setUserData({
        ...userData!,
        [name]: value,
      });
    }
  };

  const handleSave = () => {
    if (userData) {
      dispatch(updateUser(userData));
      toast.success("Cập nhật thông tin thành công!", { position: "top-right", autoClose: 3000 });
      setTimeout(() => navigate("/profile"), 2000);
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    
    if (file) {
      // Cập nhật preview ảnh ngay lập tức
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file)); // Tạo URL cho file ảnh mới
    } else {
      console.error("Không có file được chọn!");
    }
  };
  
  const handleAvatarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!avatar) return;
  
    const formData = new FormData();
    formData.append("avatar", avatar); // Thêm file ảnh vào FormData
  
    try {
      // Kiểm tra xem userData có sẵn không trước khi tiếp tục
      if (!userData) {
        toast.error("Không có thông tin người dùng.");
        return;
      }
  
      // Gửi FormData lên backend để cập nhật avatar
      const response = await dispatch(updateAvatar(formData)); // Thực hiện API gọi
  
      const updatedUser = response.payload.user; // Nhận lại thông tin người dùng từ backend
  
      // Kiểm tra nếu có avatar mới
      if (updatedUser.avatar) {
        // Cập nhật lại preview ảnh avatar từ server
        setAvatarPreview(`http://127.0.0.1:8000/storage/${updatedUser.avatar}`);
      }
  
      // Cập nhật lại dữ liệu người dùng với ảnh mới
      setUserData(updatedUser);
  
      toast.success("Cập nhật avatar thành công!");
      setAvatar(null); // Reset avatar sau khi cập nhật
    } catch (error) {
      toast.error("Có lỗi xảy ra khi cập nhật avatar.");
      console.error(error);
    }
  };
  
  
  
  

  if (loading) return <p>Đang tải thông tin người dùng...</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Chỉnh sửa thông tin cá nhân</h2>

      {/* Cập nhật ảnh đại diện */}
      <form onSubmit={handleAvatarSubmit} className="mb-6">
  <div className="relative w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
    {avatarPreview ? (
      <img
        src={avatarPreview}
        alt="Avatar Preview"
        className="w-full h-full object-cover rounded-full"
      />
    ) : (
      <img
        src={userData?.avatar ? `http://127.0.0.1:8000/storage/${userData.avatar}` : '/default-avatar.png'}
        alt="Avatar"
        className="w-full h-full object-cover rounded-full"
      />
    )}
    <input
      type="file"
      accept="image/*"
      onChange={handleAvatarChange}
      className="absolute bottom-0 right-0 w-6 h-6 opacity-0 cursor-pointer hover:bg-gray-400"
      title="Chọn ảnh"
    />
  </div>

  {avatar && (
    <div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
      >
        Cập nhật Avatar
      </button>
    </div>
  )}
</form>




      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Username:</label>
          <input type="text" value={userData?.username} disabled className="w-full p-3 border rounded bg-gray-100" />
        </div>
        <div>
          <label className="block text-sm font-medium">Họ và tên:</label>
          <input type="text" name="fullname" value={userData?.fullname || ""} onChange={handleChange} className="w-full p-3 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email:</label>
          <input type="email" value={userData?.email} disabled className="w-full p-3 border rounded bg-gray-100" />
        </div>
        <div>
          <label className="block text-sm font-medium">Số điện thoại:</label>
          <input type="text" name="phone" value={userData?.phone || ""} onChange={handleChange} className="w-full p-3 border rounded" />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Địa chỉ:</label>
          <input type="text" name="address" value={userData?.address || ""} onChange={handleChange} className="w-full p-3 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Ngày sinh:</label>
          <input 
            type="date" 
            name="birth_date" 
            value={userData?.birth_date || ""} 
            onChange={handleChange} 
            className="w-full p-3 border rounded" 
          />
        </div>

        {/* Tỉnh/Thành phố */}
        {/* <div>
          <label className="block text-sm font-medium">Tỉnh/Thành phố:</label>
          <select name="province" value={userData?.province || ""} onChange={handleChange} className="w-full p-3 border rounded">
            <option value="">Chọn tỉnh/thành phố</option>
            {provinces.map((province) => (
              <option key={province.code} value={province.code}>{province.name}</option>
            ))}
          </select>
        </div> */}
    
        {/* Huyện/Quận */}
        {/* <div>
          <label className="block text-sm font-medium">Huyện/Quận:</label>
          <select name="district" value={userData?.district || ""} onChange={handleChange} className="w-full p-3 border rounded" disabled={!userData?.province}>
            <option value="">Chọn huyện/quận</option>
            {districts.filter(d => d.provinceCode === userData?.province).map(d => (
              <option key={d.code} value={d.code}>{d.name}</option>
            ))}
          </select>
        </div> */}
    
        {/* Xã/Phường */}
        {/* <div className="col-span-2">
          <label className="block text-sm font-medium">Xã/Phường:</label>
          <select name="ward" value={userData?.ward || ""} onChange={handleChange} className="w-full p-3 border rounded" disabled={!userData?.district}>
            <option value="">Chọn xã/phường</option>
            {wards.filter(w => w.districtCode === userData?.district).map(w => (
              <option key={w.code} value={w.code}>{w.name}</option>
            ))}
          </select>
        </div> */}
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button onClick={handleSave} className="px-5 py-3 bg-blue-500 text-white rounded">Lưu</button>
      </div>
    </div>
  );
};

export default EditProfile;
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { IUser } from "../../../interfaces/User";
// import { RootState } from "../../../store/auth/store";
// import { fetchUser, updateUser, updateAvatar } from "../../../store/auth/authSlice";

// import { provinces, districts, wards } from "../../../data/provinces"; // Import dữ liệu tỉnh/thành phố, huyện/quận, xã/phường
//
// const EditProfile: React.FC = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();