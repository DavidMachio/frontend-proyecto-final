import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Categorias from './pages/Categorias/Categorias.jsx'
import Contacto from './pages/Contacto/Contacto.jsx'
import Blog from './pages/Blog/Blog.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import Cuenta from './pages/Cuentas/Cuenta.jsx'
import Accesibles from './pages/Accesibles/Accesibles.jsx'
import TodosAccesibles from './pages/TodosAccesibles/TodosAccesibles.jsx'
import Recomendados from './pages/Recomendados/Recomendados.jsx'
import Entornos from './pages/Entornos/Entornos.jsx'
import Acuaticos from './pages/Acuaticos/Acuaticos.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/categorias' element={<Categorias />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/cuenta' element={<Cuenta />} />
          <Route path='/accesibles' element={<Accesibles />} />
          <Route path='/todosaccesibles' element={<TodosAccesibles />} />
          <Route path='/recomendados' element={<Recomendados />} />
          <Route path='/entornos' element={<Entornos />} />
          <Route path='/acuaticos' element={<Acuaticos />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
