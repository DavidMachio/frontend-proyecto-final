import { useContext, useEffect, useState, useRef } from "react"
import { UserContext } from "../../context/userContext"
import API from "../../API/API"


import "./Comunicacion.css"


const Comunicacion = () => {

  const { userData } = useContext(UserContext)
  const tituloRef = useRef(null)
  const descripcionRef = useRef(null)
  const imgcommentRef = useRef(null)
  const [allpost, setAllpost] = useState(false)
  const [tareas, setTareas] = useState([])
  const [cargado, setCargado] = useState(false)
  const [descripcion, setDescripcion] = useState(false)
  const [revisar, setRevisar] = useState(false)
  const [confirmar, setConfirmar] = useState(false)
  const [dataDescription, setDataDescription] = useState()
  const [sending, setSending] = useState(false)

  const showRevisar = (_id) => {
    setRevisar(!revisar)
    setConfirmar(false)
  }
  const showConfirmar = (_id) => {
    setConfirmar(!confirmar)
    setRevisar(false)
  }

  const showDescripcion = (data) => {
    setDataDescription(data)
    setDescripcion(!descripcion)
  }

  const commentSubmit = async (ev) => {
    setSending(true)

    const body = new FormData()
    body.append("imgusuario", userData.data.avatar)
    body.append("nombreusuario", userData.data.username)
    body.append("titulo", tituloRef.current.value)
    body.append("descripcion", descripcionRef.current.value)
    body.append("imgcomment", imgcommentRef.current.files[0])
    body.append("userID", userData.data.id)


    await API.post("/todolist/", body, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(() => { setAllpost(!allpost) })
    setSending(false)
  }

  const getData = () => {
    try {
      API.get(`/todolist/`).then((res) => {
        setTareas(res.data.reverse())
        setCargado(true)
      })
    } catch (error) {
    }
  }

  const handleDelete = async (id) => {
    console.log("tarea eliminada")
    await API.delete(`/todolist/${id}`).then(() => { setAllpost(!allpost) })


  }

  const handleUpdate = async (id) => {
    await API.patch(`/todolist/${id}`).then(() => { setAllpost(!allpost) })
  }




  useEffect(() => {
    getData()
  }, [allpost])



  return (
    <main className="main-comunicacion">

      <section className="seccion-formulario-tareas">
        <form className="formulario-tareas" onSubmit={commentSubmit}>
          <input type="text" ref={tituloRef} placeholder="titulo" />

          <label htmlFor="imgtarea" className="label-inputfiletarea">
            <input type="file" id="imgtarea" className="input-inputfiletarea" ref={imgcommentRef} />subir archivo</label>
          <textarea type="text" ref={descripcionRef} placeholder="descripcion" maxLength="400" />
          <button type="submit" className="enviar-tarea">enviar</button>
          {sending == true && <h3>Enviando ...</h3>}
        </form>
      </section>
      <section className="contenedor-list-tareas">
        {cargado == false ? <>

        </>
          :
          <>
            {tareas.length <= 0 ? <div className="loading">
              No hay tareas
            </div> :
              <section className="seccion-list-tareas">

                {tareas.map((tarea) => (

                  <article className="card-tarea" key={tarea._id}>
                    <section className={revisar == true ? " head-card-tarea revisar" : confirmar ? " head-card-tarea confirmar" : "head-card-tarea"}>
                      <section className="datos-usertarea">
                        <section className="userdates-tarea">
                          <img src={tarea.imgusuario} alt="Imagen de perfil" />

                          <section>
                            <h2 className="user-tarea">{tarea.nombreusuario}</h2>

                            <section className="container-titulo-tarea">
                              <button onClick={() => showDescripcion(tarea)} className="boton-descripcion-tarea">⬇️</button>
                              <h2 className="titulo-tarea">{tarea.titulo}</h2>
                            </section>
                          </section>
                        </section>

                      </section>
                      <section className="botones-tarea">
                        <button onClick={() => handleDelete(tarea._id)}>Eliminar</button>
                      </section>
                    </section>


                  </article>
                ))}
                {descripcion == false ? "" : <section className="container-descripcion-tarea" onClick={() => showDescripcion(false)}>

                  <article className="datos-descripcion-tarea">
                    <h2 className="descripcion-tarea">{dataDescription.descripcion}</h2>
                    <img className="img-tarea" src={dataDescription.imgcomment} alt="" />
                  </article>
                </section>
                }

              </section>
            }
          </>}

      </section>


    </main >
  )
}

export default Comunicacion