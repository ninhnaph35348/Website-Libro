import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Home,
  Book,
  CircleUserRound,
  ListOrdered,
  ChevronDown,
  Users,
  Globe,
  Layers,
  Library,
  AlignJustify,
  Pencil,
  Truck,
} from "lucide-react";

const Sidebar = ({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: (c: boolean) => void }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Danh sách menu chính
  const menuItems = useMemo(
    () => [
      { path: "/admin", label: "Trang Chủ", icon: Home },
      { path: "/admin/product", label: "Sản Phẩm", icon: Book },
      { path: "/admin/category", label: "Danh Mục", icon: Library },
      { path: "/admin/order", label: "Đơn Hàng", icon: ListOrdered },
      { path: "/admin/user", label: "Tài Khoản", icon: CircleUserRound },
    ],
    []
  );

  // Danh sách menu con (dropdown)
  const dropdownItems = useMemo(
    () => [
      { path: "/admin/author", label: "Tác Giả", icon: Pencil },
      { path: "/admin/publisher", label: "Nhà Xuất Bản", icon: Users },
      { path: "/admin/languages", label: "Ngôn Ngữ", icon: Globe },
      { path: "/admin/genres", label: "Thể Loại", icon: Layers },
      { path: "/admin/orderstatus", label: "Trạng thái", icon: Truck },
    ],
    []
  );

  return (
    <aside className={`side fixed left-0 h-full bg-gray-800 text-white ${collapsed ? "w-16" : "w-64"} transition-all duration-300 z-30 flex flex-col`}>
      {/* Header */}
      <div className="h-16 flex items-center px-4 bg-gray-900">
        {!collapsed && <span className="font-bold text-xl">Dashboard</span>}
        <Menu className="w-6 h-6 ml-auto cursor-pointer" onClick={() => setCollapsed(!collapsed)} />
      </div>

      {/* User Info */}
      <div className="p-4 border-b border-gray-700 flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-500"></div>
        {!collapsed && (
          <div className="ml-3">
            <div className="text-sm font-medium">Hchaos-Le-Ma</div>
            <div className="text-xs text-gray-400">Administrator</div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="py-4 flex-1 overflow-y-auto">
        <ul>
          {menuItems.map(({ path, label, icon: Icon }) => (
            <li key={path} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              <Link to={path} className="flex items-center">
                <Icon className="w-5 h-5" />
                {!collapsed && <span className="ml-3">{label}</span>}
              </Link>
            </li>
          ))}

          {/* Dropdown */}
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AlignJustify className="w-5 h-5" />
                {!collapsed && <span className="ml-3">Chức Năng</span>}
              </div>
              {!collapsed && (
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} aria-expanded={dropdownOpen} />
              )}
            </div>
          </li>

          {/* Dropdown Items */}
          {!collapsed && dropdownOpen && (
            <ul className="pl-8">
              {dropdownItems.map(({ path, label, icon: Icon }) => (
                <li key={path} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link to={path} className="flex items-center">
                    <Icon className="w-5 h-5" />
                    <span className="ml-3">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
