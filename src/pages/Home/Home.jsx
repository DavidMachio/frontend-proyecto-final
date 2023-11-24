
import "./Home.css"
import Suscripcion from "../../components/Suscripcion/Suscripcion";

import CardCategory from "../../components/CardCategory/CardCategory";
import VideoHome from "../../components/VideoHome/VideoHome";

const Home = () => {
  return (
    <main className="home">
      <VideoHome />
      <CardCategory imagen="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700500207/sn0mrdapsyyaxip3swlw.webp" nombre="CampFun" ciudad="Madrid" link="/campings" word="visitar" titulo="Titulo de la sección" subtitulo="Descripción de la sección" />
      <Suscripcion />
      <CardCategory imagen="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700500207/sn0mrdapsyyaxip3swlw.webp" nombre="CampFun" ciudad="Madrid" link="/campings" word="visitar" titulo="Titulo de la sección" subtitulo="Descripción de la sección" />
    </main>
  )
}
export default Home;

//<NavLink to="/campings" className="title-navlink">Ver mas</NavLink>