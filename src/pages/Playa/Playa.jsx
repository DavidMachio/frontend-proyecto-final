import { useState, useEffect } from "react";
import CardCamping from "../../components/CardCamping/CardCamping";
import CardTipo from "../../components/CardTipo/CardTipo";
import { entornos } from "../../data/entornos";
import "./Playa.css"
import { ripples } from "ldrs";
import API from "../../API/API";
const Playa = () => {

  ripples.register()

  const [playa, setPlaya] = useState([])
  const [cargado, setCargado] = useState(false)
  const getPlaya = async () => {
    try {
      API.get("/entornos/place/playa").then((res) => {
        setPlaya(res.data)
        console.log(res.data)
        setCargado(true)
      })
    } catch (error) {
    }
  }




  useEffect(() => {
    getPlaya()
  }, [])

  return (
    <main className="main-playa">
      <article className="entorno-carrousel">
        {entornos.map((entorno) =>
          <CardTipo key={entorno.entorno} foto={entorno.img} alt={entorno.entorno} icono={entorno.icono} word={entorno.entorno} link={entorno.link} />)}
      </article>
      <article>
        {cargado == true ?

          <ul className="container-cardcamping">
            {playa.campings.map((camping) => (
              <li key={camping._id}>
                <CardCamping data={camping} />
              </li>
            ))}
          </ul> :
          <div className="loading">
            <l-ripples
              size="45"
              speed="2"
              color="blue"
            ></l-ripples>
          </div>}
      </article>
    </main>
  )
}

export default Playa;