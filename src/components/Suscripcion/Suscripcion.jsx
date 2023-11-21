import { NavLink } from "react-router-dom"
import { suscripcion } from "../../data/suscripcion"
import "./Suscripcion.css"
suscripcion

const Suscripcion = () => {
  return (
    <article className="article">
      <div className="card">
        {suscripcion.map((section) =>
          <div className="article-card" key={section.title}>
            <h2 className="suscripcion-title">{section.title}</h2>
            <p>{section.text}</p>
            <p className="icon">{section.icon}</p>
            <NavLink to="/cuenta" className="suscribete">Suscribete</NavLink>
          </div>)}
      </div>
    </article>
  )
}
export default Suscripcion;