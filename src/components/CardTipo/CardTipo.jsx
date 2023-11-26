import { NavLink } from "react-router-dom"
import "./CardTipo.css"

const CardTipo = ({ foto, icono, word, alt }) => {
  return (
    <section className="container-cardtipo">
      <NavLink className="navlink-entorno" to="">
        <article className="cardtipo">
          <img className="cardtipo-img" src={foto} alt={alt} />
          <div className="info-entorno">
            <img className="cardtipo-logo" src={icono} alt={alt} />
            <h2 className="title-entorno">{word}</h2>
          </div>
        </article>
      </NavLink>
    </section>
  )
}
export default CardTipo