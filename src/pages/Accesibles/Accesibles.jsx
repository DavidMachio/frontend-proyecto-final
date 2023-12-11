import "./Accesibles.css"
import { useState, useEffect } from "react"
import API from "../../API/API"
import CardCamping from "../../components/CardCamping/CardCamping"
import { accesibilidad } from "../../data/accesibilidad"
import CardTipo from "../../components/CardTipo/CardTipo"
import Titulo from "../../components/Titulo/Titulo"
import Subtitulo from "../../components/Subtitulo/Subtitulo"

const Accesibles = () => {


  const [accesibles, setAccesibles] = useState([])
  const [cargado, setCargado] = useState(false)

  const [notSelected, setNotSelected] = useState(true)

  const [showAll, setShowAll] = useState(true)
  const [selected, setSelected] = useState([])

  const cargando = async () => {
    try {
      API.get("/accesibles/655c9f5c820cd1453556f8a7").then((res) => {
        setAccesibles(res.data.campings)
        setCargado(true)
      })
    } catch (error) {
    }
  }

  const filtrar = (tipo) => {
    if (tipo == "Visual") {
      setSelected(accesibles.filter((camp) => camp.type.visual.adaptado === true))
      setShowAll(false)
    } else if (tipo == "Movilidad") {
      setSelected(accesibles.filter((camp) => camp.type.movilidad.adaptado === true))
      setShowAll(false)
    } else if (tipo == "Auditiva") {
      setSelected(accesibles.filter((camp) => camp.type.auditivo.adaptado === true))
      setShowAll(false)
    } else if (tipo == "todos") {
      setShowAll(true)
    } else {
      console.log("mal")
    }

    setNotSelected(false)
  }

  useEffect(() => {
    cargando()
  }, [])



  return (
    <main className="main-accesibles">
      <Titulo texto={"Campings accesibles"} />
      <Subtitulo subtitulo={"Más de 500 campings catalogados por tipo de accesibilad, para que puedas elegir el que más se adapte a tus necesidades."} />
      <div className="todos" onClick={() => setShowAll(true)}> boton de todos</div>
      {cargado == true ?

        <article className="entorno-carrousel">
          {accesibilidad.map((accesible) =>
            <article className="article-cardtipo" key={accesible.tipo}>
              <div key={accesible.tipo} onClick={() => filtrar(accesible.tipo)}>
                <CardTipo foto={accesible.img} alt={accesible.tipo} icono={accesible.icono} word={accesible.tipo} />
              </div>

            </article>

          )}
        </article>

        :

        // Default values shown
        <div className="loading">
          <h2 className="cargandocampings">Cargando campings accesibles</h2>

          <img className="gif" src="/gif_caravana.gif" />
        </div>}

      {notSelected == false ?
        <section>
          {showAll == true
            ?
            <article className="container-cardcamping">
              {accesibles.map((camping) => (
                <CardCamping key={camping._id} data={camping} entorno={true} />
              ))}
            </article>
            :
            <article className="container-cardcamping">
              {selected.map((camping) => (

                <CardCamping key={camping._id} data={camping} entorno={true} />

              ))}

            </article>

          }

        </section>
        :
        <>
        <article className="container-cardcamping">
              {accesibles.map((camping) => (
                <CardCamping key={camping._id} data={camping} entorno={true} />
              ))}
            </article>
        </>
      }
    </main>
  )
}

export default Accesibles


//imagen={camping.imgs.cover} nombre={camping.nombre} provincia={camping.provincia} 