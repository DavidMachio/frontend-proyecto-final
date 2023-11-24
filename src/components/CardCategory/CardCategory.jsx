import "./CardCategory.css"
import Enlace from "../Botones/Enlace/Enlace";
import Titulo from "../../components/Titulo/Titulo";
import Subtitulo from "../../components/Subtitulo/Subtitulo"

const CardCategory = ({ imagen, nombre, ciudad, link, word, titulo, subtitulo }) => {
  return (
    <article className="card-category-container">
      <Titulo texto={titulo} />
      <Subtitulo subtitulo={subtitulo} />
      <section className="card-category">
        <img className="card-category-cover" src={imagen} alt="" />
        <div className="card-category-info">
          <div className="card-category-text">
            <h2>{nombre}</h2>
            <h3>{ciudad}</h3>
            <Enlace url={link} word={word} />
          </div>

        </div>
      </section>
    </article>
  )
}
export default CardCategory;