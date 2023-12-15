import { NavLink } from "react-router-dom";
import "./Enlace.css"

const Enlace = ({ word, url }) => {
  return (
    <NavLink className="enlaceday enlace" to={url}>{word}</NavLink>
  )

}
export default Enlace;