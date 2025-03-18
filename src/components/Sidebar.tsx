import { useState } from "react";
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
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({ collapsed, setCollapsed }: any) => {
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [functionDropdownOpen, setFunctionDropdownOpen] = useState(false);

  return (
    <aside
      className={`fixed left-0 h-full bg-gray-800 text-white ${
        collapsed ? "w-16" : "w-64"
      } transition-all duration-300 z-30`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-4 bg-gray-900">
        <span className={`font-bold text-xl ${collapsed ? "hidden" : "block"}`}>
          Dashboard
        </span>
        <Menu
          className="w-6 h-6 ml-auto cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      {/* Navigation */}
      <nav className="py-4">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/admin" className="flex items-center text-white">
              <Home className="w-5 h-5" />
              {!collapsed && <span className="ml-3">Trang Chủ</span>}
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/admin/category" className="flex items-center text-white">
              <Library className="w-5 h-5" />
              {!collapsed && <span className="ml-3">Danh Mục</span>}
            </Link>
          </li>

          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/admin/product" className="flex items-center text-white">
              <Book className="w-5 h-5" />
              {!collapsed && <span className="ml-3">Sản Phẩm</span>}
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/admin/order" className="flex items-center text-white">
              <ListOrdered className="w-5 h-5" />
              {!collapsed && <span className="ml-3">Đơn Hàng</span>}
            </Link>
          </li>

          {/* Dropdown Tài Khoản */}
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center text-white">
                <Users className="w-5 h-5" />
                {!collapsed && <span className="ml-3">Tài Khoản</span>}
              </div>
              {!collapsed && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    accountDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>
          </li>
          {accountDropdownOpen && !collapsed && (
            <ul className="pl-8">
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link
                  to="/admin/user-admin"
                  className="flex items-center text-white"
                >
                  <Shield className="w-5 h-5" />
                  <span className="ml-3">Tài Khoản Quản Trị</span>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link
                  to="/admin/customer-accounts"
                  className="flex items-center text-white"
                >
                  <User className="w-5 h-5" />
                  <span className="ml-3">Tài Khoản Khách Hàng</span>
                </Link>
              </li>
            </ul>
          )}

          {/* Dropdown Chức Năng */}
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => setFunctionDropdownOpen(!functionDropdownOpen)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center text-white">
                <AlignJustify className="w-5 h-5" />
                {!collapsed && <span className="ml-3">Chức Năng</span>}
              </div>
              {!collapsed && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    functionDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>
          </li>
          {functionDropdownOpen && !collapsed && (
            <ul className="pl-8">
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link
                  to="/admin/author"
                  className="flex items-center text-white"
                >
                  <Pencil className="w-5 h-5" />
                  <span className="ml-3">Tác Giả</span>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link
                  to="/admin/publisher"
                  className="flex items-center text-white"
                >
                  <Users className="w-5 h-5" />
                  <span className="ml-3">Nhà Xuất Bản</span>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link
                  to="/admin/languages"
                  className="flex items-center text-white"
                >
                  <Globe className="w-5 h-5" />
                  <span className="ml-3">Ngôn Ngữ</span>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link
                  to="/admin/genres"
                  className="flex items-center text-white"
                >
                  <Layers className="w-5 h-5" />
                  <span className="ml-3">Thể Loại</span>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link
                  to="/admin/reviews"
                  className="flex items-center text-white"
                >
                  <Star className="w-5 h-5" />{" "}
                 
                  <span className="ml-3">Đánh Giá</span>
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
