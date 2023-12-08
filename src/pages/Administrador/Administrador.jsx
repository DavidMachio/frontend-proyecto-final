import { NavLink } from "react-router-dom"
import "./Administrador.css"

const Administrador = () => {
  return (
    <main className="main-administrador">
      <section>
        <NavLink to={"/editarusuarios"}>Usuarios</NavLink>
      </section>
      <section>Campings</section>
      <section>Comentarios</section>
    </main>
  )
}
export default Administrador
