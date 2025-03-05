import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthorProvider from "./context/Author.tsx";
import CategoryProvider from "./context/Category.tsx";
import PublisherProvider from "./context/Publisher.tsx";
import LanguageProvider from "./context/Language.tsx";
import GenreProvider from "./context/Genre.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <PublisherProvider>
      <CategoryProvider>
        <AuthorProvider>
          <LanguageProvider>
            <GenreProvider>
          <StrictMode>
            <App />
          </StrictMode>
          </GenreProvider>
          </LanguageProvider>
        </AuthorProvider>
      </CategoryProvider>
    </PublisherProvider>
  </BrowserRouter>
);
