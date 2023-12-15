import { useParams } from "react-router-dom"
import "./PublicProfile.css"
import { useEffect, useState } from "react"
import API from "../../API/API"
import CardCamping from "../../components/CardCamping/CardCamping"

const PublicProfile = () => {

  const { id } = useParams()

  const [userPublic, setUserPublic] = useState(null)
  const [userFavoritos, setUserFavoritos] = useState(null)
  const [cargado, setCargado] = useState(false)



  const getData = async () => {
    try {
      API.get(`/usuario/${id}`).then((res) => {
        setUserPublic(res.data)
        console.log(res.data)
        setUserFavoritos(res.data.favoritos.reverse())
        setCargado(true)
      })
    } catch (error) {
    }
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <main className="main-perfilPublico">

      {cargado == true ?
        <>
          {userPublic.bloqueado == true ?
            <section className="pag-usuariobloqueado">
              <img className="avatar-bloqueado" src={userPublic.avatar} alt="Foto de perfil del usuario" />
              <h2>{userPublic.nombre}</h2>
              <section className="mens-bloqueado">
                <h3>Lo sentimos</h3>
                <h3>Este usuario esta bloqueado</h3>
              </section>
            </section>


            :
            <section className="profile-public">
              <section className="datos-public">
                <img className="imgcover-public" src={userPublic.avatar} alt="Imagen de perfil" />
                <h2 className="username-public">{userPublic.username}</h2>
                <h3 className="rol-public">{userPublic.rol == "admin" ? "Administrador de Campcesible" : userPublic.rol}</h3>

                <h4 className="email-public">{userPublic.email}</h4>
                <h3 className="nombre-public">{userPublic.nombre}</h3>
                <p className="about-public">{userPublic.about}</p>



              </section>
              <section className="fav-public">
                <section className="container-fav-public">
                  {userFavoritos.length <= 0 ?
                    <h2>Este usuario no tiene campings añadidos a su lista de favoritos</h2> :
                    <section className="container-favoritos-public">
                      <h2>{userFavoritos.length} Favoritos</h2>
                      <article className="container-mapfav-public">
                        {userFavoritos.map((fav) => (

                          <CardCamping data={fav} key={fav._id} staroff={false} />

                        ))}
                      </article>
                    </section>}

                </section>
              </section>
            </section>}</>

        :
        <h2>espera</h2>
      }
    </main>
  )
}

export default PublicProfile


  //< h2 > { userPublic.username }</h2 >