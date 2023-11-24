import { useState ,useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { links } from "../../data/navegador";
import { Fade as Hamburger } from 'hamburger-react'
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"



const Header = () => {

  const logo = "https://images.vexels.com/media/users/3/129716/isolated/preview/fac546f594872b2ec3959892f2067dc9-insignia-de-camping-2.png"
  const logoalt = "icono de la app"


  const [isOpen, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)

  const localData =  localStorage.getItem("theme")

  const setTheme = () => {
  ;
    if (localData == "light"){
      localStorage.setItem("theme", "dark")
    }else {
      localStorage.setItem("theme", "light")
    }
  }

  const toggleMenu = () => {
    setMenu(!menu)
  }
  const [isToggled, setToggle] = useState(false)

  const checkTheme = () => {
    if (!localData) {
      localStorage.setItem("theme" , "light")
    }
    if (localData == "light"){
      setToggle(true)
    }else {
      setToggle(false)
    }
  }

  useEffect(() => {
    checkTheme()
}, [])

  return (
    <header className={`header${localData == "light" ? "Day" : "Night"}`} >
      <img
        src={logo} alt={logoalt} className={`header-logotipo ${localData == "light" ? "" : "header-logotipoNight"}`} />

      <nav className={`header-nav ${menu ? `Active` : ''}`}>

        <ul className="header-ul">
          {links.map((link) => <li key={link.name}>
            <NavLink to={link.link}>{link.name}</NavLink>
          </li>)}
        </ul>


      </nav>
      <div  className="burguer"><div className="box" onClick={toggleMenu}><Hamburger className="botonburguer" toggled={isOpen} toggle={setOpen} size={20} direction="left" duration={0.4} distance="md" easing="ease-in-out" rounded label="Show menu" hideOutline={true} /></div>
      </div>

      <div className="log-sun">
        <NavLink ><img className={`profile ${localData == "light" ? "profileDay" : "profileNight"}`} src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700137175/profile_oqmxbe.jpg" alt="" /></NavLink>
        <div className="click" onClick={setTheme}><Classic toggled={isToggled} toggle={setToggle} reversed className={`sol ${localData == "light" ? "solDay" : "solNight"}`}/></div>
      </div>

    </header>
  );
};
export default Header;