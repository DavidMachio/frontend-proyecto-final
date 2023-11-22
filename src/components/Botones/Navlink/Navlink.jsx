import { NavLink } from "react-router-dom";
import "./Navlink.css"

const Navlink = ({ word, url }) => {
  return (
    <NavLink className="navlinkday" to={url}>{word}</NavLink>
  )

}
export default Navlink;