import "./VideoHome.css"
import Enlace from "../Botones/Enlace/Enlace";

const VideoHome = () => {

  return (
    <section>
      <article className="video-container">
        <video src="./videohome.mp4" alt="Video promocional de un camping" loop muted autoPlay className="video" />
        <div className="title-container">
          <h1 className="title">Campcesible</h1>
          <h2 className="subtitle">Living the best experience</h2>
          <Enlace word="Discover" url="/categorias" />
        </div>
      </article>

    </section>
  )
}
export default VideoHome;