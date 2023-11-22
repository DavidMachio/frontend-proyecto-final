
import "./Home.css"
import Suscripcion from "../../components/Suscripcion/Suscripcion";
import Seleccion from "../../components/Seleccion/Seleccion";
import Banneraccesible from "../../components/Banneraccesible/Banneraccesible";
import Navlink from "../../components/Botones/Navlink/navlink";

const Home = () => {
  return (
    <main className="home">
      <section>
        <article className="video-container">
          <video src="./videohome.mp4" alt="Video promocional de un camping" loop muted autoPlay className="video" />
          <div className="title-container">
            <h1 className="title">Campcesible</h1>
            <h2 className="subtitle">Living the best experience</h2>
            <Navlink word="Discover" url="/campings" />
          </div>
        </article>

      </section>
      <Banneraccesible />
      <Seleccion />
      <Suscripcion />
    </main>
  )
}
export default Home;

//<NavLink to="/campings" className="title-navlink">Ver mas</NavLink>