import { useState, useEffect } from "react";
import "./ProvinciaUnica.css"
import { useParams } from "react-router-dom";
import API from "../../API/API"
import CardCamping from "../../components/CardCamping/CardCamping"
import Titulo from "../../components/Titulo/Titulo"
import Enlace from "../../components/Botones/Enlace/Enlace"

const ProvinciaUnica = () => {

  const { nombre } = useParams()
  const [cargado, setCargado] = useState(false)
  const [camping, setCamping] = useState([])

  useEffect(() => {
    try {
      API.get(`/campings/prov/${nombre}`).then((res) => {
        setCamping(res.data)
        setCargado(true)
      })
      console.log(camping)
    } catch (error) {

    }
  }, [])


  return (
    <main className="main-provinciaunica">
      <section className="header-provinciaunica">
        <Enlace word={"volver"} url={"/provincias"} />
        <Titulo texto={`Los mejores campings en ${nombre}`} />
      </section>
      {camping !== null && cargado == true ?
        <section className="container-provinciaunica">
          {camping.map((camp) => (
            <CardCamping data={camp} entorno={true} key={camp._id} />
          ))}
        </section>
        :
        <h2>loading</h2>
      }
    </main>
  )
}
export default ProvinciaUnica;