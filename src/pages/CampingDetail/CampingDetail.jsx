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
    <main>
      {camping !== null && cargado == true ? <>
        <img src={camping.imgs.cover} alt="" />
        <h2>{camping.provincia}</h2>
      </> : <h2>loading</h2>}
    </main>
  )
}

export default CampingDetail