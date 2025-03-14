import { Search, Bell, MessageSquare, User, Settings } from 'lucide-react';

const Header = ({ sidebarCollapsed }: any) => {
  return (
    <header 
      className="fixed top-0 right-0 bg-white h-16 flex items-center px-4 shadow-sm z-20"
      style={{ width: `calc(100% - ${sidebarCollapsed ? '4rem' : '16rem'})` }}
    >
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-2 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        {/* <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" /> */}
        <Search className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />

        </div>

      {/* Right Menu */}
      <div className="ml-auto flex items-center space-x-4">
        <button className="relative p-2 hover:bg-gray-100 rounded-lg">
          <MessageSquare className="w-5 h-5" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4">4</span>
        </button>
        <button className="relative p-2 hover:bg-gray-100 rounded-lg">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4">8</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <User className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
export default Header;