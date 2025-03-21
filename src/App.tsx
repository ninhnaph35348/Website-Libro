import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/ProtectedRoute"; // Import PrivateRoute
import LayoutAdmin from "./layouts/Admin";
import Login from "./pages/Admin/Auth/Login";

// Admin Pages
import Home from "./pages/Admin/Home";

import Author from "./pages/Admin/Authors/Authors";
import AddAuthor from "./pages/Admin/Authors/AddAuthor";
import EditAuthor from "./pages/Admin/Authors/EditAuthor";
import Language from "./pages/Admin/Language/Language";
import AddLanguage from "./pages/Admin/Language/AddLanguage";
import Genre from "./pages/Admin/Genres/Genre";
import AddGenre from "./pages/Admin/Genres/AddGenre";
import NotFound from "./pages/Admin/Notfound";
import AddProduct from "./pages/Admin/Product/AddProduct";
import ProductList from "./pages/Admin/Product/ProductList";
import CategoryList from "./pages/Admin/Category/Category";
import AddCategory from "./pages/Admin/Category/AddCategory";
import EditCategory from "./pages/Admin/Category/EditCategory";
import Publisher from "./pages/Admin/Publisher/Publisher";
import AddPublisher from "./pages/Admin/Publisher/AddPublisher";
import EditPublisher from "./pages/Admin/Publisher/EditPublisher";
import EditLanguage from "./pages/Admin/Language/EditLanguage";
import EditGenre from "./pages/Admin/Genres/EditGenre";

import UserAdmin from "./pages/Admin/UserAdmin/UserAdmin";
import AddUserAdmin from "./pages/Admin/UserAdmin/AddUserAdmin";
import EditUserAdmin from "./pages/Admin/UserAdmin/EditUserAdmin";
import UserDetail from "./pages/Admin/UserAdmin/UserDetail";

import Review from "./pages/Admin/Review/Review";
import EditUserCustomer from "./pages/Admin/UserCustomer/EditUserCustomer";
import CustomerAccounts from "./pages/Admin/UserCustomer/UserCustomer";
// import AddAdminAccount from "./pages/UserAdmin/AddUserAdmin";

// Client Pages
import LayoutClient from "./layouts/Client";
import Checkout from "./pages/Client/Checkout/Checkout";
import Shopdetail from "./pages/Client/Shopdetail/Shopdetail";
import Shopcart from "./pages/Client/Shopcart/Shopcart";
import Shopdefaul from "./pages/Client/Shopdefaul/Shopdefaul";
import Client from "./pages/Client";
import ProductDetail from "./pages/Admin/Product/DetailProduct";
import EditProduct from "./pages/Admin/Product/EditProduct";
import Orders from "./pages/Admin/Order/Orders";
import OrderStatus from "./pages/Admin/OrderStatus/OrderStatus";
import DetailOrder from "./pages/Admin/Order/DetailOrder";
import Blog from "./pages/Client/Blog/Blog";
import Contact from "./pages/Client/Contact/Contact";


const App = () => {
  return (
    <Routes>
      {/* Route Đăng nhập Admin */}
      <Route path="admin/login" element={<Login />} />

      {/* Route Admin với bảo vệ PrivateRoute */}
      <Route path="/admin" element={<PrivateRoute />}>
        <Route element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="order">
            <Route index element={<Orders />} />
            <Route path=":code" element={<DetailOrder />} />
          </Route>

          {/* Quản lý sản phẩm */}
          <Route path="product">
            <Route index element={<ProductList />} />
            <Route path="add" element={<AddProduct />} />
            <Route path=":code" element={<ProductDetail />} />
            <Route path="edit/:id" element={<EditProduct />} />
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

          <Route path="reviews">
            <Route index element={<Review />} />
            {/* <Route path="add" element={<AddReview />} /> */}
            {/* <Route path="edit/:id" element={<EditReview />} /> */}
          </Route>

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

          {/* Languages */}
          <Route path="languages">
            <Route index element={<Language />} />
            <Route path="add" element={<AddLanguage />} />
            <Route path="edit/:id" element={<EditLanguage />} />
          </Route>

          {/* OrderStatuss */}
          <Route path="orderstatus">
            <Route index element={<OrderStatus />} />
          </Route>

          {/* Genres */}
          <Route path="genres">
            <Route index element={<Genre />} />
            <Route path="add" element={<AddGenre />} />
            <Route path="edit/:id" element={<EditGenre />} />
          </Route>

          {/* Quản lý người dùng khách hàng */}
          <Route path="user-customer">
            <Route index element={<CustomerAccounts />} />
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
