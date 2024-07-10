import React from 'react'
import ReactDOM from 'react-dom/client'
import SearchPageSkins from './components/buscarSkins'
import SearchPageColections from './components/buscarColections'
import SearchPageStikers from './components/buscarStikers'
import ListaSkins from './components/listaSkins'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchPageSkins />
  <SearchPageStikers />
   <SearchPageColections />
  </React.StrictMode>,
)
