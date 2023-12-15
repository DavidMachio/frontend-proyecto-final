
import Titulo from "../../components/Titulo/Titulo"
import Subtitulo from "../../components/Subtitulo/Subtitulo"
import "./Entornos.css"
import { entornos } from "../../data/entornos"
import CardTipo from "../../components/CardTipo/CardTipo"
import { useState, useEffect } from "react";
import CardCamping from "../../components/CardCamping/CardCamping";
import API from "../../API/API";


const Entornos = () => {

  //datos guardados
  const [montaña, setMontaña] = useState(null)
  const [playa, setPlaya] = useState(null)
  const [ciudad, setCiudad] = useState(null)

  const [show, setShow] = useState()
  const [cargado, setCargado] = useState(false)

  //seleccion de entorno
  const [entClick, setEntClik] = useState(false)

  const getData = (data) => {
    setEntClik(true)

    if (data === "Montaña") {

      if (montaña === null) {
        setCargado(false)
        try {
          API.get("/entornos/place/montaña").then((res) => {
            setMontaña(res.data)
            setShow("montaña")
            setCargado(true)

          })
        } catch (error) {

        }
      } else {
        setShow("montaña")
        setCargado(true)
      }
    } else if (data === "Playa") {
      if (playa === null) {
        setCargado(false)
        try {
          API.get("/entornos/place/playa").then((res) => {
            setPlaya(res.data)
            setShow("playa")
            setCargado(true)
          })
        } catch (error) {

        }
      } else {
        setShow("playa")
        setCargado(true)
      }
    } else {
      if (ciudad === null) {
        setCargado(false)
        try {
          API.get("/entornos/place/ciudad").then((res) => {
            setCiudad(res.data)
            setShow("ciudad")
            setCargado(true)
          })
        } catch (error) {

        }
      } else {
        setShow("ciudad")
        setCargado(true)
      }
    }
  }







  return (
    <main className="main-entornos">
      <Titulo texto={"Entornos"} />
      <Subtitulo subtitulo={"¿Sabes en que entorno quieres disfrutar de tu estancia en un camping?"} />

      <section className="main-entorno">
        <article className="entorno-carrousel">
          {entornos.map((entorno) =>
            <article className="article-cardtipo" key={entorno.entorno}>
              <div onClick={() => getData(entorno.entorno)}>
                <CardTipo key={entorno.entorno} foto={entorno.img} alt={entorno.entorno} icono={entorno.icono} word={entorno.entorno} />
              </div>
            </article>)
          }
        </article>
        <section >
          {entClick === true ?
            <section>
              {cargado == true ?
                <section>
                  {
                    show === "montaña"
                      ?
                      <article className="container-cardcamping">
                        {montaña.campings.map((camp) => (

                          <CardCamping key={camp._id} data={camp} />

                        ))}
                      </article>
                      : show === "playa" ?
                        <article className="container-cardcamping">
                          {playa.campings.map((camping) => (

                            <CardCamping key={camping._id} data={camping} />

                          ))}
                        </article>
                        :
                        <article className="container-cardcamping">
                          {ciudad.campings.map((camping) => (

                            <CardCamping key={camping._id} data={camping} />

                          ))}
                        </article>
                  }


                </section>
                :
                <div className="loading">
                  <img className="gif" src="/gif_caravana.gif" />
                </div>
              }
            </section>
            :
            <Titulo texto={"Selecciona un entorno"} />}
        </section>
      </section>
    </main>
  )
}
export default Entornos