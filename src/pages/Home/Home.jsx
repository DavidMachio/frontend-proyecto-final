
import "./Home.css"
import Suscripcion from "../../components/Suscripcion/Suscripcion";
import CardCategory from "../../components/CardCategory/CardCategory";
import VideoHome from "../../components/VideoHome/VideoHome";
import Titulo from "../../components/Titulo/Titulo";
import Subtitulo from "../../components/Subtitulo/Subtitulo";
import { useContext } from "react";
import { UserContext } from "../../context/userContext"

const Home = () => {


  const { user } = useContext(UserContext)

  return (
    <main className="home">
      <VideoHome />
      <Titulo texto={"Discapacidad sin barreras"} />
      <Subtitulo subtitulo={"Si tienes alguna discapacidad y estás buscando campings accesibles para viajar, déjanos ayudarte. En Campcesible encontrarás una gran colección con más de 500 campings adaptados a tus necesidades."} />
      <CardCategory imagen="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700848453/000076426_iwlszb.webp" nombre="Accesibles" ciudad="Campings adaptados a tus necesidades" link="/accesibles" word="Descubrir" />
      {user == null ? <Suscripcion /> : <></>}


    </main>
  )
}
export default Home;

//<NavLink to="/campings" className="title-navlink">Ver mas</NavLink>
/*<section>
<Titulo texto={"¿No sabes por donde empezar a buscar?"} />
<Subtitulo subtitulo={"Nosotros te ayudamos, entra y descubre nuestra selección para esta temporada, de los mejores campings en España."} />

</section>*/