import "./Profile.css"
import { UserContext } from "../../context/userContext";
import { useContext, useState } from "react";

const Profile = () => {

  const [seccion, setSeccion] = useState(false);



  const { user, logout } = useContext(UserContext)
  return (
    <main className="main-profile">

      <section className="portada-profile">
        <img className="cover-profile" src={user.avatar} alt="profile picture" />
        <img className="avatar-profile" src={user.avatar} alt="profile picture" />
      </section>
      <section className="data">
        <h2 className="name-profile">{user.username}</h2>
        {user.rol == "admin" ?
          <h3 className="work-profile">CEO Campcesible</h3> : ""}
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
            <h3 className="title-post">Mis vacaciones de verano</h3>
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

//<h5>Email : {user.email}</h5>

/*<article className="card-post">
        <div className="head-post">
          <img className="avatar-profile-post" src={user.avatar} alt="profile picture" />
          <h4>{user.username}</h4>
        </div>
        <img className="foto-post" src={user.avatar} alt="" />
        <h3 className="title-post">Mis vacaciones de verano</h3>
        <p className="text-post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo sequi. Cumque id enim adipisci inventore ab eveniet, aliquid, atque, distinctio nihil eos error sequi eum quos possimus alias maiores.</p>
      </article>*/