import "./Profile.css"
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

const Profile = () => {
  const { user, logout } = useContext(UserContext)
  return (
    <main className="profilePage">
      <section className="img">
        <img className="avatarimg" src={user.avatar} alt="profile picture" />
      </section>
      <section className="data">
        <h2>{user.nombre}</h2>
        {user.rol == "admin" ? <h3>Rol : Administrador infiltrado ...</h3> : ""}
        <h4>Username : {user.username}</h4>
        <h5>Email : {user.email}</h5>
        <h6>About : {user.about}</h6>
        <button className="logoutbtn" onClick={logout} >Logout</button>
      </section>
    </main>
  )
}
export default Profile;