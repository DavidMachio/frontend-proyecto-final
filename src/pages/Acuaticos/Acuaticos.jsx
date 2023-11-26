import "./Acuaticos.css"
import { useState, useEffect } from "react"
import Titulo from "../../components/Titulo/Titulo"
import Subtitulo from "../../components/Subtitulo/Subtitulo"

const Acuaticos = () => {

  const [acuaticos, setAcuaticos] = useState([])






  return (
    <main>
      <Titulo texto={"Parques acuáticos"} />
      <Subtitulo subtitulo={"Divierteté lo mas grande en los mejores campings con los mejores parques acuáticos, el sitio perfecto para disfrutar en familia y un lugar donde se lo podrán pasafr en grande los más pequeños"} />
    </main>
  )
}
export default Acuaticos