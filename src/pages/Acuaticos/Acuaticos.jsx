import "./Acuaticos.css"
import { useState, useEffect } from "react"
import Titulo from "../../components/Titulo/Titulo"
import Subtitulo from "../../components/Subtitulo/Subtitulo"
import API from "../../API/API"

const Acuaticos = () => {

  const [acuaticos, setAcuaticos] = useState([])
  const [cargado, setCargado] = useState(false)

  const cargando = async () => {
    try {
      API.get("/parquesacuaticos").then((res) => {
        setAcuaticos(res.data);
        console.log(res.data[0].campings[0].nombre)
        setCargado(true)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    cargando()
  }, [])




  return (
    <main>
      <Titulo texto={"Parques acuáticos"} />
      <Subtitulo subtitulo={"Divierteté lo mas grande en los mejores campings con los mejores parques acuáticos, el sitio perfecto para disfrutar en familia y un lugar donde se lo podrán pasafr en grande los más pequeños"} />
      <ul>
        {cargado == true ?
          <>
            <p>{acuaticos[0].campings[0].nombre}</p>
            <img src={acuaticos[0].campings[0].imgs.cover} alt="" />
          </> : <p></p>}
      </ul>
    </main>
  )
}
export default Acuaticos