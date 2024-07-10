import React from 'react'
import ReactDOM from 'react-dom/client'
import SearchPageSkins from './components/buscarSkins'
import SearchPageColections from './components/buscarColections'
import SearchPageStikers from './components/buscarStikers'
import AppRoutes from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppRoutes />
  </React.StrictMode>,
)
