
import { suscripcion } from "../../data/suscripcion"
import "./Suscripcion.css"
import Enlace from "../Botones/Enlace/Enlace"
import Titulo from "../Titulo/Titulo"
import Subtitulo from "../Subtitulo/Subtitulo"
suscripcion

const Suscripcion = () => {
  return (
    <article className="article">
      <Titulo texto={"Forma parte de campcesible"} />
      <Subtitulo subtitulo={"Únete a nuestra comunidad de usuarios, y descrube las grandes ventajas de las que disfrutaras formando parte de una gran comunidad como la nuestra, ayudándonos a crecer y ayudando a otros usuarios a elegir su lugar perfecto de vacaciones."} />
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