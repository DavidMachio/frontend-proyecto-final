import "./Profile.css"
import { UserContext } from "../../context/userContext";
import { useContext, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import API from "../../API/API";

const Profile = () => {
  const { login } = useContext(UserContext)
  const [seccion, setSeccion] = useState(false);
  const { user, logout } = useContext(UserContext)
  const [form, setForm] = useState(false)
  const avatarRef = useRef(null)
  const passwordRef = useRef(null)

  const showForm = () => {
    setForm(!form)
  }


  const avatarUpdate = async (ev) => {
    ev.preventDefault()
    const body = new FormData();

    body.append("avatar", avatarRef.current.files[0])
    await API.patch(`/usuario/${user.id}`, body, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then(() => {
      const loginBody = new FormData()

      loginBody.append("username", user.username)
      loginBody.append("password", passwordRef.current.value)

      API.post("/usuario/login", loginBody).then((res) => {
        login(
          {
            username: res.data.username,
            avatar: res.data.avatar,
            id: res.data.id,
            nombre: res.data.nombre,
            email: res.data.email,
            rol: res.data.rol,
            about: res.data.about,
            favoritos: res.data.favoritos,
          },
          res.data.token,
        )
      })
    }).catch((error) => {
    });
  }




  return (
    <main className="main-profile">

      <form onSubmit={avatarUpdate} className={form == false ? "form-inactive" : "form-cambiaravatar"}>
        <div className="cerrar-cambiaravatar" onClick={showForm}><img src="/close.png" alt="" /></div>
        <img className="img-label" src={user.avatar} alt="" />
        <article className="container-buttons">
          <label htmlFor="cambiaravatar" className="label-cambiaravatar">Subir foto</label>

          <input className="inputcambiar-avatar" type="file" id="cambiaravatar" ref={avatarRef} />
          <div onClick={() => setForm(false)}>
            <button type="submit" className="actualizar-avatar">Aceptar</button>
          </div>
          <input className="inputcambiar" type="password" ref={passwordRef} />
        </article>
      </form>

      <section className="portada-profile">
        <button className="edit-cover-profile" ><img src="/iconoeditar.png" alt="" /></button>
        <img className="cover-profile" src={user.avatar} alt="profile picture" />
        <article className="container-avatar">
          <img className="avatar-profile" src={user.avatar} alt="profile picture" />
          <button className="edit-avatar-profile" onClick={showForm}>
            <img src="/iconoeditar.png" alt="" />
          </button>
        </article>
      </section>
      <section className="data">
        <h2 className="name-profile">{user.username}</h2>
        {user.rol == "admin" ?
          <section className="admin-style">
            <h3 className="work-profile">CEO Campcesible</h3>
            <NavLink to="/administrador"><button className="morebtn administrador">Panel de administrador</button></NavLink>
          </section> : ""}
        <button className="morebtn logout" onClick={logout} >Logout</button>

      </section>
      <article className="about">
        <h6>About</h6>
        <p className="text-about">{user.about} Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo sequi. Cumque id enim adipisci inventore ab eveniet, aliquid, atque, distinctio nihil eos error sequi eum quos possimus alias maiores.</p>
      </article>
      <nav className="nav-info-profile">
        <button className="morebtn" onClick={() => setSeccion(false)}>Favoritos</button>
        <button className="morebtn" onClick={() => setSeccion(true)}>Posts</button>
      </nav>

      <section className="post-favoritos">
        {seccion == true ? (
          <article className="card-post">
            <div className="head-post">
              <img className="avatar-profile-post" src={user.avatar} alt="profile picture" />
              <h4>{user.username}</h4>
            </div>
            <img className="foto-post" src={user.avatar} alt="" />
            <p className="text-post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo sequi. Cumque id enim adipisci inventore ab eveniet, aliquid, atque, distinctio nihil eos error sequi eum quos possimus alias maiores.</p>
          </article>
        ) : (
          <article className="card-favorito">
            <h3>Favorios</h3>
            <img src="https://res.cloudinary.com/dt9uzksq0/image/upload/v1700940057/fotomontan%CC%83a_t8ciek.jpg" alt="" />
            <h3>Nombre</h3>
            <h4>Provincia</h4>
          </article>
        )}
      </section>


    </main>
  )
}
export default Profile;
