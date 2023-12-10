import { useParams } from "react-router-dom"
import "./PublicProfile.css"
import { useEffect, useState } from "react"
import API from "../../API/API"

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
      },[])

      return (
        <main className="perfilPublico">
            { cargado == true ?
            <h2>{userPublic.username}</h2>
            
        :
        <h2>espera</h2>
        }
        </main>
      )
}

export default PublicProfile