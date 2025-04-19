import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/auth/store.ts";

import "./assets/js/jquery-3.7.1.min.js";
import "./assets/js/bootstrap.bundle.min.js";
import "./assets/js/jquery.counterup.min.js";
import "./assets/js/jquery.magnific-popup.min.js";
import "./assets/js/jquery.meanmenu.min.js";
import "./assets/js/jquery.nice-select.min.js";
import "./assets/js/jquery.waypoints.js";
import "./assets/js/main.js";
import "./assets/js/swiper-bundle.min.js";
import "./assets/js/viewport.jquery.js";
import "./assets/css/bootstrap.min.css";
import "./assets/css/main.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/animate.css";
import "./assets/css/icomoon.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select.css";
import "./assets/css/all.min.css";
import "./index.css";

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
import ProductVariantProvider from "./context/ProductVariants.tsx";
import CartProvider from "./context/Cart.tsx";
import CheckoutProvider from "./context/Checkout.tsx";
import AuthProvider from "./context/Auth.tsx";
import VnPayProvider from "./context/VnPay.tsx";
import VoucherProvider from "./context/Voucher.tsx";
import StatisticsProvider from "./context/Statistics.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <CartProvider>
        <PublisherProvider>
          <CategoryProvider>
            <AuthorProvider>
              <LanguageProvider>
                <GenreProvider>
                  <ProductVariantProvider>
                    <ProductProvider>
                      <CheckoutProvider>
                        <VoucherProvider>
                          <VnPayProvider>
                            <StatisticsProvider>
                              <CoverProvider>
                                <OrderStatusProvider>
                                  <OrderProvider>
                                    <AdminUserProvider>
                                      <CustomerUserProvider>
                                        <AuthProvider>
                                          <ReviewProvider>
                                            <StrictMode>
                                              <App />
                                            </StrictMode>
                                          </ReviewProvider>
                                        </AuthProvider>
                                      </CustomerUserProvider>
                                    </AdminUserProvider>
                                  </OrderProvider>
                                </OrderStatusProvider>
                              </CoverProvider>
                            </StatisticsProvider>
                          </VnPayProvider>
                        </VoucherProvider>
                      </CheckoutProvider>
                    </ProductProvider>
                  </ProductVariantProvider>
                </GenreProvider>
              </LanguageProvider>
            </AuthorProvider>
          </CategoryProvider>
        </PublisherProvider>
      </CartProvider>
    </BrowserRouter>
  </Provider>
);
