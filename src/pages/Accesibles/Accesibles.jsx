import Titulo from "../../components/Titulo/Titulo"
import "./Accesibles.css"
import { ripples } from "ldrs"
import { useState, useEffect } from "react"
import API from "../../API/API"
import Subtitulo from "../../components/Subtitulo/Subtitulo"
import CardCamping from "../../components/CardCamping/CardCamping"
import { accesibilidad } from "../../data/accesibilidad"
import CardTipo from "../../components/CardTipo/CardTipo"

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
    }
  }

  useEffect(() => {
    cargando()
  }, [])



  return (
    <main className="main-accesibles">
      <article className="entorno-carrousel">
        {accesibilidad.map((accesible) =>
          <CardTipo key={accesible.tipo} foto={accesible.img} alt={accesible.tipo} icono={accesible.icono} word={accesible.tipo} />)}
      </article>

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
          <div className="loading">
            <h2>Cargando campings accesibles</h2>
            <l-ripples
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