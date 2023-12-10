import "./Editarusuarios.css"
import { useEffect, useState, useRef } from "react"
import API from "../../API/API"


const Editarusuarios = () => {
  const nombreValue = useRef(null)
  const usernameValue = useRef(null)
  const emailValue = useRef(null)
  const passwordValue = useRef(null)
  const [usuarios, setUsuarios] = useState([])
  const [nuevoUsuario, setNuevoUsuario] = useState(true)
  const [cargado, setCargado] = useState(false)
  const getUsuarios = async () => {
    const users = await API.get("/usuario")
    setUsuarios(users.data.reverse())
    setCargado(true)
  }


  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const body = new FormData();
    body.append("nombre", nombreValue.current.value)
    body.append("username", usernameValue.current.value)
    body.append("email", emailValue.current.value)
    body.append("password", passwordValue.current.value)

    await API.post("/usuario", body, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      setNuevoUsuario(!nuevoUsuario)
    }).catch((error) => {
    });

  }

  const handleDelete = async (id) => {
    await API.delete(`/usuario/${id}`)
    setNuevoUsuario(!nuevoUsuario)
  }
  const handleUpdate = async (usuario) => {
    const body = new FormData();
    {
      usuario.rol == "admin" ?
        body.append("rol", "user") :
        body.append("rol", "admin")
    }
    body.append("avatar", usuario.avatar)
    await API.patch(`/usuario/${usuario._id}`, body,
    ).then((res) => {
      setNuevoUsuario(!nuevoUsuario)
    }).catch((error) => {
    });
  }
  const handleBloquear = async (id, bloqueado) => {
    const body = new FormData();
    {
      bloqueado == false ?
        body.append("bloqueado", true) :
        body.append("bloqueado", false)
    }
    await API.patch(`/usuario/${id}`, body
    ).then((res) => {
      setNuevoUsuario(!nuevoUsuario)
    }).catch((error) => {
    });
  }

  useEffect(() => {
    getUsuarios()
  }, [nuevoUsuario])

  return (
    <main className="main-editarusuarios">
      {usuarios !== null && cargado == true ?
        <section className="cards-usuarios">
          <h2>Usuarios existentes</h2>
          {usuarios.map((usuario) => (
            <article key={usuario._id} className={`${usuario.bloqueado == false ? "card-usuario desbloqueado" : "card-usuario bloqueado"}`}>
              <div className="img-username">
                <div className="user-dates">
                  <img src={usuario.avatar} alt="" />
                  <div>

                    {usuario.rol === "admin" ?
                      <h3>{usuario.rol}</h3> :
                      ""}
                    <h2>{usuario.nombre}</h2>
                  </div>
                </div>
                <div className="buttons-settings">
                  <button onClick={() => handleDelete(usuario._id)}>Eliminar</button>
                  <button onClick={() => handleUpdate(usuario)}>{usuario.rol == "admin" ? "Usuario" : "Admin"}</button>
                  <button onClick={() => handleBloquear(usuario._id, usuario.bloqueado)}>{usuario.bloqueado == true ? "Activar" : "Bloquear"}</button>
                </div>

              </div>
              <h3>{usuario._id}</h3>
            </article>
          ))}
        </section>
        :
        <div className="container-gif">
          <img className="gif" src="/gif_caravana.gif" />
        </div>
      }
      <section className="formulario-crear">
        <h2>Crear un nuevo usuario</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="name" ref={nombreValue} />
          <input type="text" placeholder="username" ref={usernameValue} />
          <input type="email" placeholder="email" ref={emailValue} />
          <input type="number" placeholder="password" ref={passwordValue} />
          <button type="submit">Create</button>

        </form>
      </section>
    </main>
  )
}
export default Editarusuarios