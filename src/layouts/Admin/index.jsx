import  { useState } from 'react';

import { Outlet } from "react-router-dom";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';


const LayoutAdmin = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
    return (
      <div className="flex h-screen overflow-hidden bg-gray-100">
        <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
        
        <div className={`flex-1 ${sidebarCollapsed ? 'ml-16' : 'ml-64'} transition-all duration-300 flex flex-col`}>
          <Header sidebarCollapsed={sidebarCollapsed} />
          
          {/* Main Content Area */}
          <main className="flex-1 p-6 pt-24 pb-16 overflow-auto">
       <Outlet />
          </main>
  
          <Footer sidebarCollapsed={sidebarCollapsed} />
        </div>
      </div>
    );
}

export default LayoutAdmin