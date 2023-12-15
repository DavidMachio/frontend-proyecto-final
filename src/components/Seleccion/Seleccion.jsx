import "./Seleccion.css"

import CardCategory from "../CardCategory/CardCategory"


const Seleccion = ({ array }) => {
  return (
    <main className="seleccion">
      <article className="carrousel">
        {array.map((banner) =>
          <CardCategory key={banner.name} imagen={banner.img} nombre={banner.name} ciudad={banner.city} link={banner.link} word="visitar" />)}
      </article>
    </main>
  )
}
export default Seleccion;

