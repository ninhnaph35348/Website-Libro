import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthorProvider from "./context/Author.tsx";
import CategoryProvider from "./context/Category.tsx";
import PublisherProvider from "./context/Publisher.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <PublisherProvider>
      <CategoryProvider>
        <AuthorProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </AuthorProvider>
      </CategoryProvider>
    </PublisherProvider>
  </BrowserRouter>
);
