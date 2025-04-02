import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IUser } from "../../../interfaces/User";
import { RootState } from "../../../store/auth/store";
import { fetchUser, updateUser } from "../../../store/auth/authSlice";
import { districts, provinces, wards } from "../../../data/provinces"; // Thêm wards vào import

const EditProfile: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user) as IUser | null;
  const loading = useSelector((state: RootState) => state.auth.loading);
  const [userData, setUserData] = useState<IUser | null>(null);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser() as any);
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "birth_date") {
      setUserData({
        ...userData!,
        birth_date: value, // Lưu ngày sinh vào state
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
        district: "", // Reset district and ward when province changes
        ward: "",
        address: `${selectedProvince?.name || ""}`
      });
    } else if (name === "district") {
      const selectedDistrict = districts.find((d) => d.code === value);
      setUserData({
        ...userData!,
        district: value,
        ward: "", // Reset ward when district changes
        address: `${userData?.province ? provinces.find(p => p.code === userData?.province)?.name : ""}, ${selectedDistrict?.name || ""}`
      });

    } else if (name === "ward") {
      setUserData({
        ...userData!,
        ward: value,
        address: `${userData?.province ? provinces.find(p => p.code === userData?.province)?.name : ""}, ${userData?.district ? districts.find(d => d.code === userData?.district)?.name : ""}, ${wards.find(w => w.code === value)?.name || ""}`
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

  if (loading) return <p>Đang tải thông tin người dùng...</p>;

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-4xl">
    <h2 className="text-3xl font-bold mb-6">Chỉnh sửa thông tin cá nhân</h2>
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
      <div>
        <label className="block text-sm font-medium">Tỉnh/Thành phố:</label>
        <select name="province" value={userData?.province || ""} onChange={handleChange} className="w-full p-3 border rounded">
          <option value="">Chọn tỉnh/thành phố</option>
          {provinces.map((province) => (
            <option key={province.code} value={province.code}>{province.name}</option>
          ))}
        </select>
      </div>
  
      {/* Huyện/Quận */}
      <div>
        <label className="block text-sm font-medium">Huyện/Quận:</label>
        <select name="district" value={userData?.district || ""} onChange={handleChange} className="w-full p-3 border rounded" disabled={!userData?.province}>
          <option value="">Chọn huyện/quận</option>
          {districts.filter(d => d.provinceCode === userData?.province).map(d => (
            <option key={d.code} value={d.code}>{d.name}</option>
          ))}
        </select>
      </div>
  
      {/* Xã/Phường */}
      <div className="col-span-2">
        <label className="block text-sm font-medium">Xã/Phường:</label>
        <select name="ward" value={userData?.ward || ""} onChange={handleChange} className="w-full p-3 border rounded" disabled={!userData?.district}>
          <option value="">Chọn xã/phường</option>
          {wards.filter(w => w.districtCode === userData?.district).map(w => (
            <option key={w.code} value={w.code}>{w.name}</option>
          ))}
        </select>
      </div>
    </div>
  
    <div className="flex justify-end gap-4 mt-6">
      <button onClick={handleSave} className="px-5 py-3 bg-blue-500 text-white rounded">Lưu</button>
      <button onClick={() => navigate("/profile/accout")} className="px-5 py-3 bg-gray-300 rounded">Hủy</button>
    </div>
  </div>
  
  );
};

export default EditProfile;