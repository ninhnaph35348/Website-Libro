import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthorProvider from './context/Author.jsx'
import PublisherProvider from './context/Publisher.jsx'
import LanguageProvider from './context/Language.jsx'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthorProvider>
      <PublisherProvider>
        <LanguageProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </LanguageProvider>
      </PublisherProvider>
    </AuthorProvider>
  </BrowserRouter>
);
// 