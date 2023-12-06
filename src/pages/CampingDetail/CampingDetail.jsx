import "./CampingDetail.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import API from "../../API/API"

const CampingDetail = () => {


  const { name } = useParams()
  const [cargado, setCargado] = useState(false)
  const [camping, setCamping] = useState(null)
  const [puntuacion, setPuntuacion] = useState("")

  const [seccion, setSeccion] = useState("Instalaciones")
  const instalaciones = () => {
    setSeccion("Instalaciones")
  }
  const accesibilidad = () => {
    setSeccion("Accesibilidad")
  }
  const fotos = () => {
    setSeccion("Fotos")
  }
  const comentarios = () => {
    setSeccion("Comentarios")
  }
  const contacto = () => {
    setSeccion("Contacto")
  }
  const valoracion = () => {
    if (camping.puntuacion === 1) {
      setPuntuacion("⭐️")
    } else if (camping.puntuacion === 2) {
      setPuntuacion("⭐️ ⭐️")
    } else if (camping.puntuacion === 3) {
      setPuntuacion("⭐️ ⭐️ ⭐️")
    } else if (camping.puntuacion === 4) {
      setPuntuacion("⭐️ ⭐️ ⭐️ ⭐️")
    } else {
      setPuntuacion("⭐️ ⭐️ ⭐️ ⭐️ ⭐️")
    }
  }

  useEffect(() => {
    try {
      API.get(`/campings/name/${name}`).then((res) => {
        setCamping(res.data)
        valoracion()
        setCargado(true)
      })
    } catch (error) {

    }


  })


  return (
    <main className="main-campingdetail">
      {camping !== null && cargado == true ?
        <section className="campingdetail">
          <section className="cover">
            <img className="camping-fotocover" src={camping.imgs.cover} alt="Foto del camping" />
            <article className="info-camping">
              <section className="datos-camping">
                <h2>{camping.nombre}</h2>
                <h3>{camping.provincia}</h3>
                <h3>{camping.ciudad}</h3>
              </section>
              <section className="counter">
                <h4>{puntuacion}</h4>
              </section>
            </article>
          </section>
          <nav className="buttons-info">
            <button className="morebtn" onClick={instalaciones}>Instalaciones y servicios</button>
            <button className="morebtn" onClick={accesibilidad}>Accesibilidad</button>
            <button className="morebtn" onClick={fotos}>Fotos</button>
            <button className="morebtn" onClick={comentarios}>Comentarios</button>
            <button className="morebtn" onClick={contacto}>Contacto</button>
          </nav>
          <section>
            {seccion == "Instalaciones" ? (
              <section className="seccion-instalaciones">
                <h3> Entorno: {camping.entorno}</h3>
                <h3> Bungalow: {camping.bugalow == true ? ("si") : "no"}</h3>
                <h3> Parcela: {camping.parcela == true ? ("si") : "no"}</h3>
                <h3> Acampada libre: {camping.acampada_libre == true ? ("si") : "no"}</h3>
                <h3> Piscina: {camping.piscina == true ? ("si") : "no"}</h3>
                <h3> Parque acuático: {camping.parque_acuatico == true ? ("si") : "no"}</h3>
                <h3> Restaurante: {camping.restaurante == true ? ("si") : "no"}</h3>
                <h3> Tienda: {camping.tienda == true ? ("si") : "no"}</h3>
                <h3> Mascotas: {camping.mascotas == true ? ("si") : "no"}</h3>
                <h3> Zona infantil: {camping.zona_infantil == true ? ("si") : "no"}</h3>
              </section>
            ) : ""}
            {seccion == "Accesibilidad" ? (
              <section className="seccion-accesibilidad">
                <h2>Nivel de accesibilidad: {camping.nivel_accesibilidad}</h2>
                {camping.accesibilidad == true ? (
                  <section>
                    <h3>Visual: {camping.type.visual.descripcion}</h3>
                    <h3>Auditivo: {camping.type.auditivo.descripcion}</h3>
                    <h3>Movilidad: {camping.type.movilidad.descripcion}</h3>
                  </section>) :
                  <h3>No accesible</h3>}
              </section>
            ) : ""}
            {seccion == "Fotos" ? (
              <section className="seccion-fotos">
                <img className="camping-fotosinfo" src={camping.imgs.cover} alt="Foto del camping" />
                <img className="camping-fotosinfo" src={camping.imgs.img1} alt="Foto del camping" />
                <img className="camping-fotosinfo" src={camping.imgs.img2} alt="Foto del camping" />
              </section>
            ) : ""}
            {seccion == "Comentarios" ? (
              <section className="seccion-comentarios">
                <h2>Danos tu opinión sobre este camping</h2>
              </section>
            ) : ""}
            {seccion == "Contacto" ? (
              <section className="seccion-contacto">
                <h2>{camping.nombre}</h2>
                <h3>Teléfono: {camping.contacto.telefono}</h3>
                <h3>Website: {camping.contacto.website}</h3>
                <h3>Dirección: {camping.contacto.direccion}, {camping.ciudad} ({camping.provincia})</h3>
                <iframe src="https://maps.app.goo.gl/be3wjdJSToZdtmSJ7"></iframe>
              </section>
            ) : ""}
          </section>

        </section> : <h2>loading</h2>
      }

    </main >
  )
}

export default CampingDetail