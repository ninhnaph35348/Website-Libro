import { Routes, Route } from "react-router-dom";
import LayoutAdmin from "./layouts/Admin";
import Home from "./pages/Home";
import Order from "./pages/Order";
import User from "./pages/User";
import Author from "./pages/Admin/Authors/Authors";
import AddAuthor from "./pages/Admin/Authors/AddAuthor";
import EditAuthor from "./pages/Admin/Authors/EditAuthor";
import Language from "./pages/Admin/Language/Language";
import AddLanguage from "./pages/Admin/Language/AddLanguage";
import Genre from "./pages/Admin/Genres/Genre";
import AddGenre from "./pages/Admin/Genres/AddGenre";
import Login from "./pages/Login";
import NotFound from "./pages/Notfound";
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
import Checkout from "./pages/Client/Checkout/Checkout";
import LayoutClient from "./layouts/Client";
import Shopdetail from "./pages/Client/Shopdetail/Shopdetail";
import Shopcart from "./pages/Client/Shopcart/Shopcart";
import Shopdefaul from "./pages/Client/Shopdefaul/Shopdefaul";
import Client from "./pages/Client";
import ProductDetail from "./pages/Admin/Product/DetailProduct";
import EditProduct from "./pages/Admin/Product/EditProduct";

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
          <Route path=":code" element={<ProductDetail />} />
          <Route path="edit/:id" element={<EditProduct />} />
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
      </Route>

      {/* Client */}
      <Route path="/" element={<LayoutClient />} >
        <Route index element={<Client />} />
        <Route path="check-out" element={<Checkout />} />
        <Route path="shop-detail" element={<Shopdetail />} />
        <Route path="shop-cart" element={<Shopcart />} />
        <Route path="shop" element={<Shopdefaul />} />
      </Route>

      <Route path="/login" element={<Login />} />
      {/* Trang 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
