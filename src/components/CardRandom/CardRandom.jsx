import "./CardRandom.css"
import { publicidad } from "../../data/publicidad"
import CardCategory from "../CardCategory/CardCategory"

const CardRandom = () => {



  const randomPubli = publicidad[Math.floor(Math.random() * publicidad.length)]

  return (
    <section>
      <CardCategory imagen={randomPubli.img} nombre={randomPubli.name} ciudad={randomPubli.city} word={"visitar"} link={"/recomendados"} />
    </section>
  )
}
export default CardRandom