
import { NavLink } from "react-router-dom";
import "./CardCamping.css"

const CardCamping = ({ data, entorno }) => {


  const accesible = entorno


  return (
    <NavLink to={`/campings/name/${data.nombre}`}>
      <article className="cardcamping">
        <section className="cardcamping-header">
          <section className="cardcamping-text">
            <h4 className="cardcamping-nombre">{data.nombre.replace("Camping ", "")}</h4>
            <h5 className="cardcamping-provincia">{data.provincia}</h5>
          </section>
          <section className="cardcamping-header-iconos">
            <img className="cardcamping-megusta" src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1701213533/nomegusta_betxzh.png" alt="icono megusta" />
            <img className="cardcamping-favoritos" src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1701213687/an%CC%83adir_fav_mzqsce.png" alt="icono favoritos" />
          </section>
        </section>
        <img className="cardcamping-img" src={data.imgs.cover} alt="Foto del camping" />
        <ul className="cardcamping-ul">

          {accesible == true ? (
            <>
              {data.type.visual.adaptado == true ? <li className="icono-accesibilidad"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1701081952/ciego_t0oz9k.png" alt="Icono accesibilidad visual" /></li> : ""}
              {data.type.auditivo.adaptado == true ? <li className="icono-accesibilidad"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1701081464/auditiva_q9lwfk.png" alt="Icono accesibilidad auditiva" /></li> : ""}
              {data.type.movilidad.adaptado == true ? <li className="icono-accesibilidad"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1701081467/movilidad_hpttok.png" alt="Icono accesibilidad de movilidad" /></li> : ""}
            </>
          ) : <>
            {data.entorno == "montaña" ? <li className="icono-entorno"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700939445/montan%CC%83as_w9xmba.png" alt="Icono montañas" />
              <h6>{data.entorno}</h6></li> : ""}
            {data.entorno == "playa" ? <li className="icono-entorno"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700939449/playa_p2lsxl.png" alt="Icono playa" />
              <h6>{data.entorno}</h6></li> : ""}
            {data.entorno == "ciudad" ? <li className="icono-entorno"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700939439/ciudad_ssg5kl.png" alt="Icono montaña" />
              <h6>{data.entorno}</h6></li> : ""}
          </>}
        </ul>
      </article>
    </NavLink>
  )
}
export default CardCamping;