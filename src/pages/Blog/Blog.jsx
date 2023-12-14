import { UserContext } from "../../context/userContext";
import { useContext, useEffect, useState, useRef } from "react";
import API from "../../API/API"
import "./Blog.css"



const Blog = () => {

  const { userData } = useContext(UserContext)
  const comentarioRef = useRef(null)
  const imgRef = useRef(null)
  const [publicaciones, setPublicaciones] = useState([])
  const [cargado, setCargado] = useState(false)
  const [allpost, setAllpost] = useState(false)

  const postSubmit = async (ev) => {


    const body = new FormData()
    body.append("comentario", comentarioRef.current.value)
    body.append("img", imgRef.current.files[0])
    body.append("user", userData.data.username)
    body.append("userAvatar", userData.data.avatar)
    body.append("userID", userData.data.id)


    await API.post("/blogcom/", body, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then(() => { setAllpost(!allpost) })

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

  useEffect(() => {
    getData()
  }, [allpost])

  return (
    <main>

      <section className="seccion-form-post">
        <form className="formulario-post" onSubmit={postSubmit}>
          <textarea className="text-publicacion" type="text" ref={comentarioRef} placeholder="comentario" maxLength="400" />
          <label htmlFor="imgpublicacion" className="label-inputfilepublicacion">
            <input type="file" id="imgpublicacion" className="input-inputfilepublicacion" ref={imgRef} />subir archivo</label>

          <button type="submit" className="enviar-comentario">enviar</button>
        </form>
      </section>
      <section className="seccion-list-publicaciones">
        {publicaciones.map((publicacion) => (
          <article className="publicacion-card" key={publicacion._id}>
            {userData.data.rol == "admin" ?
              <button className="eliminar-publicacion" onClick={() => handleDelete(publicacion._id)}>eliminar</button> :
              ""}
            <section>
              <img src={userData.data.avatar} alt="Imagen de perfil" />
              <h3>{userData.data.username}</h3>
            </section>
            <img src={publicacion.img} alt="" />
            <p>{publicacion.comentario}</p>
          </article>
        ))}
      </section>


    </main>
  )
}
export default Blog;