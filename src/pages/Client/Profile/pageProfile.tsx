import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { User, Lock, MapPin, Tag, Gift, Package, Wallet } from "lucide-react";
import Profile from "./Profile"; // Import Profile component

const Sidebar = () => {
  const [accountDropdownOpen] = useState(true);
  const [orderDropdownOpen] = useState(true);

  const accountItems = [
    { path: "/profile", label: "Hồ sơ cá nhân", icon: User },
    { path: "/profile/edit", label: "Chỉnh sửa thông tin", icon: MapPin }, // Cập nhật đường dẫn
    { path: "/profile/change-password", label: "Đổi mật khẩu", icon: Lock },
    { path: "/invoice-info", label: "Thông tin xuất hóa đơn GTGT", icon: Tag },
  ];

  const orderItems = [
    { path: "/orders", label: "Đơn hàng của tôi", icon: Package },
  ];

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r h-full transition-all p-4">
        {/* <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <p className="font-semibold">Thành viên Bạc</p>
            <p className="text-sm text-gray-500">F-Point tích lũy 0</p>
          </div>
        </div> */}
        <nav>
          <ul>
            {/* Menu Thông tin tài khoản */}
           
            {accountDropdownOpen && (
              <ul className="pl-6">
                {accountItems.map((item) => (
                  <li key={item.path} className="py-2 flex items-center hover:bg-gray-100 px-2 rounded-md">
                    <Link to={item.path} className="flex items-center w-full">
                      <item.icon className="w-5 h-5" />
                      <span className="ml-3">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            
            {/* Menu Đơn hàng */}
            
            {orderDropdownOpen && (
              <ul className="pl-6">
                {orderItems.map((item) => (
                  <li key={item.path} className="py-2 flex items-center hover:bg-gray-100 px-2 rounded-md">
                    <Link to={item.path} className="flex items-center w-full">
                      <item.icon className="w-5 h-5" />
                      <span className="ml-3">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </ul>
        </nav>
      </aside>
      
      {/* Profile Section */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </div>
      
    </div>
  );
};

export default Sidebar;
