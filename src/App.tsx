import { Routes, Route } from "react-router-dom";
import LayoutAdmin from "./layouts/Admin";
import Home from "./pages/Home";
import Order from "./pages/Order";
import User from "./pages/User";
import Author from "./pages/Authors/Authors";
import AddAuthor from "./pages/Authors/AddAuthor";
import EditAuthor from "./pages/Authors/EditAuthor";
import Language from "./pages/Language/Language";
import AddLanguage from "./pages/Language/AddLanguage";
import Genre from "./pages/Genres/Genre";
import AddGenre from "./pages/Genres/AddGenre";
import Login from "./pages/Login";
import NotFound from "./pages/Notfound";
import AddProduct from "./pages/Product/AddProduct";
import ProductList from "./pages/Product/ProductList";
import CategoryList from "./pages/Category/Category";
import AddCategory from "./pages/Category/AddCategory";
import EditCategory from "./pages/Category/EditCategory";
import Publisher from "./pages/Publisher/Publisher";
import AddPublisher from "./pages/Publisher/AddPublisher";
import EditPublisher from "./pages/Publisher/EditPublisher";
import EditLanguage from "./pages/Language/EditLanguage";
import EditGenre from "./pages/Genres/EditGenre";
import Checkout from "./pages/Client/Checkout/Checkout";
import LayoutClient from "./layouts/Client";
import Shopdetail from "./pages/Client/Shopdetail/Shopdetail";
import Shopcart from "./pages/Client/Shopcart/Shopcart";
import Shopdefaul from "./pages/Client/Shopdefaul/Shopdefaul";
import Client from "./pages/Client";
import Blog from "./pages/Client/Blog/Blog";
import UserAdmin from "./pages/UserAdmin/UserAdmin";
import AddAdminAccount from "./pages/UserAdmin/AddUserAdmin";
import EditUserAdmin from "./pages/UserAdmin/EditUserAdmin";
import UserDetail from "./pages/UserAdmin/UserDetail";

const App = () => {
  return (
    <Routes>
      {/* Admin */}
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route index element={<Home />} />
        {/* <Route path="categories" element={<Category />} /> */}

        <Route path="order" element={<Order />} />
        <Route path="user" element={<User />} />

        {/* Product */}
        <Route path="product">
          <Route index element={<ProductList />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="edit/:id" element={<EditAuthor />} />
        </Route>

        {/* categorie */}
        <Route path="category">
          <Route index element={<CategoryList />} />
          <Route path="add" element={<AddCategory />} />
          <Route path="edit/:id" element={<EditCategory />} />
        </Route>

        {/* Author */}
        <Route path="author">
          <Route index element={<Author />} />
          <Route path="add" element={<AddAuthor />} />
          <Route path="edit/:id" element={<EditAuthor />} />
        </Route>
        {/* Publisher */}

        <Route path="publisher">
          <Route index element={<Publisher />} />
          <Route path="add" element={<AddPublisher />} />
          <Route path="edit/:id" element={<EditPublisher />} />
        </Route>

        {/* Languages */}
        <Route path="languages">
          <Route index element={<Language />} />
          <Route path="add" element={<AddLanguage />} />
          <Route path="edit/:id" element={<EditLanguage />} />
        </Route>

        {/* Genres */}
        <Route path="genres">
          <Route index element={<Genre />} />
          <Route path="add" element={<AddGenre />} />
          <Route path="edit/:id" element={<EditGenre />} />
        </Route>
        <Route path="user-admin">
          <Route index element={<UserAdmin />} /> {/* 🆕 Danh sách AdminUser */}
          <Route path="add" element={<AddAdminAccount />} />
          <Route path="edit/:id" element={<EditUserAdmin />} />
          <Route path="detail/:id" element={<UserDetail />} />
        </Route>
      </Route>

      {/* Client */}
      <Route path="/" element={<LayoutClient />}>
        <Route index element={<Client />} />
        <Route path="/check-out" element={<Checkout />} />
        <Route path="/shop-detail" element={<Shopdetail />} />
        <Route path="/shop-cart" element={<Shopcart />} />
        <Route path="/shop" element={<Shopdefaul />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
      <Route path="/login" element={<Login />} />

      {/* Trang 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
