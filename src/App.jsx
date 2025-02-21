import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Order from './pages/Order';
import Category from './pages/Category';
import Author from './pages/Authors/Author';
import AddAuthor from './pages/Authors/AddAuthor';
import Language from './pages/Language/Language';
import AddLanguage from './pages/Language/AddLanguage';
import User from './pages/User';
import Genre from './pages/Genres/Genre';
import AddGenre from './pages/Genres/AddGenre';
const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />

      <div className={`flex-1 ${sidebarCollapsed ? 'ml-16' : 'ml-64'} transition-all duration-300 flex flex-col`}>
        <Header sidebarCollapsed={sidebarCollapsed} />

        {/* Main Content Area */}
        <main className="flex-1 p-6 pt-24 pb-16 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/products" element={<Product />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/users" element={<User />} />
            <Route path="/authors" element={<Author />}/>
            <Route path="/authors/add-authors" element={<AddAuthor />} />      
            <Route path="/languages" element={< Language />} />
            <Route path="/languages/add-languages" element={<AddLanguage />} />
            <Route path="/genres" element={< Genre />} />
            <Route path="/genres/add-genres" element={<AddGenre />} />

          </Routes>
        </main>

        <Footer sidebarCollapsed={sidebarCollapsed} />
      </div>
    </div>
  );
};

export default App;