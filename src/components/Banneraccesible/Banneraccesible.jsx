
import "./Banneraccesible.css"
import Navlink from "../Botones/Navlink/navlink";

const Banneraccesible = () => {
  return (
    <article className="banneraccesible">
      <h2>Disfrute sin barreras</h2>

      <section className="section-banneraccesible">
        <img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700137174/portadaaccesibles_ssn9fw.jpg" alt="" />
        <div className="text-banneraccesible">
          <h3>Más de 500 campings accesibles</h3>
          <p>Busca entre una gran colección de campings accesibles, catalogada por tipo de accesibilidad</p>
          <Navlink word="Explorar" url="/campings" />
        </div>

      </section>
    </article>
  )
}

export default Banneraccesible;