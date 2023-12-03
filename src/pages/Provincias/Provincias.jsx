import "./Provincias.css"
import { provincias } from "../../data/provincias";
import { useState } from "react";
import Titulo from "../../components/Titulo/Titulo";
import Subtitulo from "../../components/Subtitulo/Subtitulo";
const Provincias = () => {

  const [provinciasList, setProvinciasList] = useState(provincias)

  const filterProvincias = (prov) => {
    const findProvincia = provincias.filter((provincia) =>
      provincia.Nombre.toLowerCase().includes(prov.toLowerCase()))
    setProvinciasList(findProvincia);
  }


  return (
    <main className="main-provincia">

      <Titulo texto="Provincias" />
      <Subtitulo subtitulo="Aquí tienes una lista con todas las provincias de España, para que puedas elegir exactamente donde quieres buscar un camping" />
      <input type="text" onInput={(ev) => filterProvincias(ev.target.value)} placeholder="Busca una provincia" />
      <section className="section-provincia">
        {provinciasList.map((provincia) =>
          <article onClick={() => console.log("hola")} className="cards-provincia" key={provincia.Nombre}>
            <img className="foto-provincia" src={"https://res.cloudinary.com/dt9uzksq0/image/upload/v1700848663/mapa_xkginu.jpg"} alt="foto de mapa" />
            <h5 className="nombre-provincia">{provincia.Nombre}</h5>
          </article>
        )}
      </section>
    </main>
  )
}
export default Provincias;