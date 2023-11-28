import Titulo from "../../components/Titulo/Titulo"
import "./Accesibles.css"
import { ripples } from "ldrs"
import { useState, useEffect } from "react"
import API from "../../API/API"
import Subtitulo from "../../components/Subtitulo/Subtitulo"
import CardCamping from "../../components/CardCamping/CardCamping"

const Accesibles = () => {

  ripples.register()

  const [accesibles, setAccesibles] = useState([])
  const [cargado, setCargado] = useState(false)
  const cargando = async () => {
    try {
      API.get("/accesibles/655c9f5c820cd1453556f8a7").then((res) => {
        setAccesibles(res.data)
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
    <main className="main-accesibles">
      <section>
        {cargado == true ?
          <>
            <Titulo texto={accesibles.titulo} />
            <Subtitulo subtitulo={accesibles.descripcion} />
            <img className="accesibles-cover" src={"https://res.cloudinary.com/dt9uzksq0/image/upload/v1700848342/bungalow20accesible-15_gtqwm3.jpg"} alt={accesibles.imgalt} />
            <ul className="container-cardcamping">
              {accesibles.campings.map((camping) => (
                <li key={camping._id}>
                  <CardCamping data={camping} entorno={true} />

                </li>))}
            </ul>
          </> :

          // Default values shown
          <div className="loading"><l-ripples
            size="45"
            speed="2"
            color="blue"
          ></l-ripples></div>}
      </section>
    </main>
  )
}

export default Accesibles


//imagen={camping.imgs.cover} nombre={camping.nombre} provincia={camping.provincia} 