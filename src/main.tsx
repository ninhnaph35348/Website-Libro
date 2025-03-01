import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthorProvider from './context/Author.tsx'
import CategoryProvider from './context/Category.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <CategoryProvider>
      <AuthorProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </AuthorProvider>
    </CategoryProvider>
  </BrowserRouter>


)
