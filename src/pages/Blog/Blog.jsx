import { UserContext } from "../../context/userContext";
import { useContext, useEffect, useState, useRef } from "react";
import API from "../../API/API"
import "./Blog.css"
import Titulo from "../../components/Titulo/Titulo"
import Subtitulo from "../../components/Subtitulo/Subtitulo"
import BannerSuscribir from "../../components/BannerSuscribir/BannerSuscribir";



const Blog = () => {

  const { userData, user } = useContext(UserContext)
  const comentarioRef = useRef(null)
  const imgRef = useRef(null)
  const [publicaciones, setPublicaciones] = useState([])
  const [cargado, setCargado] = useState(false)
  const [allpost, setAllpost] = useState(false)
  const [formulario, setFormulario] = useState(false)
  const [publicar, setPublicar] = useState(false)


  const postSubmit = async (ev) => {

    ev.preventDefault()

    const body = new FormData()
    body.append("comentario", comentarioRef.current.value)
    body.append("img", imgRef.current.files[0])
    body.append("user", userData.data.username)
    body.append("userAvatar", userData.data.avatar)
    body.append("userID", userData.data.id)


    await API.post("/blogcom/", body, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then(() => { setAllpost(!allpost) })

    setFormulario(false)

  }

  const getData = async () => {
    try {
      await API.get(`/blogcom/`).then((res) => {
        setPublicaciones(res.data.reverse())
        setCargado(true)
        console.log(res.data)
      })
    } catch (error) {
    }
  }

  const handleDelete = async (id) => {
    console.log("Publicacion eliminada")
    await API.delete(`/blogcom/${id}`).then(() => { setAllpost(!allpost) })
  }

  const showPublicar = () => {
    setPublicar(!publicar)
  }

  useEffect(() => {
    getData()
  }, [allpost])

  return (
    <main className="main-blog">

      {formulario == true ?
        <section className="seccion-form-post">
          <form className="formulario-post" onSubmit={postSubmit}>
            <textarea className="text-publicacion" type="text" ref={comentarioRef} placeholder="comentario" maxLength="400" />
            <label htmlFor="imgpublicacion" className="label-inputfilepublicacion">
              <input type="file" id="imgpublicacion" className="input-inputfilepublicacion" ref={imgRef} />subir archivo</label>

            <button type="submit" className="enviar-comentario">Enviar</button>
          </form>
        </section> :
        ""}
      <Titulo texto={"Blog"} />
      <Subtitulo subtitulo="Cuentanos aventuras experiencias de tus vacaciones, opiniones y recomendaciones sobre otros campings" />
      <Subtitulo subtitulo="
      Con ello ayudarás a otros usuarios"/>

      {publicar == true ? <BannerSuscribir titulo={"Uppsss..."} funcion={() => showPublicar(false)} imagen={"/gif_caravana.gif"} segundomensaje={"Suscribete para poder participar en el blog"} link={"/login"} accion={"Suscribete"} /> : ""}





      <section className="seccion-list-publicaciones">
        <button onClick={user !== null ? () => setFormulario(true) :
          () => showPublicar(true)} className="boton-comentar">Deja un comentario</button>
        {publicaciones.map((publicacion) => (
          <article className="publicacion-card" key={publicacion._id}>
            {user == null ? "" : userData.data.rol == "admin" || userData.data._id == publicacion.userID ?
              <button className="eliminar-publicacion" onClick={() => handleDelete(publicacion._id)}>eliminar</button> :
              ""}
            <section className="datos-usuario-publicacion">
              <img className="avatar-publicacion" src={publicacion.userAvatar} alt="Imagen de perfil" />
              <h3 className="usuario-publicacion">{publicacion.user}</h3>
            </section>
            <img className="img-publicacion" src={publicacion.img} alt="" />
            <p className="texto-publicacion">{publicacion.comentario}</p>
          </article>
        ))}
      </section>



    </main>
  )
}
export default Blog;