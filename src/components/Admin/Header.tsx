import { useState } from "react";
import { House, Search, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ sidebarCollapsed }: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Xóa token khỏi localStorage
    window.location.href = "/admin/login"; // Chuyển hướng về trang đăng nhập
  };

  return (
    <header
      className="fixed top-0 right-0 bg-white h-16 flex items-center px-4 shadow-sm z-20"
      style={{ width: `calc(100% - ${sidebarCollapsed ? "4rem" : "16rem"})` }}
    >
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-2 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <Search className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
      </div>

      {/* Right Menu */}
      <div className="ml-auto flex items-center space-x-4 relative">
        <Link className="p-2 hover:bg-gray-100 rounded-lg" to={`/`}><House /></Link>
        <div>
          <button
            className="p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Settings className="w-5 h-5" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Đăng xuất
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;