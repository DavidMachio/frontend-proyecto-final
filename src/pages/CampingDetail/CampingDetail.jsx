import "./CampingDetail.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import API from "../../API/API"

const CampingDetail = () => {


  const { name } = useParams()
  const [cargado, setCargado] = useState(false)
  const [camping, setCamping] = useState(null)

  useEffect(() => {
    try {
      API.get(`/campings/name/${name}`).then((res) => {
        setCamping(res.data)
        setCargado(true)
      })
    } catch (error) {

    }
  })

  return (
    <main className="campingdetail">
      {camping !== null && cargado == true ? <>
        <h2>{camping.provincia}</h2>
        <img className="campingdetail-cover" src={camping.imgs.cover} alt="" />
        <section className="coment"></section>
      </> : <h2>loading</h2>}
      
    </main>
  )
}

export default CampingDetail