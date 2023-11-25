import Enlace from "../Botones/Enlace/Enlace"
import "./CardTipo.css"

const CardTipo = ({ foto, icono, word, alt }) => {
  return (
    <main className="container-cardtipo">
      <article className="cardtipo">
        <img className="cardtipo-img" src={foto} alt={alt} />
        <div className="info-entorno">
          <img className="cardtipo-logo" src={icono} alt={alt} />
          <h2 className="title-entorno">{word}</h2>
        </div>
      </article>
      <Enlace word={"Ver todos"} />
    </main>
  )
}
export default CardTipo