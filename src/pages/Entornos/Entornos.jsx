
import Titulo from "../../components/Titulo/Titulo"
import Subtitulo from "../../components/Subtitulo/Subtitulo"
import "./Entornos.css"
import Descripcion from "../../components/Descripcion/Descripcion"
import { entornos } from "../../data/entornos"
import CardTipo from "../../components/CardTipo/CardTipo"
import { useState, useEffect } from "react";
import CardCamping from "../../components/CardCamping/CardCamping";
import API from "../../API/API";

import { ripples } from "ldrs";

const Entornos = () => {


  ripples.register()

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
        setShow("playa")
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
        <section className="contenedor-campings">
        {entClick === true ? 
        <>
          {cargado == true ? 
          <ul>
            {
              show === "montaña" 
              ?
              <>
            {montaña.campings.map((camp) => (
              <li key={camp._id}>
                <CardCamping data={camp} />
              </li>
            ))}
            </>
            : show === "playa" ?
            <>
            {playa.campings.map((camping) => (
              <li key={camping._id}>
                <CardCamping data={camping} />
              </li>
            ))}
            </>
            :
              <>
              {ciudad.campings.map((camping) => (
              <li key={camping._id}>
                <CardCamping data={camping} />
              </li>
            ))}
              </>
            }
            
            
          </ul>  
          :
          <div className="loading">
            <l-ripples
              size="45"
              speed="2"
              color="blue"
            ></l-ripples>
          </div>
        }
        </>
        :
        <></>}
        </section>

      </section>

    </main>
  )
}
export default Entornos