import "./VideoHome.css"
import Enlace from "../Botones/Enlace/Enlace";

const VideoHome = () => {

  return (
    <section>
      <article className="video-container">
        <video src="./cabeceraApp.mov" alt="Video promocional de un camping" loop muted autoPlay className="video" />
        <div className="title-container">
          <h1 className="title">Campcesible</h1>
          <h2 className="subtitle">Living the best experience</h2>
          <Enlace word="Descubrir" url="/categorias" />
        </div>
      </article>

    </section>
  )
}
export default VideoHome;