import "./Profile.css"
import { UserContext } from "../../context/userContext";
import { useContext, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import API from "../../API/API";
import CardCamping from "../../components/CardCamping/CardCamping";


const Profile = () => {


  const { user, logout, userData, saveUserData } = useContext(UserContext)
  const [form, setForm] = useState(false)
  const [panelAdmin, setPanelAdmin] = useState(false)
  const [aboutForm, setAboutForm] = useState(false)
  const avatarRef = useRef(null)
  const aboutRef = useRef(null)

  const showForm = () => {
    setForm(!form)
  }
  const showAboutForm = () => {
    setAboutForm(!form)
  }
  const showPanelAdmin = () => {
    setPanelAdmin(!panelAdmin)
  }


  const avatarUpdate = async (ev) => {
    ev.preventDefault()
    const body = new FormData();

    body.append("avatar", avatarRef.current.files[0])
    await API.patch(`/usuario/avatar/${user.id}`, body, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then(() => {
      API.get(`/usuario/${user.id}`).then((res) => {
        console.log("llega aqui")
        saveUserData(res)
      })
    }).catch((error) => {
    });
  }
  const aboutSubmit = (ev) => {
    ev.preventDefault()

    const body = new FormData()
    body.append("about", aboutRef.current.value)

    API.patch(`/usuario/datos/${user.id}`, body).then((res) => {
      API.get(`/usuario/${user.id}`).then((res) => {
        saveUserData(res)
      })
    })

  }




  return (
    <main className="main-profile">

      <form onSubmit={avatarUpdate} className={form == false ? "form-inactive" : "form-cambiaravatar"}>
        <div className="cerrar-cambiaravatar" onClick={showForm}><img src="/close.png" alt="" /></div>
        <img className="img-label" src={userData.data.avatar} alt="" />
        <article className="container-buttons">
          <label htmlFor="cambiaravatar" className="label-cambiaravatar">Subir foto</label>

          <input className="inputcambiar-avatar" type="file" id="cambiaravatar" ref={avatarRef} />
          <div onClick={() => setForm(false)}>
            <button type="submit" className="actualizar-avatar">Aceptar</button>
          </div>

        </article>
      </form>

      <section className="portada-profile">
        <img className="cover-profile" src={userData.data.avatar} alt="profile picture" />
        <article className="container-avatar">
          <img className="avatar-profile" src={userData.data.avatar} alt="profile picture" />
          <button className="edit-avatar-profile" onClick={showForm}>
            <img src="/iconoeditar.png" alt="" />
          </button>
        </article>
      </section>
      <section className="data">
        <h2 className="name-profile">{userData.data.username}</h2>
        {userData.data.rol == "admin" ?
          <section className="admin-style">
            <h3 className="work-profile">
              Administrador de Campcesible
            </h3>
            <button onClick={() => showPanelAdmin()} className="morebtn administrador">Panel de administrador</button>
          </section> : ""}
        {userData.data.bloqueado == true ?
          <section className="admin-style">
            <h3 className="work-profile">
              Vete a pastar
            </h3>
          </section> : ""}

        <article className="container-paneladmin">
          {panelAdmin == true ?
            <section className="seccion-administrar">
              <article className="botones-administrar">
                <h2>Panel de administrador</h2>
                <NavLink to={"/editarusuarios"}><button className="botones-panel">Usuarios</button></NavLink>
                <NavLink><button className="botones-panel">Campings</button></NavLink>
                <NavLink><button className="botones-panel">Comunicación</button></NavLink>
                <div className="cerrar-administrar" onClick={() => showPanelAdmin()}><img src="/close.png" alt="" /></div>
              </article>
            </section> :
            ""}
        </article>
        <button className="morebtn logout" onClick={logout} >Logout</button>

      </section>
      <form onSubmit={aboutSubmit} className={aboutForm == false ? "aboutform-inactive" : "aboutform-active"}>
        <div className="cerrarabout" onClick={() => setAboutForm(false)}><img src="/close.png" alt="" /></div>
        <h2>Solo existe una primera impresión</h2>
        <textarea type="text" placeholder="about you" ref={aboutRef} maxLength="150" required />
        <button type="submit" className="boton-enviar" onClick={() => setAboutForm(false)}>enviar</button>
      </form>
      <article className="about">
        <section className="title-about">
          <button className="boton-editabout" onClick={showAboutForm}><img className="imgedit-about" src="/iconoeditar.png" alt="" /></button>
          <h6>About</h6>
        </section>
        <p className="text-about">{userData.data.about == "" ? "Cuéntanos algo sobre ti" : userData.data.about}</p>
      </article>
      <nav className="nav-info-profile">
        <h2>Favoritos</h2>
      </nav>

      <section className="post-favoritos">
        <article className="container-cardcamping">
          {userData.data.favoritos.map((fav) => (
            <CardCamping key={fav._id} data={fav} entorno={true} />
          ))}
        </article>
      </section>


    </main>
  )
}
export default Profile;
