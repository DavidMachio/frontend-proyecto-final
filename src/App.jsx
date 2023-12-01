
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState(true)

  const changeTheme = () => {
    setTheme(!theme)
  }

  return (
    <div className={theme == true ? "day" : "night"}>
      <Header action={changeTheme}/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
