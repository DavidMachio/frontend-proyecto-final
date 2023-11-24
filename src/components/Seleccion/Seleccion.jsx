import "./Seleccion.css"

import CardCategory from "../CardCategory/CardCategory"
import Titulo from "../Titulo/Titulo"
import Subtitulo from "../Subtitulo/Subtitulo"


const Seleccion = ({ array, subtitulo, titulo }) => {
  return (
    <main className="seleccion">
      <Titulo texto={titulo} />
      <Subtitulo subtitulo={subtitulo} />
      <article className="carrousel">
        {array.map((banner) =>
          <CardCategory key={banner.name} imagen={banner.img} nombre={banner.name} ciudad={banner.city} link={banner.link} word="visitar" />)}
      </article>
    </main>
  )
}
export default Seleccion;

