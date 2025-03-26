import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/auth/store.ts"; // Import store của bạn

import "./index.css";
// import "./assets/css/bootstrap.min.css";
// import "./assets/css/main.css";
// import "./assets/css/swiper-bundle.min.css";
// import "./assets/css/animate.css";
// import "./assets/css/icomoon.css";
// import "./assets/css/magnific-popup.css";
// import "./assets/css/meanmenu.css";
// import "./assets/css/nice-select.css";
// import "./assets/css/all.min.css";


import App from "./App.jsx";
import AuthorProvider from "./context/Author.tsx";
import CategoryProvider from "./context/Category.tsx";
import PublisherProvider from "./context/Publisher.tsx";
import LanguageProvider from "./context/Language.tsx";
import GenreProvider from "./context/Genre.tsx";
import ProductProvider from "./context/Product.tsx";
import OrderProvider from "./context/Order.tsx";
import OrderStatusProvider from "./context/OrderStatus.tsx";
import AdminUserProvider from "./context/UserAdmin.tsx";
import CustomerUserProvider from "./context/UserCustomer.tsx";
import ReviewProvider from "./context/Review.tsx";
import { Provider } from "react-redux";
import CoverProvider from "./context/Cover.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <PublisherProvider>
        <CategoryProvider>
          <AuthorProvider>
            <LanguageProvider>
              <GenreProvider>
                <CoverProvider>
                <ProductProvider>
                  <OrderStatusProvider>
                    <OrderProvider>
                      <AdminUserProvider>
                        <CustomerUserProvider>
                          <ReviewProvider>
                            <StrictMode>
                              <App />
                            </StrictMode>
                          </ReviewProvider>
                        </CustomerUserProvider>
                      </AdminUserProvider>
                    </OrderProvider>
                  </OrderStatusProvider>
                </ProductProvider>
                </CoverProvider>
              </GenreProvider>
            </LanguageProvider>
          </AuthorProvider>
        </CategoryProvider>
      </PublisherProvider>
    </BrowserRouter>
  </Provider>

);
