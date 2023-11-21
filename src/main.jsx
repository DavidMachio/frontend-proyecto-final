import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Campings from './pages/Campings/Campings.jsx'
import Contacto from './pages/Contacto/Contacto.jsx'
import Blog from './pages/Blog/Blog.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import Cuenta from './pages/Cuentas/Cuenta.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/campings' element={<Campings />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/cuenta' element={<Cuenta />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
