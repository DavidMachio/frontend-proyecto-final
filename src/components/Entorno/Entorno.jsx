import "./Entorno.css"
import { entornos } from "../../data/entornos"
import CardTipo from "../CardTipo/CardTipo"

const Entorno = () => {
  return (
    <section className="main-entorno">
      <article className="entorno-carrousel">
        {entornos.map((entorno) =>
          <CardTipo key={entorno.entorno} foto={entorno.img} alt={entorno.entorno} icono={entorno.icono} word={entorno.entorno} link={entorno.link} />)}
      </article>
    </section>
  )
}
export default Entorno