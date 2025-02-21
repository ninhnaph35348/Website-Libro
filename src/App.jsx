import { Route, Routes } from 'react-router-dom';
import Author from './pages/Author';
import Category from './pages/Category';
import Genre from './pages/Genre';
import Home from './pages/Home';
import Language from './pages/Language';
import Login from './pages/Login';
import Order from './pages/Order';
import Product from './pages/Product';
import User from './pages/User';
import LayoutAdmin from './layouts/Admin';
import Notfound from './pages/Notfound';
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<LayoutAdmin />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Category />} />
        <Route path="products" element={<Product />} />
        <Route path="orders" element={<Order />} />
        <Route path="users" element={<User />} />
        <Route path="authors" element={<Author />} />
        <Route path="languages" element={<Language />} />
        <Route path="genres" element={<Genre />} />
      </Route>
      <Route path="/login" element={< Login />} />
      <Route path="*" element={< Notfound />} />
    </Routes>
  );
};

export default App;