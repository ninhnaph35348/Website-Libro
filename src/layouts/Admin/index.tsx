import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Admin/Header";
import Sidebar from "../../components/Admin/Sidebar";
import Footer from "../../components/Admin/Footer";
import Preloader from "../../components/Client/Preloader";

const LayoutAdmin = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    () => JSON.parse(localStorage.getItem("sidebarCollapsed") || "false")
  );

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", JSON.stringify(sidebarCollapsed));
  }, [sidebarCollapsed]);

  return (
    <div className="flex min-h-screen overflow-hidden bg-gray-100 admin">
      
      <Preloader />
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />

      <div
        className={`flex-1 ${sidebarCollapsed ? "ml-16" : "ml-64"} transition-all duration-300 flex flex-col`}
      >
        <Header />
        <main className="flex-1 p-6 pt-24 pb-16 overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutAdmin;
