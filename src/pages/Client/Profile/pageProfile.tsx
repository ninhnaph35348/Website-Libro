import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { User, Lock, MapPin, Tag, Package } from "lucide-react";

const Sidebar = () => {
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(true);
  const [orderDropdownOpen, setOrderDropdownOpen] = useState(true);

  const accountItems = [
    { path: "/profile", label: "Hồ sơ cá nhân", icon: User },
    { path: "/profile/edit", label: "Chỉnh sửa thông tin", icon: MapPin },
    { path: "/profile/change-password", label: "Đổi mật khẩu", icon: Lock },

    {
      path: "/profile/voucher-client",
      label: "Khuyến mãi",
      icon: Tag,
    },
  ];

  const orderItems = [
    { path: "/profile/order_detail", label: "Đơn hàng của tôi", icon: Package },
  ];

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r h-full transition-all p-4">
        <nav>
          <ul>
            {/* Menu Thông tin tài khoản */}
            <li
              className="cursor-pointer"
              onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
            >
              <p className="font-semibold py-2 px-2">Thông tin tài khoản</p>
            </li>
            {accountDropdownOpen && (
              <ul className="pl-6">
                {accountItems.map((item) => (
                  <li
                    key={item.path}
                    className="py-2 flex items-center hover:bg-gray-100 px-2 rounded-md"
                  >
                    <Link to={item.path} className="flex items-center w-full">
                      <item.icon className="w-5 h-5" />
                      <span className="ml-3">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {/* Menu Đơn hàng */}
            <li
              className="cursor-pointer"
              onClick={() => setOrderDropdownOpen(!orderDropdownOpen)}
            >
              <p className="font-semibold py-2 px-2">Đơn hàng</p>
            </li>
            {orderDropdownOpen && (
              <ul className="pl-6">
                {orderItems.map((item) => (
                  <li
                    key={item.path}
                    className="py-2 flex items-center hover:bg-gray-100 px-2 rounded-md"
                  >
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
