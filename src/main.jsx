import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import AppContaxtProvider from "./context/AppContext.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContaxtProvider>
     <App />
  </AppContaxtProvider>
  </BrowserRouter>,
)