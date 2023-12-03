import "./Contacto.css"

const Contacto = () => {
  return (
    <main className="main-contacto">
      <section className="datos">datos</section>
      <section className="form-container-contacto">
        <form className="form-contacto" action="https://formsubmit.co/paginawebcampings@gmail.com" method="POST">
          <input type="text" name="Nombre" placeholder="Nombre" />
          <input type="email" name="email" placeholder="email" />
          <input type="text" name="Asunto" placeholder="Asunto" />
          <textarea name="Comentario" cols="15" rows="5"></textarea>
          <input type="submit" value="Enviar" />
          <input type="hidden" name="_next" value="http://localhost:5173/categorias" />
          <input type="hidden" name="_captcha" value="true" />
        </form>
      </section>
    </main>
  )
}
export default Contacto;