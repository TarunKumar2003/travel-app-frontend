import React from 'react'
import ReactDOM from 'react-dom/client'

import { CategoryProvider } from './context'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </React.StrictMode>
)
