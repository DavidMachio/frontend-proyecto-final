import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Categorias from './pages/Categorias/Categorias.jsx'
import Contacto from './pages/Contacto/Contacto.jsx'
import Blog from './pages/Blog/Blog.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import Accesibles from './pages/Accesibles/Accesibles.jsx'
import TodosAccesibles from './pages/TodosAccesibles/TodosAccesibles.jsx'
import Entornos from './pages/Entornos/Entornos.jsx'
import Acuaticos from './pages/Acuaticos/Acuaticos.jsx'
import Montaña from './pages/Montaña/Montaña.jsx'
import Ciudad from "./pages/Ciudad/Ciudad.jsx"
import Playa from "./pages/Playa/Playa.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/Login/Login.jsx'
import CampingDetail from './pages/CampingDetail/CampingDetail.jsx'
import { UserContextProvider } from './context/userContext.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Provincias from './pages/Provincias/Provincias.jsx'
import Gracias from './pages/Gracias/Gracias.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='/categorias' element={<Categorias />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/accesibles' element={<Accesibles />} />
            <Route path='/todosaccesibles' element={<TodosAccesibles />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/entornos' element={<Entornos />} />
            <Route path='/montaña' element={<Montaña />} />
            <Route path='/playa' element={<Playa />} />
            <Route path='/ciudad' element={<Ciudad />} />
            <Route path='/acuaticos' element={<Acuaticos />} />
            <Route path='/provincias' element={<Provincias />} />
            <Route path='/gracias' element={<Gracias />} />
            <Route path='/campings/name/:name' element={<CampingDetail />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
