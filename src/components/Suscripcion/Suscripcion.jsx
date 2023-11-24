
import { suscripcion } from "../../data/suscripcion"
import "./Suscripcion.css"
import Enlace from "../Botones/Enlace/Enlace"
import Titulo from "../Titulo/Titulo"
import Subtitulo from "../Subtitulo/Subtitulo"
suscripcion

const Suscripcion = () => {
  return (
    <article className="article">
      <Titulo texto={"Titulo de la sección suscribir"} />
      <Subtitulo subtitulo={"descripción de la suscripción"} />
      <div className="card">
        {suscripcion.map((section) =>
          <div className="article-card" key={section.title}>
            <h2 className="suscripcion-title">{section.title}</h2>
            <p>{section.text}</p>
            <p className="icon">{section.icon}</p>
            <Enlace word="Suscribete" url="/cuenta" />
          </div>)}
      </div>
    </article>
  )
}
export default Suscripcion;