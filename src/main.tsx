import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/main.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/animate.css";
import "./assets/css/icomoon.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select.css";
import "./assets/css/all.min.css";


import "./assets/js/jquery-3.7.1.min.js";
import "./assets/js/bootstrap.bundle.min.js";
// import "./assets/js/gsap.min.js";
import "./assets/js/jquery.counterup.min.js";
import "./assets/js/jquery.magnific-popup.min.js";
import "./assets/js/jquery.meanmenu.min.js";
import "./assets/js/jquery.nice-select.min.js";
import "./assets/js/jquery.waypoints.js";
import "./assets/js/main.js";
import "./assets/js/swiper-bundle.min.js";
import "./assets/js/viewport.jquery.js";
// import "./assets/js/wow.min.js";


import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthorProvider from "./context/Author.tsx";
import CategoryProvider from "./context/Category.tsx";
import PublisherProvider from "./context/Publisher.tsx";
import LanguageProvider from "./context/Language.tsx";
import GenreProvider from "./context/Genre.tsx";
import ProductProvider from "./context/Product.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <PublisherProvider>
      <ProductProvider>
        <CategoryProvider>
          <AuthorProvider>
            <LanguageProvider>
              <GenreProvider>
                <StrictMode>
                  <App />
                </StrictMode>
              </GenreProvider>
            </LanguageProvider>
          </AuthorProvider >
        </CategoryProvider>
      </ProductProvider>
    </PublisherProvider>
  </BrowserRouter>
);
