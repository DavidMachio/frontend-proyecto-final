import "./CardCamping.css"

const CardCamping = ({ data }) => {
  return (
    <article className="cardcamping">
      <img className="cardcamping-img" src={data.imgs.cover} alt="Foto del camping" />
      <h4 className="cardcamping-nombre">{data.nombre}</h4>
      <h5 className="cardcamping-provincia">{data.provincia}</h5>
      <ul className="cardcamping-ul">
        {data.type.visual.adaptado == true ? <li className="icono-accesibilidad"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1701081952/ciego_t0oz9k.png" alt="Icono accesibilidad visual" /></li> : ""}
        {data.type.auditivo.adaptado == true ? <li className="icono-accesibilidad"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1701081464/auditiva_q9lwfk.png" alt="Icono accesibilidad auditiva" /></li> : ""}
        {data.type.movilidad.adaptado == true ? <li className="icono-accesibilidad"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1701081467/movilidad_hpttok.png" alt="Icono accesibilidad de movilidad" /></li> : ""}

      </ul>
    </article>
  )
}
export default CardCamping;