import { useState, useEffect } from "react";
import CardCamping from "../../components/CardCamping/CardCamping";
import CardTipo from "../../components/CardTipo/CardTipo";
import { entornos } from "../../data/entornos";
import "./Montaña.css"
import { ripples } from "ldrs";
import API from "../../API/API";
const Montaña = () => {

  ripples.register()

  const [montaña, setMontaña] = useState([])
  const [cargado, setCargado] = useState(false)
  const getMontañas = async () => {
    try {
      API.get("/entornos/place/montaña").then((res) => {
        setMontaña(res.data)
        console.log(res.data)
        setCargado(true)
      })
    } catch (error) {
    }
  }




  useEffect(() => {
    getMontañas()
  }, [])

  return (
    <main className="main-montaña">
      <article className="entorno-carrousel">
        {entornos.map((entorno) =>
          <CardTipo key={entorno.entorno} foto={entorno.img} alt={entorno.entorno} icono={entorno.icono} word={entorno.entorno} link={entorno.link} />)}
      </article>
      <article>
        {cargado == true ?

          <ul className="container-cardcamping">
            {montaña.campings.map((camping) => (
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

export default Montaña;