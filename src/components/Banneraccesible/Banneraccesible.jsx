
import { NavLink } from "react-router-dom";
import "./Banneraccesible.css"

const Banneraccesible = () => {
  return (
    <article className="banneraccesible">

      <section className="section-banneraccesible">
        <img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700137174/portadaaccesibles_ssn9fw.jpg" alt="" />
        <div className="text-banneraccesible">
          <h1>Más de 500 campings accesibles</h1>
          <p>Busca entre una gran colección de campings accesibles, catalogada por tipo de accesibilidad</p>
        </div>

      </section>
    </article>
  )
}

export default Banneraccesible;