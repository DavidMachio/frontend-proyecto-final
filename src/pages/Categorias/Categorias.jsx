import "./Categorias.css"
import CardCategory from "../../components/CardCategory/CardCategory";
import Titulo from "../../components/Titulo/Titulo";
import Subtitulo from "../../components/Subtitulo/Subtitulo"

const Categorias = () => {
  return (
    <main className="categorias">
      <Titulo texto={"Categorias"} />
      <Subtitulo subtitulo={"Te lo hemos puesto fácil organizando todos nuestros campings en secciones principales, para que buscar tu lugar de vacaciones sea mucho más cómodo"} />
      <CardCategory imagen="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700848342/bungalow20accesible-15_gtqwm3.jpg" nombre="Accesibilidad" ciudad={"Descubre los más de 500 campings adaptados por toda España"} link="/accesibles" word="Ver" />
      <CardCategory imagen="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700137174/montan%CC%83aplaya_lj8xmm.jpg" nombre="Entornos" ciudad="Podrás elegir entre campings de playa, montaña o ciudad" link="/entornos" word="Ver" />
      <CardCategory imagen="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700848663/mapa_xkginu.jpg" nombre="Comunidades" ciudad="Todos lo campings clasificados por comunidades" link="/campings" word="Ver" />
      <CardCategory imagen="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700848967/portada-parques-acuaticos_tcedde.jpg" nombre="Parques acuáticos" ciudad="Los campings más divertidos, con los mejores parques acuáticos" link="/acuaticos" word="Ver" />
    </main>
  )
}
export default Categorias;