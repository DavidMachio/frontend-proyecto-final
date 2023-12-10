
import { NavLink } from "react-router-dom";
import "./CardCamping.css"
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import API from "../../API/API";

const CardCamping = ({ data, entorno }) => {

  const [star, setStar] = useState(false)
  const { user } = useContext(UserContext)


  const addFavorito = async () => {
    const body = new FormData()
    body.append("usuarioID", user.id)
    body.append("campingID", data._id)

    await API.put("/usuario/add-favorito", body).then(() => {
      setStar(!star)
      console.log(user)
      console.log(data)
    })
  }

  const removeFavorito = async () => {
    const body = new FormData()
    body.append("usuarioID", user.id)
    body.append("campingID", data._id)

    await API.put("/usuario/remove-favorito", body).then(() => {
      setStar(!star)
    })
  }

  /*const changeEstrella = () => {
    setStar(!star)
    console.log(user)
    console.log(data)
  }*/



  const accesible = entorno

  useEffect(() => {

    user.favoritos.includes(data._id) && setStar(true)

  })

  return (

    <article className="cardcamping">
      <NavLink className="navlinkfav" onClick={star == false ? addFavorito : removeFavorito} ><img className="cardcamping-favoritos" src={star == false ? "https://res.cloudinary.com/dt9uzksq0/image/upload/v1701882236/estrellagris_e7wjo4.png" : "https://res.cloudinary.com/dt9uzksq0/image/upload/v1701213682/favoritos_jhqlvk.png"} alt="icono favoritos" />
      </NavLink>
      <NavLink to={`/campings/name/${data.nombre}`}>
        <section className="cardcamping-header">
          <section className="cardcamping-text">
            <h4 className="cardcamping-nombre">{data.nombre.replace("Camping ", "")}</h4>
            <h5 className="cardcamping-provincia">{data.provincia}</h5>
          </section>


        </section>
        <img className="cardcamping-img" src={data.imgs.cover} alt="Foto del camping" />
        <ul className="cardcamping-ul">

          {accesible == true ? (
            <>
              {data.type.visual.adaptado == true ? <li className="icono-accesibilidad ico-acc-night"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1701081952/ciego_t0oz9k.png" alt="Icono accesibilidad visual" /></li> : ""}
              {data.type.auditivo.adaptado == true ? <li className="icono-accesibilidad ico-acc-night"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1701081464/auditiva_q9lwfk.png" alt="Icono accesibilidad auditiva" /></li> : ""}
              {data.type.movilidad.adaptado == true ? <li className="icono-accesibilidad ico-acc-night"><img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1701081467/movilidad_hpttok.png" alt="Icono accesibilidad de movilidad" /></li> : ""}
            </>
          ) : <>
            {data.entorno == "montaña" ? <li className="icono-entorno"><img className=" ico-acc-night" src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700939445/montan%CC%83as_w9xmba.png" alt="Icono montañas" />
              <h6>{data.entorno}</h6></li> : ""}
            {data.entorno == "playa" ? <li className="icono-entorno"><img className=" ico-acc-night" src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700939449/playa_p2lsxl.png" alt="Icono playa" />
              <h6>{data.entorno}</h6></li> : ""}
            {data.entorno == "ciudad" ? <li className="icono-entorno"><img className=" ico-acc-night" src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700939439/ciudad_ssg5kl.png" alt="Icono montaña" />
              <h6>{data.entorno}</h6></li> : ""}
          </>}
        </ul>
      </NavLink>
    </article>

  )
}
export default CardCamping;