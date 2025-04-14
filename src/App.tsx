import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/ProtectedRoute";
import LayoutAdmin from "./layouts/Admin";
import Login from "./pages/Admin/Auth/Login";

// Admin Pages
import Home from "./pages/Admin/Home";
import Author from "./pages/Admin/Authors/Authors";
import AddAuthor from "./pages/Admin/Authors/AddAuthor";
import EditAuthor from "./pages/Admin/Authors/EditAuthor";
import Language from "./pages/Admin/Language/Language";
import AddLanguage from "./pages/Admin/Language/AddLanguage";
import EditLanguage from "./pages/Admin/Language/EditLanguage";
import Genre from "./pages/Admin/Genres/Genre";
import AddGenre from "./pages/Admin/Genres/AddGenre";
import EditGenre from "./pages/Admin/Genres/EditGenre";
import NotFound from "./pages/Admin/Notfound";
import AddProduct from "./pages/Admin/Product/AddProduct";
import ProductList from "./pages/Admin/Product/ProductList";
import ProductDetail from "./pages/Admin/Product/DetailProduct";
import EditProduct from "./pages/Admin/Product/EditProduct";
import CategoryList from "./pages/Admin/Category/Category";
import AddCategory from "./pages/Admin/Category/AddCategory";
import EditCategory from "./pages/Admin/Category/EditCategory";
import Publisher from "./pages/Admin/Publisher/Publisher";
import AddPublisher from "./pages/Admin/Publisher/AddPublisher";
import EditPublisher from "./pages/Admin/Publisher/EditPublisher";
import UserAdmin from "./pages/Admin/UserAdmin/UserAdmin";
import AddUserAdmin from "./pages/Admin/UserAdmin/AddUserAdmin";
import EditUserAdmin from "./pages/Admin/UserAdmin/EditUserAdmin";
import UserDetail from "./pages/Admin/UserAdmin/UserDetail";
import CustomerAccounts from "./pages/Admin/UserCustomer/UserCustomer";
import EditUserCustomer from "./pages/Admin/UserCustomer/EditUserCustomer";
import Orders from "./pages/Admin/Order/Orders";
import DetailOrder from "./pages/Admin/Order/DetailOrder";
import OrderStatus from "./pages/Admin/OrderStatus/OrderStatus";
import Covers from "./pages/Admin/Cover/Covers";
import AddCover from "./pages/Admin/Cover/AddCover";
import EditCover from "./pages/Admin/Cover/EditCover";
import ListProductVariant from "./pages/Admin/ProductVariants/ListProductVariant";
import AddProductVariant from "./pages/Admin/ProductVariants/AddProductVariant";
import EditProductVariant from "./pages/Admin/ProductVariants/EditProductVariant";
import Review from "./pages/Admin/Review/Review";
import ReviewDetail from "./pages/Admin/Review/ReviewDetail";

// Client Pages
import LayoutClient from "./layouts/Client";
import Client from "./pages/Client";
import Checkout from "./pages/Client/Checkout/Checkout";
import VnpayReturn from "./pages/Client/Checkout/VnpayReturn";
import Shopdetail from "./pages/Client/Shopdetail/Shopdetail";
import Shopcart from "./pages/Client/Shopcart/Shopcart";
import Shopdefaul from "./pages/Client/Shopdefaul/Shopdefaul";
import Blog from "./pages/Client/Blog/Blog";
import Contact from "./pages/Client/Contact/Contact";
import LoginClient from "./pages/Client/Login/Login";
import Sinup from "./pages/Client/Login/Sinup";
import Profile from "./pages/Client/Profile/Profile";
import EditProfile from "./pages/Client/Profile/EditProfile";
import ChangePassword from "./pages/Client/Profile/ChangePassword";
import Sidebar from "./pages/Client/Profile/pageProfile";
import OrderList from "./pages/Client/Oder/OderList";
import OrderDetailPage from "./pages/Client/Oder/OderDetail";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Authentication Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/login" element={<LoginClient />} />
        <Route path="/register" element={<Sinup />} />

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
              <Route path="edit/:code/cover/:id" element={<EditProductVariant />} />
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
              <Route path="add" element={<AddCover />} />
              <Route path="edit/:id" element={<EditCover />} />
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
          </Route>
          <Route
            path="/shop-details/:code/cover/:id"
            element={<Shopdetail />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/check-out" element={<Checkout />} />
          <Route path="/vnpay-return" element={<VnpayReturn />} />
          <Route path="/shop-details/:code/cover/:id" element={<Shopdetail />} />
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