import { NavLink } from "react-router-dom"
import "./BannerSuscribir.css"

const BannerSuscribir = ({ funcion, titulo, mensaje, imagen, segundomensaje, link, accion }) => {
  return (
    <main className="mainbanner">
      <article className="container-bannersuscribir">
        <div className="cerrarbanner" onClick={funcion}><img src="/close.png" alt="" /></div>
        <h2 className="texttitulo">{titulo}</h2>
        <h3 className="textmensaje">{mensaje}</h3>
        <img className="imgBanner" src={imagen} alt="" />
        <h4 className="textsegundomensaje">{segundomensaje}</h4>
        <NavLink className="linkto" to={link}>{accion}</NavLink>
      </article>
    </main>
  )
}
export default BannerSuscribir