import "./Acuaticos.css"
import { useState, useEffect } from "react"
import { ripples } from "ldrs"
import CardCamping from "../../components/CardCamping/CardCamping"
import Titulo from "../../components/Titulo/Titulo"
import Subtitulo from "../../components/Subtitulo/Subtitulo"
import API from "../../API/API"

const Acuaticos = () => {

  ripples.register()

  const [acuaticos, setAcuaticos] = useState([])
  const [cargado, setCargado] = useState(false)

  const cargando = async () => {
    try {
      API.get("/parquesacuaticos/655ca78ed362129ea6cf7151").then((res) => {
        setAcuaticos(res.data);
        setCargado(true)
      })
    } catch (error) {
      console.log("no se hace la peticion")
    }
  }

  useEffect(() => {
    cargando()
  }, [])




  return (
    <main className="main-acuaticos">
      <section>
        {cargado == true ?
          <>
            <Titulo texto={acuaticos.titulo} />
            <Subtitulo subtitulo={acuaticos.descripcion} />
            <img className="acuaticos-cover" src={acuaticos.img} alt={acuaticos.imgalt} />
            <ul className="container-cardcamping">
              {acuaticos.campings.map((camping) => (
                <li key={camping._id}>
                  <CardCamping data={camping} entorno={false} />
                </li>))}
            </ul>
          </> :
          <div className="loading"><l-ripples
            size="45"
            speed="2"
            color="blue"></l-ripples>
          </div>}
      </section>
    </main>
  )
}
export default Acuaticos