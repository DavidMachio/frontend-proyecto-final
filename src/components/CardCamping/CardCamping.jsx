
import { NavLink } from "react-router-dom";
import "./CardCamping.css"
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import API from "../../API/API";
import BannerFavoritos from "../BannerFavoritos/BannerFavoritos";

const CardCamping = ({ data, entorno, staroff }) => {

  const [star, setStar] = useState(false)
  const { user, userData, saveUserData } = useContext(UserContext)
  const [suscribirse, setSuscribirse] = useState(false)
  const [usuarioBloqueado, setUsuarioBloqueado] = useState(false)


  const addFavorito = async () => {
    const body = new FormData()
    body.append("usuarioID", user.id)
    body.append("campingID", data._id)

    await API.put("/usuario/add-favorito", body).then(() => {
      API.get(`/usuario/${user.id}`).then((res) => {
        console.log("llega aqui")
        saveUserData(res)
        setStar(true)
      })
    })
  }
  const showAddFav = () => {
    setSuscribirse(!suscribirse)
  }

  const showUsuarioBloqueado = () => {
    setUsuarioBloqueado(!usuarioBloqueado)
  }

  const removeFavorito = async () => {
    const body = new FormData()
    body.append("usuarioID", user.id)
    body.append("campingID", data._id)

    await API.put("/usuario/remove-favorito", body).then(() => {
      API.get(`/usuario/${user.id}`).then((res) => {
        console.log("llega aqui")
        saveUserData(res)
        setStar(false)
      })
    })
  }

  /*const changeEstrella = () => {
    setStar(!star)
    console.log(user)
    console.log(data)
  }*/

  const checkfav = () => {
    if (user !== null) {
      userData.data.favoritos.some(fav => fav._id === data._id) && setStar(true)
    }
  }

  const accesible = entorno

  useEffect(() => {

    checkfav()


  }, [])

  return (

    <article className="cardcamping">

      {suscribirse == true ?
        <section className="bannercrearfav">
          <BannerFavoritos funcion={() => setSuscribirse(false)} titulo={"Crea tu propia lista"} imagen={"https://res.cloudinary.com/dt9uzksq0/image/upload/v1701213682/favoritos_jhqlvk.png"} segundomensaje={"Ingresa a tu cuenta o create una"} link={"/login"} accion={"Entrar"} />
        </section>
        : ""}


      {usuarioBloqueado == true ?
        <section className="bannercrearfav">
          <BannerFavoritos funcion={() => setUsuarioBloqueado(false)} titulo={"Uppsss..."} imagen={"https://res.cloudinary.com/dt9uzksq0/image/upload/v1701213682/favoritos_jhqlvk.png"} mensaje={"Tu cuenta esta bloqueada"} segundomensaje={"Contacta para más información"} link={"/contacto"} accion={"contactar"} />
        </section>
        : ""}

      {staroff == false ? "" : <article className="starfav" onClick={user !== null && user.bloqueado == true ? showUsuarioBloqueado : user !== null ? (star == false ? addFavorito : removeFavorito) : showAddFav} ><img className="cardcamping-favoritos" src={star == false ? "https://res.cloudinary.com/dt9uzksq0/image/upload/v1701882236/estrellagris_e7wjo4.png" : "https://res.cloudinary.com/dt9uzksq0/image/upload/v1701213682/favoritos_jhqlvk.png"} alt="icono favoritos" />
      </article>}


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