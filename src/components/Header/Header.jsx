import { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { links } from "../../data/navegador";
import { Fade as Hamburger } from 'hamburger-react'
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"
import { useContext } from "react";
import { UserContext } from "../../context/userContext"

const Header = ({ action }) => {

  const { user } = useContext(UserContext)

  const logo = "https://static.vecteezy.com/system/resources/previews/024/725/026/non_2x/outdoor-camping-sticker-minimalist-outdoor-camping-large-sticker-ai-generated-free-png.png"
  const logoalt = "icono de la app"


  const [isOpen, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const [isToggled, setToggle] = useState(true)

  const MenuSelected = () => {
    setMenu(false)
    setOpen(false)
  }

  return (
    <header className={`${isToggled == true ? "headerDay" : "headerNight"}`} >
      <NavLink to={"/"}>
      <img src={logo} alt={logoalt} className={`header-logotipo `} />
      </NavLink>

      <nav className={`header-nav ${menu ? `Active` : ''}`}>

        <ul className="header-ul">
          {links.map((link) => <li key={link.name}>
            <div onClick={MenuSelected}><NavLink to={link.link}>{link.name}</NavLink></div>
          </li>)}
        </ul>


      </nav>
      <div className="burguer"><div className="box" onClick={toggleMenu}><Hamburger className="botonburguer" toggled={isOpen} toggle={setOpen} size={20} direction="left" duration={0.4} distance="md" easing="ease-in-out" rounded label="Show menu" hideOutline={true} /></div>
      </div>

      <div className="log-sun">
        <NavLink to={user == null ? "/login" : "/profile"}><img className={`profile profileDay`} src={user !== null ? user.avatar : "https://res.cloudinary.com/dt9uzksq0/image/upload/v1700137175/profile_oqmxbe.jpg"} alt="" /></NavLink>
        <div onClick={action} ><Classic toggled={isToggled} toggle={setToggle} reversed className={`sol  ${isToggled == true ? "solDay" : "solNight"}`} /></div>
      </div>

    </header>
  );
};
export default Header;

//*${localData == "light" ? "" : "header-logotipoNight"}


//<div className="click" onClick={setTheme}><Classic toggled={isToggled} toggle={setToggle} reversed className={`sol ${localData == "light" ? "solDay" : "solNight"}`} /></div>