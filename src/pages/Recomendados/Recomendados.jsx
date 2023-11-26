import Seleccion from "../../components/Seleccion/Seleccion"
import Titulo from "../../components/Titulo/Titulo"
import { publicidad } from "../../data/publicidad"
import "./Recomendados.css"

const Recomendados = () => {
  return (
    <main className="Recomendados">
      <Titulo texto={"Nuestra selección"} />
      <Seleccion array={publicidad} />
    </main>
  )
}
export default Recomendados