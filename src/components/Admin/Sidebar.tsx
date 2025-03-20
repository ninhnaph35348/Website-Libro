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
  Shield,
  User,
  Star,
  Truck,
} from "lucide-react";

const Sidebar = ({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: (c: boolean) => void }) => {
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [functionDropdownOpen, setFunctionDropdownOpen] = useState(false);

  const menuItems = useMemo(
    () => [
      { path: "/admin", label: "Trang Chủ", icon: Home },
      { path: "/admin/product", label: "Sản Phẩm", icon: Book },
      { path: "/admin/category", label: "Danh Mục", icon: Library },
      { path: "/admin/order", label: "Đơn Hàng", icon: ListOrdered },
    ],
    []
  );

  const accountDropdown = useMemo(
    () => [
      { path: "/admin/user-admin", label: "Tài Khoản Quản Trị", icon: Shield },
      { path: "/admin/user-customer", label: "Tài Khoản Khách Hàng", icon: User },
    ],
    []
  );

  const functionDropdown = useMemo(
    () => [
      { path: "/admin/author", label: "Tác Giả", icon: Pencil },
      { path: "/admin/publisher", label: "Nhà Xuất Bản", icon: Users },
      { path: "/admin/languages", label: "Ngôn Ngữ", icon: Globe },
      { path: "/admin/genres", label: "Thể Loại", icon: Layers },
      { path: "/admin/orderstatus", label: "Trạng thái", icon: Truck },
    ],
    []
  );

  const renderMenuItem = (item: any) => (
    <li key={item.path} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
      <Link to={item.path} className="flex items-center text-white">
        <item.icon className="w-5 h-5" />
        {!collapsed && <span className="ml-3">{item.label}</span>}
      </Link>
    </li>
  );

  const renderDropdown = (label: string, icon: any, items: any[], isOpen: boolean, setIsOpen: any) => (
    <>
      <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-white">
            <icon className="w-5 h-5" />
            {!collapsed && <span className="ml-3">{label}</span>}
          </div>
          {!collapsed && <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />}
        </div>
      </li>
      {isOpen && !collapsed && (
        <ul className="pl-8">{items.map(renderMenuItem)}</ul>
      )}
    </>
  );

  return (
    <aside className={`fixed left-0 h-full bg-gray-800 text-white ${collapsed ? "w-16" : "w-64"} transition-all duration-300 z-30`}>
      <div className="h-16 flex items-center px-4 bg-gray-900">
        <span className={`font-bold text-xl ${collapsed ? "hidden" : "block"}`}>Dashboard</span>
        <Menu className="w-6 h-6 ml-auto cursor-pointer" onClick={() => setCollapsed(!collapsed)} />
      </div>

      <nav className="py-4">
        <ul>
          {menuItems.map(renderMenuItem)}
          {renderDropdown("Tài Khoản", Users, accountDropdown, accountDropdownOpen, setAccountDropdownOpen)}
          {renderDropdown("Chức Năng", AlignJustify, functionDropdown, functionDropdownOpen, setFunctionDropdownOpen)}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
