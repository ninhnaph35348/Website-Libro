import { Routes, Route } from 'react-router-dom';
import LayoutAdmin from './layouts/Admin';
import Home from './pages/Home';
import Category from './pages/Category/Category';
import Product from './pages/Product';
import Order from './pages/Order';
import User from './pages/User';
import Author from './pages/Authors/Author';
import AddAuthor from './pages/Authors/AddAuthor';
import Language from './pages/Language/Language';
import AddLanguage from './pages/Language/AddLanguage';
import Genre from './pages/Genres/Genre';
import AddGenre from './pages/Genres/AddGenre';
import Login from './pages/Login';
import Notfound from './pages/Notfound';
import EditAuthor from './pages/Authors/EditAuthor';
import AddCategory from './pages/Category/AddCategory';
import EditCategory from './pages/Category/EditCategory';

const App = () => {
  return (
    <Routes>
      {/* LayoutAdmin chỉ áp dụng cho các route con */}
      <Route element={<LayoutAdmin />}>
        <Route index element={<Home />} /> {/* 🟢 Chỉ định Home là mặc định */}
        <Route path="categories" element={<Category />} />
        <Route path="categories/add" element={<AddCategory />} />
        <Route path="categories/edit/:id" element={<EditCategory />} />
        <Route path="products" element={<Product />} />
        <Route path="orders" element={<Order />} />
        <Route path="users" element={<User />} />
        <Route path="authors" element={<Author />} />
        <Route path="authors/add" element={<AddAuthor />} />
        <Route path="authors/edit/:id" element={<EditAuthor />} />
        <Route path="languages" element={<Language />} />
        <Route path="languages/add-languages" element={<AddLanguage />} />
        <Route path="genres" element={<Genre />} />
        <Route path="genres/add-genres" element={<AddGenre />} />
      </Route>

      {/* Trang đăng nhập không dùng LayoutAdmin */}
      <Route path="/login" element={<Login />} />

      {/* Trang 404 */}
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default App;
