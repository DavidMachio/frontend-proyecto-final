import "./CampingDetail.css"
import { useParams } from "react-router-dom"
import { useState, useEffect, useContext, useRef } from "react"
import API from "../../API/API"
import { NavLink } from "react-router-dom"

import { UserContext } from "../../context/userContext"
import BannerSuscribir from "../../components/BannerSuscribir/BannerSuscribir"


const CampingDetail = () => {

  const comentRef = useRef(null)
  const comimgRef = useRef(null)

  const { user } = useContext(UserContext)




  const { name } = useParams()
  const [cargado, setCargado] = useState(false)
  const [camping, setCamping] = useState(null)
  const [valoracion, setValoracion] = useState()
  const [newComentarios, setNewComentarios] = useState()
  const [comentar, setComentar] = useState(false)
  const [suscribirse, setSuscribirse] = useState(false)
  const [usuarioBloqueado, setUsuarioBloqueado] = useState(false)

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
  const showComentar = () => {
    setComentar(!comentar)
  }
  const showSuscribirse = () => {
    setSuscribirse(!suscribirse)
  }
  const showUsuarioBloqueado = () => {
    setUsuarioBloqueado(!usuarioBloqueado)
  }

  const printValoracion = () => {
    if (camping.puntuacion == 1) {
      setValoracion("⭐️")
    } else if (camping.puntuacion == 2) {
      setValoracion("⭐️ ⭐️")
    } else if (camping.puntuacion == 3) {
      setValoracion("⭐️ ⭐️ ⭐️")
    } else if (camping.puntuacion == 4) {
      setValoracion("⭐️ ⭐️ ⭐️ ⭐️")
    } else {
      setValoracion("⭐️ ⭐️ ⭐️ ⭐️ ⭐️")
    }
  }


  const commentSubmit = (ev) => {
    ev.preventDefault()

    const body = new FormData()
    body.append("comentario", comentRef.current.value)
    body.append("img", comimgRef.current.files[0])
    body.append("user", user.username)
    body.append("userAvatar", user.avatar)
    body.append("userID", user.id)

    API.post("/comentarios/", body, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then((res) => {
      const addcomment = new FormData()

      addcomment.append("campingID", camping._id)
      addcomment.append("commentID", res.data._id)

      API.put("/campings/addcom", addcomment)
    })
    setComentar(false)

  }


  const handleDelete = async (id) => {
    console.log("eliminando comentario")
    await API.delete(`/comentarios/${id}`)


  }




  useEffect(() => {
    try {
      API.get(`/campings/name/${name}`).then((res) => {
        setCamping(res.data)
        setNewComentarios(res.data.comentarios.reverse())

        setCargado(true)
        printValoracion()
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
                <h2>{camping.nombre.replace("Camping ", "")}</h2>
                <h3>{camping.provincia}</h3>
                <h3>{camping.ciudad}</h3>
              </section>
              <section className="point">
                <h4>{valoracion}</h4>
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
                <section className="seccion1-instalaciones">

                  <h3><span>Entorno:</span> {camping.entorno}</h3>
                  <h3><span>Bungalow:</span> {camping.bugalow == true ? ("si") : "no"}</h3>
                  <h3><span>Parcela:</span> {camping.parcela == true ? ("si") : "no"}</h3>
                  <h3><span>Acampada libre:</span> {camping.acampada_libre == true ? ("si") : "no"}</h3>
                  <h3><span>Piscina:</span> {camping.piscina == true ? ("si") : "no"}</h3>
                </section>
                <section className="seccion2-instalaciones">
                  <h3><span>Parque acuático:</span> {camping.parque_acuatico == true ? ("si") : "no"}</h3>
                  <h3><span>Restaurante:</span> {camping.restaurante == true ? ("si") : "no"}</h3>
                  <h3><span>Tienda:</span> {camping.tienda == true ? ("si") : "no"}</h3>
                  <h3><span>Mascotas:</span> {camping.mascotas == true ? ("si") : "no"}</h3>
                  <h3><span>Zona infantil:</span> {camping.zona_infantil == true ? ("si") : "no"}</h3>
                </section>
              </section>
            ) : ""}
            {seccion == "Accesibilidad" ? (
              <section className="seccion-accesibilidad">
                <h2><span>Nivel de accesibilidad:</span> {camping.nivel_accesibilidad}</h2>
                {camping.accesibilidad == true ? (
                  <section>
                    <h3><span>Visual:</span> {camping.type.visual.descripcion}</h3>
                    <h3><span>Auditivo:</span> {camping.type.auditivo.descripcion}</h3>
                    <h3><span>Movilidad:</span> {camping.type.movilidad.descripcion}</h3>
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

                {newComentarios.length == 0 ? <h2>Se el primero en dejar un comentario</h2> :
                  <h2>Danos tu opinión sobre este camping</h2>}
                <button onClick={user !== null && user.bloqueado == true ? showUsuarioBloqueado : user !== null ? showComentar :
                  showSuscribirse} className="agregar-comentario">Comentar</button>
                <section>
                  {suscribirse == true ?
                    <BannerSuscribir funcion={() => setSuscribirse(false)} titulo={"¿Quieres dejar tu comentario?"} mensaje={"Tus opiniones son importantes"} imagen={"/gif_caravana.gif"} segundomensaje={"Ingresa a tu cuenta o create una"} link={"/login"} accion={"Entrar"} />
                    : ""}
                </section>
                <section>
                  {usuarioBloqueado == true ?
                    <BannerSuscribir funcion={() => setUsuarioBloqueado(false)} titulo={"Upppsss..."} mensaje={"Tu cuenta está bloqueada"} imagen={"/gif_caravana.gif"} segundomensaje={"contacta con nosotros para más información"} link={"/contacto"} accion={"Contactar"} />
                    :
                    ""}
                </section>
                <section>
                  {comentar == true ?
                    <section className="container-formcomentario">
                      <form onSubmit={commentSubmit} className="form-comentario">
                        <div className="cerrar-crearcomentario" onClick={showComentar}><img src="/close.png" alt="" /></div>
                        <section className="datos-usuario">
                          <img src={user.avatar} alt="" />
                          <h2>{user.username}</h2>
                        </section>
                        <section className="container-input">
                          <label htmlFor="imgcomment" className="label-inputfile">
                            <img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1702154458/placeholder-image_p1zmh1.jpg" alt="" />
                            <input type="file" id="imgcomment" className="input-inputfile" ref={comimgRef} />
                          </label>
                        </section>

                        <textarea type="text" placeholder="texto(maximo 50 caracteres)" ref={comentRef} maxLength="50" required />

                        <button type="submit" className="boton-enviar">enviar</button>

                      </form>
                    </section> :
                    ""}
                </section>
                <section className="container-seccion-comentarios">
                  <section className="container-comentarios">
                    {newComentarios.map((com) => (
                      <article className="card-post" key={com._id}>
                        <div className="head-post">
                          <NavLink to={`/profile/public/${user.id}`}>
                            <img className="avatar-profile-post" src={com.userAvatar} alt="profile picture" /></NavLink>
                          <NavLink to={`/profile/public/${user.id}`}><h4>{com.user}</h4></NavLink>
                          {user.rol == "admin" ? <button onClick={() => handleDelete(com._id)}>Eliminar</button> :
                            ""}
                        </div>
                        <img className="foto-post" src={com.img} alt="" />
                        <p className="text-post">{com.comentario}</p>
                      </article>
                    ))}
                  </section>
                </section>
              </section>
            ) : ""}
            {seccion == "Contacto" ? (
              <section className="seccion-contacto">
                <h2>{camping.nombre.replace("Camping ", "")}</h2>
                <h3><span>Teléfono:</span> {camping.contacto.telefono}</h3>
                <h3><span>Website:</span> {camping.contacto.website.replace("https://", "")}</h3>
                <h3><span>Dirección:</span> {camping.contacto.direccion}, {camping.ciudad} ({camping.provincia})</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12152.791921604676!2d-3.6979188!3d40.4044647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227a18e1cbd83%3A0xace4a528a0e507e1!2sPor%20Talento%20Digital!5e0!3m2!1ses!2ses!4v1702426243449!5m2!1ses!2ses"  ></iframe>
              </section>
            ) : ""}
          </section>

        </section> :
        <div className="loading">
          <img className="gif" src="/gif_caravana.gif" />
        </div>
      }

    </main >
  )
}

export default CampingDetail