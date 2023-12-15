import Enlace from "../../components/Botones/Enlace/Enlace"
import "./NotFound.css"

const NotFound = () => {
  return (
    <main className="main-notfound">
      <img src="https://static.vecteezy.com/system/resources/previews/024/725/026/non_2x/outdoor-camping-sticker-minimalist-outdoor-camping-large-sticker-ai-generated-free-png.png" alt="logotipo campcesible" />
      <Enlace word={"Categorias"} url={"/categorias"} />
      <h2>uppsss</h2>
      <h3>Lo sentimos, creemos que esta página no existe, pulsa en el enlace para volver a nustra web y seguir navegando</h3>

    </main>
  )
}
export default NotFound