import { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { links } from "../../data/navegador";
import { Fade as Hamburger } from 'hamburger-react'
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"
import { useContext } from "react";
import { UserContext } from "../../context/userContext"

const Header = () => {

  const { user } = useContext(UserContext)

  const logo = "https://static.vecteezy.com/system/resources/previews/024/725/026/non_2x/outdoor-camping-sticker-minimalist-outdoor-camping-large-sticker-ai-generated-free-png.png"
  const logoalt = "icono de la app"


  const [isOpen, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)

  const localData = localStorage.getItem("theme")

  const setTheme = () => {
    ;
    if (localData == "light") {
      localStorage.setItem("theme", "dark")
    } else {
      localStorage.setItem("theme", "light")
    }
  }

  const toggleMenu = () => {
    setMenu(!menu)
  }
  const [isToggled, setToggle] = useState(false)

  const checkTheme = () => {
    if (!localData) {
      localStorage.setItem("theme", "light")
    }
    if (localData == "light") {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }

  useEffect(() => {
    checkTheme()
  }, [])

  return (
    <header className={`header${localData == "light" ? "Day" : "Night"}`} >
      <img
        src={logo} alt={logoalt} className={`header-logotipo `} />

      <nav className={`header-nav ${menu ? `Active` : ''}`}>

        <ul className="header-ul">
          {links.map((link) => <li key={link.name}>
            <NavLink to={link.link}>{link.name}</NavLink>
          </li>)}
        </ul>


      </nav>
      <div className="burguer"><div className="box" onClick={toggleMenu}><Hamburger className="botonburguer" toggled={isOpen} toggle={setOpen} size={20} direction="left" duration={0.4} distance="md" easing="ease-in-out" rounded label="Show menu" hideOutline={true} /></div>
      </div>

      <div className="log-sun">
        <NavLink to={user == null ? "/login" : "/profile"}><img className={`profile ${localData == "light" ? "profileDay" : "profileNight"}`} src={user !== null ? user.avatar : "https://res.cloudinary.com/dt9uzksq0/image/upload/v1700137175/profile_oqmxbe.jpg"} alt="" /></NavLink>
        <div className="click" onClick={setTheme}><Classic toggled={isToggled} toggle={setToggle} reversed className={`sol ${localData == "light" ? "solDay" : "solNight"}`} /></div>
      </div>

    </header>
  );
};
export default Header;

//*${localData == "light" ? "" : "header-logotipoNight"}


//<div className="click" onClick={setTheme}><Classic toggled={isToggled} toggle={setToggle} reversed className={`sol ${localData == "light" ? "solDay" : "solNight"}`} /></div>