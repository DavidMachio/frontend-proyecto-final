import { useState } from "react"
import "./CardCamping.css"

const CardCamping = ({ data, entorno }) => {


  const accesible = entorno


  return (
    <article className="cardcamping">
      <img className="cardcamping-img" src={data.imgs.cover} alt="Foto del camping" />
      <h4 className="cardcamping-nombre">{data.nombre}</h4>
      <h5 className="cardcamping-provincia">{data.provincia}</h5>
      <ul className="cardcamping-ul">

        {accesible == true ? (
          <>
            {data.type.visual.adaptado == true ? <li className="icono-accesibilidad"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1701081952/ciego_t0oz9k.png" alt="Icono accesibilidad visual" /></li> : ""}
            {data.type.auditivo.adaptado == true ? <li className="icono-accesibilidad"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1701081464/auditiva_q9lwfk.png" alt="Icono accesibilidad auditiva" /></li> : ""}
            {data.type.movilidad.adaptado == true ? <li className="icono-accesibilidad"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1701081467/movilidad_hpttok.png" alt="Icono accesibilidad de movilidad" /></li> : ""}
          </>
        ) : <ul>
          {data.entorno == "montaña" ? <li className="icono-entorno"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700939445/montan%CC%83as_w9xmba.png" alt="Icono montañas" /></li> : ""}
          {data.entorno == "playa" ? <li className="icono-entorno"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700939449/playa_p2lsxl.png" alt="Icono playa" /></li> : ""}
          {data.entorno == "ciudad" ? <li className="icono-entorno"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700939439/ciudad_ssg5kl.png" alt="Icono montaña" /></li> : ""}
        </ul>}
      </ul>
    </article>
  )
}
export default CardCamping;