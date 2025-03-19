import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/ProtectedRoute"; // Import PrivateRoute
import LayoutAdmin from "./layouts/Admin";
import Login from "./pages/Auth/Login";
import NotFound from "./pages/Notfound";

// Admin Pages
import Home from "./pages/Home";
import Order from "./pages/Order";
import User from "./pages/User";
import ProductList from "./pages/Product/ProductList";
import AddProduct from "./pages/Product/AddProduct";
import EditAuthor from "./pages/Authors/EditAuthor";
import CategoryList from "./pages/Category/Category";
import AddCategory from "./pages/Category/AddCategory";
import EditCategory from "./pages/Category/EditCategory";
import Publisher from "./pages/Publisher/Publisher";
import AddPublisher from "./pages/Publisher/AddPublisher";
import EditPublisher from "./pages/Publisher/EditPublisher";
import Author from "./pages/Authors/Authors";
import AddAuthor from "./pages/Authors/AddAuthor";
import Language from "./pages/Language/Language";
import AddLanguage from "./pages/Language/AddLanguage";
import EditLanguage from "./pages/Language/EditLanguage";
import Genre from "./pages/Genres/Genre";
import AddGenre from "./pages/Genres/AddGenre";
import EditGenre from "./pages/Genres/EditGenre";
import UserAdmin from "./pages/UserAdmin/UserAdmin";
import AddUserAdmin from "./pages/UserAdmin/AddUserAdmin";
import EditUserAdmin from "./pages/UserAdmin/EditUserAdmin";
import UserDetail from "./pages/UserAdmin/UserDetail";
import UserCustomer from "./pages/UserCustomer/UserCustomer";
import EditUserCustomer from "./pages/UserCustomer/EditUserCustomer";

// Client Pages
import LayoutClient from "./layouts/Client";
import Checkout from "./pages/Client/Checkout/Checkout";
import Shopdetail from "./pages/Client/Shopdetail/Shopdetail";
import Shopcart from "./pages/Client/Shopcart/Shopcart";
import Shopdefaul from "./pages/Client/Shopdefaul/Shopdefaul";
import Client from "./pages/Client";
import Blog from "./pages/Client/Blog/Blog";
import Contact from "./pages/Client/Contact/Contact";

import Review from "./pages/Review/Review";
// import AddAdminAccount from "./pages/UserAdmin/AddUserAdmin";


const App = () => {
  return (
    <Routes>
      {/* Route Đăng nhập Admin */}
      <Route path="admin/login" element={<Login />} />

      {/* Route Admin với bảo vệ PrivateRoute */}
      <Route path="/admin" element={<PrivateRoute />}>
        <Route element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="order" element={<Order />} />
          <Route path="user" element={<User />} />

          {/* Quản lý sản phẩm */}
          <Route path="product">
            <Route index element={<ProductList />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<EditAuthor />} />
          </Route>

          {/* Quản lý danh mục */}
          <Route path="category">
            <Route index element={<CategoryList />} />
            <Route path="add" element={<AddCategory />} />
            <Route path="edit/:id" element={<EditCategory />} />
          </Route>

          {/* Quản lý tác giả */}
          <Route path="author">
            <Route index element={<Author />} />
            <Route path="add" element={<AddAuthor />} />
            <Route path="edit/:id" element={<EditAuthor />} />
          </Route>


        {/* Genres */}
        <Route path="genres">
          <Route index element={<Genre />} />
          <Route path="add" element={<AddGenre />} />
          <Route path="edit/:id" element={<EditGenre />} />
        </Route>
        <Route path="reviews">
          <Route index element={<Review />} />
          {/* <Route path="add" element={<AddReview />} />
          <Route path="edit/:id" element={<EditReview />} /> */}
        </Route>
        <Route path="user-admin">
          <Route index element={<UserAdmin />} /> {/* 🆕 Danh sách AdminUser */}
          <Route path="add" element={<AddAdminAccount />} />
          <Route path="edit/:id" element={<EditUserAdmin />} />
          <Route path="detail/:id" element={<UserDetail />} />

          {/* Quản lý nhà xuất bản */}
          <Route path="publisher">
            <Route index element={<Publisher />} />
            <Route path="add" element={<AddPublisher />} />
            <Route path="edit/:id" element={<EditPublisher />} />
          </Route>

          {/* Quản lý ngôn ngữ */}
          <Route path="languages">
            <Route index element={<Language />} />
            <Route path="add" element={<AddLanguage />} />
            <Route path="edit/:id" element={<EditLanguage />} />
          </Route>

          {/* Quản lý thể loại */}
          <Route path="genres">
            <Route index element={<Genre />} />
            <Route path="add" element={<AddGenre />} />
            <Route path="edit/:id" element={<EditGenre />} />
          </Route>

          {/* Quản lý người dùng Admin */}
          <Route path="user-admin">
            <Route index element={<UserAdmin />} />
            <Route path="add" element={<AddUserAdmin />} />
            <Route path="edit/:id" element={<EditUserAdmin />} />
            <Route path="detail/:id" element={<UserDetail />} />
          </Route>

          {/* Quản lý người dùng khách hàng */}
          <Route path="user-customer">
            <Route index element={<UserCustomer />} />
            <Route path="detail/:id" element={<UserDetail />} />
            <Route path="edit/:id" element={<EditUserCustomer />} />
          </Route>
        </Route>
      </Route>

      {/* Route Client */}
      <Route path="/" element={<LayoutClient />}>
        <Route index element={<Client />} />

        <Route path="/check-out" element={<Checkout />} />
        <Route path="/shop-detail" element={<Shopdetail />} />
        <Route path="/shop-cart" element={<Shopcart />} />
        <Route path="/shop" element={<Shopdefaul />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Trang 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
