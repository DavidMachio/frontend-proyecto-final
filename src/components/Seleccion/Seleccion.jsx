import "./Seleccion.css"
import { seleccion } from "../../data/seleccion"
import Navlink from "../../components/Botones/Navlink/navlink";

const Seleccion = () => {
  return (
    <main>
      <h1 className="paid">Nuestras recomendaciones de campings</h1>
      <article className="component">
        {seleccion.map((banner) =>
          <section className="seleccion" key={banner.name}>
            <img className="seleccion-cover" src={banner.img} alt="" />
            <div className="seleccion-info">
              <div className="seleccion-text">
                <h2>{banner.name}</h2>
                <h3>{banner.city}</h3>
                <Navlink word="Visitar" url={banner.link} />
              </div>

            </div>
          </section>)}


      </article>
    </main>
  )
}
export default Seleccion;