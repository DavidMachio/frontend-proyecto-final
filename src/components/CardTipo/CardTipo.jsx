import { NavLink } from "react-router-dom"
import "./CardTipo.css"

const CardTipo = ({ foto, icono, word, alt, link }) => {
  return (
    <NavLink className="cardtipo" to={link}>
      <article className="contenedor-tipo">
        <img className="cardtipo-img" src={foto} alt={alt} />
        <div className="info-cardtipo">
          <img className="cardtipo-logo" src={icono} alt={alt} />
          <h2 className="cardtipo-title">{word}</h2>
        </div>
      </article>
    </NavLink>
  )
}
export default CardTipo