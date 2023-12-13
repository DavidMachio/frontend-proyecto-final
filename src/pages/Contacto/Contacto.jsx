import { useState } from "react";
import "./Contacto.css"

const Contacto = () => {

  const [send, setSend] = useState(false)

  return (
    <main className="main-contacto">
      <section className="form-container-contacto">
        <h2>Contáctanos</h2>
        <form className="form-contacto" action="https://formsubmit.co/paginawebcampings@gmail.com" method="POST">
          <input type="text" name="Nombre" placeholder="Nombre" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="Asunto" placeholder="Asunto" />
          <textarea name="Comentario" placeholder="Cuentanos algo..."></textarea>
          <input type="submit" value="Enviar" className="enviar" onClick={() => setSend(true)}/>
          <input type="hidden" name="_next" value="http://localhost:5173/gracias" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_autoresponse" value="Tu mensaje ha sido recibido correctamente, muchas gracias por contactar con nosotros "></input>
        </form>
        {send == true && <h3>Enviando ....</h3>}

      </section>
      <section className="datos">
        <h3>Calle Fray Luis de León 11 (Madrid)</h3>
        <h3>915065645</h3>
        <h3>paginawebcampings@gmail.com</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.2037939442507!2d-3.6982515!3d40.40433590000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42262ddc570a69%3A0x91e725c709de38c2!2sC.%20de%20Fray%20Luis%20de%20Le%C3%B3n%2C%2011%2C%2028012%20Madrid!5e0!3m2!1ses!2ses!4v1701617414521!5m2!1ses!2ses"></iframe>
      </section>
    </main>
  )
}
export default Contacto;