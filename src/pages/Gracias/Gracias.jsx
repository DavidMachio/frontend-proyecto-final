import Enlace from "../../components/Botones/Enlace/Enlace"
import "./Gracias.css"

const Gracias = () => {
  return (
    <main className="main-gracias">
      <img src="https://static.vecteezy.com/system/resources/previews/024/725/026/non_2x/outdoor-camping-sticker-minimalist-outdoor-camping-large-sticker-ai-generated-free-png.png" alt="logotipo campcesible" />
      <h3>Con tus opiniones y sugerencias haces que sigamos mejorando y al mismo tiempo haciendo de nosotros una comunidad aún más grande</h3>
      <h2>Gracias</h2>
      <Enlace word={"Descrubrir"} url={"/categorias"} />
    </main>
  )
}
export default Gracias