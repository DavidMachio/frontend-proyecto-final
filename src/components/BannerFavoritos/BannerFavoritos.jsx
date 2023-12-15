import { NavLink } from "react-router-dom"
import "./BannerFavoritos.css"

const BannerFavoritos = ({ funcion, titulo, mensaje, imagen, segundomensaje, link, accion }) => {
  return (
    <main className="mainbannerfavorito">
      <article className="container-bannerfavorito">
        <div className="cerrarbanner" onClick={funcion}><img src="/close.png" alt="" /></div>
        <h2 className="texttitulofavorito">{titulo}</h2>
        <h3 className="textmensajefavorito">{mensaje}</h3>
        <img className="imgBannerfavorito" src={imagen} alt="Estrella" />
        <h4 className="textsegundomensajefavorito">{segundomensaje}</h4>
        <NavLink className="linkto" to={link}>{accion}</NavLink>
      </article>
    </main>
  )
}
export default BannerFavoritos