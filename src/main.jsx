import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  BrowserRouter} from 'react-router-dom'
import AuthorProvider from './context/Author.jsx'
import CategoryProvider from './context/Category.jsx'

createRoot(document.getElementById('root')).render(
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
