import Titulo from "../../components/Titulo/Titulo"
import "./Accesibles.css"
import CardCategory from "../../components/CardCategory/CardCategory"

const Accesibles = () => {
  return (
    <main>
      <Titulo texto={"Accesibles"} />
      <CardCategory imagen="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700848453/000076426_iwlszb.webp" nombre="Accesibilidad" ciudad="Más de 500 campings accesibles por toda España" link="/todosaccesibles" word="Ver todos" />
    </main>
  )
}

export default Accesibles