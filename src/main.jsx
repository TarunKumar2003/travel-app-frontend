import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {
  CategoryProvider,
  DateProvider,
  FilterProvider,
  AuthProvider,
} from './context'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <DateProvider>
          <FilterProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </FilterProvider>
        </DateProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>
)
