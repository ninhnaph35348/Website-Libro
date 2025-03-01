import { Routes, Route } from "react-router-dom";
import LayoutAdmin from "./layouts/Admin";
import Home from "./pages/Home";
import Product from "./pages/Product";
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
import Categories from "./pages/Categories/Categories";
import AddCategories from "./pages/Categories/AddCategory";
import EditCategories from "./pages/Categories/EditCategory";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutAdmin />}>
        <Route index element={<Home />} />

        <Route path="order" element={<Order />} />
        <Route path="user" element={<User />} />

        {/* Product */}
        <Route path="product">
          <Route index element={<Product />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="edit/:id" element={<EditAuthor />} />
        </Route>
        {/* Category */}
        <Route path="categories">
          <Route index element={<Categories />} />
          <Route path="add" element={<AddCategories />} />
          <Route path="edit/:id" element={<EditCategories />} />
        </Route>
        {/* Authors */}
        <Route path="authors">
          <Route index element={<Author />} />
          <Route path="add" element={<AddAuthor />} />
          <Route path="edit/:id" element={<EditAuthor />} />
        </Route>

        {/* Languages */}
        <Route path="language">
          <Route index element={<Language />} />
          <Route path="add-languages" element={<AddLanguage />} />
        </Route>

        {/* Genres */}
        <Route path="genre">
          <Route index element={<Genre />} />
          <Route path="add-genre" element={<AddGenre />} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />

      {/* Trang 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
