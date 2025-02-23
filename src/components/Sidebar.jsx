import { useState } from 'react';
import { Menu, Home, Book, CircleUserRound, ListOrdered, ChevronDown, Users, Globe, Layers ,Library,AlignJustify } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ collapsed, setCollapsed }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <aside className={`fixed left-0 h-full bg-gray-800 text-white ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 z-30`}>
      {/* Logo */}
      <div className="h-16 flex items-center px-4 bg-gray-900">
        <span className={`font-bold text-xl ${collapsed ? 'hidden' : 'block'}`}>Dashboard</span>
        <Menu 
          className="w-6 h-6 ml-auto cursor-pointer" 
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-500"></div>
          {!collapsed && (
            <div className="ml-3">
              <div className="text-sm font-medium">Hchaos-Le-Ma</div>
              <div className="text-xs text-gray-400">Administrator</div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="py-4">
        <ul>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/" className="flex items-center">
              <Home className="w-5 h-5" />
              {!collapsed && <span className="ml-3">Trang Chủ</span>}
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/categories" className="flex items-center">
              <Library  className="w-5 h-5" />
              {!collapsed && <span className="ml-3">Danh Mục</span>}
            </Link>
          </li>
          
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/products" className="flex items-center">
              <Book className="w-5 h-5" />
              {!collapsed && <span className="ml-3">Sản Phẩm</span>}
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/orders" className="flex items-center">
              <ListOrdered className="w-5 h-5" />
              {!collapsed && <span className="ml-3">Đơn Hàng</span>}
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/users" className="flex items-center">
              <CircleUserRound className="w-5 h-5" />
              {!collapsed && <span className="ml-3">Tài Khoản</span>}
            </Link>
          </li>
          {/* Dropdown Chức Năng */}
        
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AlignJustify className="w-5 h-5" />
                {!collapsed && <span className="ml-3">Chức Năng</span>}
              </div>
              {!collapsed && <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />}
            </div>
          </li>
          {dropdownOpen && !collapsed && (
            <ul className="pl-8">
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link to="/authors" className="flex items-center">
                  <Users className="w-5 h-5" />
                  <span className="ml-3">Tác Giả</span>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link to="/languages" className="flex items-center">
                  <Globe className="w-5 h-5" />
                  <span className="ml-3">Ngôn Ngữ</span>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link to="/genres" className="flex items-center">
                  <Layers className="w-5 h-5" />
                  <span className="ml-3">Thể Loại</span>
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