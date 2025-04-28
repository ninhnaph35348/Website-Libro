import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/ProtectedRoute";
import LayoutAdmin from "./layouts/Admin";
import Login from "./pages/Admin/Auth/Login";

// Admin Pages
import AddAuthor from "./pages/Admin/Authors/AddAuthor";
import Author from "./pages/Admin/Authors/Authors";
import EditAuthor from "./pages/Admin/Authors/EditAuthor";
import AddCategory from "./pages/Admin/Category/AddCategory";
import CategoryList from "./pages/Admin/Category/Category";
import EditCategory from "./pages/Admin/Category/EditCategory";
import Covers from "./pages/Admin/Cover/Covers";
import AddGenre from "./pages/Admin/Genres/AddGenre";
import EditGenre from "./pages/Admin/Genres/EditGenre";
import Genre from "./pages/Admin/Genres/Genre";
import Home from "./pages/Admin/Home";
import AddLanguage from "./pages/Admin/Language/AddLanguage";
import EditLanguage from "./pages/Admin/Language/EditLanguage";
import Language from "./pages/Admin/Language/Language";
import NotFound from "./pages/Admin/Notfound";
import DetailOrder from "./pages/Admin/Order/DetailOrder";
import Orders from "./pages/Admin/Order/Orders";
import OrderStatus from "./pages/Admin/OrderStatus/OrderStatus";
import AddProduct from "./pages/Admin/Product/AddProduct";
import ProductDetail from "./pages/Admin/Product/DetailProduct";
import EditProduct from "./pages/Admin/Product/EditProduct";
import ProductList from "./pages/Admin/Product/ProductList";
import AddProductVariant from "./pages/Admin/ProductVariants/AddProductVariant";
import EditProductVariant from "./pages/Admin/ProductVariants/EditProductVariant";
import ListProductVariant from "./pages/Admin/ProductVariants/ListProductVariant";
import AddPublisher from "./pages/Admin/Publisher/AddPublisher";
import EditPublisher from "./pages/Admin/Publisher/EditPublisher";
import Publisher from "./pages/Admin/Publisher/Publisher";
import Review from "./pages/Admin/Review/Review";
import ReviewDetail from "./pages/Admin/Review/ReviewDetail";
import AddUserAdmin from "./pages/Admin/UserAdmin/AddUserAdmin";
import EditUserAdmin from "./pages/Admin/UserAdmin/EditUserAdmin";
import UserAdmin from "./pages/Admin/UserAdmin/UserAdmin";
import UserDetail from "./pages/Admin/UserAdmin/UserDetail";
import EditUserCustomer from "./pages/Admin/UserCustomer/EditUserCustomer";
import CustomerAccounts from "./pages/Admin/UserCustomer/UserCustomer";

// Client Pages
import LayoutClient from "./layouts/Client";
import Client from "./pages/Client";
import Blog from "./pages/Client/Blog/Blog";
import Checkout from "./pages/Client/Checkout/Checkout";
import VnpayReturn from "./pages/Client/Checkout/VnpayReturn";
import Contact from "./pages/Client/Contact/Contact";
import LoginClient from "./pages/Client/Login/Login";
import Sinup from "./pages/Client/Login/Sinup";
import OrderDetailPage from "./pages/Client/Oder/OderDetail";
import OrderList from "./pages/Client/Oder/OderList";
import ChangePassword from "./pages/Client/Profile/ChangePassword";
import EditProfile from "./pages/Client/Profile/EditProfile";
import Sidebar from "./pages/Client/Profile/pageProfile";
import Profile from "./pages/Client/Profile/Profile";
import Shopcart from "./pages/Client/Shopcart/Shopcart";
import Shopdefaul from "./pages/Client/Shopdefaul/Shopdefaul";
import Shopdetail from "./pages/Client/Shopdetail/Shopdetail";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VoucherList from "./pages/Admin/Voucher/ListVoucher";
import AddVoucher from "./pages/Admin/Voucher/AddVoucher";
import EditVoucher from "./pages/Admin/Voucher/EditVoucher";
import EditProfileAdmin from "./pages/Admin/ProfileAdmin/EditProfileAdmin";
import ChangePasswordAdmin from "./pages/Admin/ProfileAdmin/ChangePasswordAdmin";
import VoucherClient from "./pages/Client/VoucherClient/VoucherClient";
import ForgotPassword from "./pages/Client/Login/ForgotPassword";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Authentication Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/login" element={<LoginClient />} />
        <Route path="/register" element={<Sinup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Admin Routes (Protected) */}
        <Route path="/admin" element={<PrivateRoute />}>
          <Route element={<LayoutAdmin />}>
            <Route index element={<Home />} />

            {/* Order Management */}
            <Route path="order">
              <Route index element={<Orders />} />
              <Route path=":code" element={<DetailOrder />} />
            </Route>
            <Route path="orderstatus" element={<OrderStatus />} />

            {/* Voucher Management */}
            <Route path="voucher">
              <Route index element={<VoucherList />} />
              <Route path="add" element={<AddVoucher />} />
              <Route path=":code" element={<ProductDetail />} />
              <Route path="edit/:code" element={<EditVoucher />} />
            </Route>

            {/* Product Management */}
            <Route path="product">
              <Route index element={<ProductList />} />
              <Route path="add" element={<AddProduct />} />
              <Route path=":code" element={<ProductDetail />} />
              <Route path="edit/:id" element={<EditProduct />} />
            </Route>

            {/* Product Variant Management */}
            <Route path="product-variant">
              <Route index element={<ListProductVariant />} />
              <Route path="add" element={<AddProductVariant />} />
              <Route
                path="edit/:code/cover/:id"
                element={<EditProductVariant />}
              />
            </Route>

            {/* Category Management */}
            <Route path="category">
              <Route index element={<CategoryList />} />
              <Route path="add" element={<AddCategory />} />
              <Route path="edit/:id" element={<EditCategory />} />
            </Route>

            {/* Author Management */}
            <Route path="author">
              <Route index element={<Author />} />
              <Route path="add" element={<AddAuthor />} />
              <Route path="edit/:id" element={<EditAuthor />} />
            </Route>

            {/* Publisher Management */}
            <Route path="publisher">
              <Route index element={<Publisher />} />
              <Route path="add" element={<AddPublisher />} />
              <Route path="edit/:id" element={<EditPublisher />} />
            </Route>

            {/* Language Management */}
            <Route path="languages">
              <Route index element={<Language />} />
              <Route path="add" element={<AddLanguage />} />
              <Route path="edit/:id" element={<EditLanguage />} />
            </Route>

            {/* Genre Management */}
            <Route path="genres">
              <Route index element={<Genre />} />
              <Route path="add" element={<AddGenre />} />
              <Route path="edit/:id" element={<EditGenre />} />
            </Route>

            {/* Cover Management */}
            <Route path="covers">
              <Route index element={<Covers />} />
              {/* <Route path="add" element={<AddCover />} /> */}
              {/* <Route path="edit/:id" element={<EditCover />} /> */}
            </Route>

            {/* Review Management */}
            <Route path="reviews">
              <Route index element={<Review />} />
              <Route path="detail/:id" element={<ReviewDetail />} />
            </Route>

            {/* Admin User Management */}
            <Route path="user-admin">
              <Route index element={<UserAdmin />} />
              <Route path="add" element={<AddUserAdmin />} />
              <Route path="edit/:id" element={<EditUserAdmin />} />
              <Route path="detail/:id" element={<UserDetail />} />
            </Route>

            {/* Customer User Management */}
            <Route path="user-customer">
              <Route index element={<CustomerAccounts />} />
              <Route path="detail/:id" element={<UserDetail />} />
              <Route path="edit/:id" element={<EditUserCustomer />} />
            </Route>
            <Route path="profile-admin">
              <Route index element={<EditProfileAdmin />} />
              <Route path="change-password" element={<ChangePasswordAdmin />} />
            </Route>
          </Route>
        </Route>

        {/* Client Routes */}
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<Client />} />
          <Route path="shop" element={<Shopdefaul />} />
          <Route path="shop-details/:code" element={<Shopdetail />} />
          <Route path="shop-details/:code/cover/:id" element={<Shopdetail />} />
          <Route path="shop-cart" element={<Shopcart />} />
          <Route path="check-out" element={<Checkout />} />
          <Route path="vnpay-return" element={<VnpayReturn />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />

          {/* Profile Routes (Nested under Sidebar) */}
          <Route path="profile" element={<Sidebar />}>
            <Route index element={<Profile />} />
            <Route path="edit" element={<EditProfile />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="order_detail" element={<OrderList />} />
            <Route path="voucher-client" element={<VoucherClient />} />
          </Route>
          <Route
            path="/shop-details/:code/cover/:id"
            element={<Shopdetail />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/check-out" element={<Checkout />} />
          <Route path="/vnpay-return" element={<VnpayReturn />} />
          <Route
            path="/shop-details/:code/cover/:id"
            element={<Shopdetail />}
          />
          <Route path="/shop-cart" element={<Shopcart />} />
          <Route path="/shop" element={<Shopdefaul />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/check-out" element={<Checkout />} />
          <Route path="/shop-cart" element={<Shopcart />} />
          <Route path="/shop" element={<Shopdefaul />} />
          <Route path="/blog" element={<Blog />} />

          {/* Order Detail Route */}
          <Route path="order_detail/:orderCode" element={<OrderDetailPage />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
