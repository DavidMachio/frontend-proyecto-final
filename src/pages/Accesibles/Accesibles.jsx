import "./Accesibles.css"
import { ripples } from "ldrs"
import { useState, useEffect } from "react"
import API from "../../API/API"
import CardCamping from "../../components/CardCamping/CardCamping"
import { accesibilidad } from "../../data/accesibilidad"
import CardTipo from "../../components/CardTipo/CardTipo"

const Accesibles = () => {

  ripples.register()

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
      {cargado == true ?
        <article className="entorno-carrousel">
          {accesibilidad.map((accesible) =>
            <div key={accesible.tipo} onClick={() => filtrar(accesible.tipo)}>
              <CardTipo foto={accesible.img} alt={accesible.tipo} icono={accesible.icono} word={accesible.tipo} /></div>)}
        </article>
        :

        // Default values shown
        <div className="loading">
          <h2 className="cargandocampings">Cargando campings accesibles</h2>
          <l-ripples
            size="45"
            speed="2"
            color="blue"
          ></l-ripples></div>}

      {notSelected == false ?
        <>
          {showAll == true
            ?
            <section>


              <ul className="container-cardcamping">
                {accesibles.map((camping) => (
                  <li key={camping._id}>
                    <CardCamping data={camping} entorno={true} />

                  </li>))}
              </ul>

            </section>
            :
            <ul className="container-cardcamping">
              {selected.map((camping) => (
                <li key={camping._id}>
                  <CardCamping data={camping} entorno={true} />

                </li>))}
            </ul>
          }
        </>
        :
        <></>
      }

    </main>
  )
}

export default Accesibles


//imagen={camping.imgs.cover} nombre={camping.nombre} provincia={camping.provincia} 