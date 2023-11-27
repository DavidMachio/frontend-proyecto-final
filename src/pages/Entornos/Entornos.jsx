
import Entorno from "../../components/Entorno/Entorno"
import Titulo from "../../components/Titulo/Titulo"
import Subtitulo from "../../components/Subtitulo/Subtitulo"
import "./Entornos.css"
import Descripcion from "../../components/Descripcion/Descripcion"

const Entornos = () => {
  return (
    <main className="main-entornos">
      <Titulo texto={"Entornos"} />
      <Subtitulo subtitulo={"¿Sabes en que entorno quieres disfrutar de tu estancia en un camping?"} />
      <Descripcion descripcion={"Puedes elegir parajes de ensueño entre montañas, rodeado de naturaleza, tomar el sol en las mejores playas de España, o incluso estar cerca de esa bonita ciudad que te apetece visitar"} />
      <Entorno />
    </main>
  )
}
export default Entornos