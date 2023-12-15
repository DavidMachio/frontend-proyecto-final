import "./CardCategory.css"
import Enlace from "../Botones/Enlace/Enlace";

const CardCategory = ({ imagen, nombre, ciudad, link, word, }) => {
  return (
    <article className="card-category-container">
      <section className="card-category">
        <img className="card-category-cover" src={imagen} alt="imagen de categoria de camping" />
        <div className="card-category-info">
          <div className="card-category-text">
            <h2 className="card-category-name">{nombre}</h2>
            <h3 className="card-category-city">{ciudad}</h3>
            <Enlace url={link} word={word} />
          </div>
        </div>
      </section>
    </article>
  )
}
export default CardCategory;