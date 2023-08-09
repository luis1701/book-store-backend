import { useEffect, useState } from "react"
import Hotel from './Hotel'

function Detalles(props) {
    const [ searchText, setSearchText ] = useState("")
    const { hotels, ciudades, addUrl, reservas, removePhoto } = props
    const [ role, setRole ] = useState()
    const [ user, setUser ] = useState()
  
    useEffect(() => {
      const userInfo = localStorage.getItem('userInfo')
      const userInfoAsObject = JSON.parse(userInfo)
      setRole(userInfoAsObject.role)
      setUser(userInfoAsObject.name)
    }, [])
  
    const filterHotels = (ciudad) => {
      return hotels.filter((hotel) => {
        return (hotel.ciudad.includes(searchText) || hotel.precio_noche >= searchText || hotel.ubicacion.includes(searchText)) && hotel.ciudad === ciudad        
      })
    }
  
    return (
      <div>
        <div>
          <input placeholder="Filtrar hoteles..." type="text" onChange={(e) => setSearchText(e.target.value)} />
        </div>
        {
          ciudades.map((ciudad) => {
            return (
              <div key={ciudad}>
                <div>
                  <h1>Hoteles en {ciudad}</h1>
                </div>
                <div style={{display:"flex", gap: "10px", background: "gold", padding: "10px", borderRadius: '10px'}}>
                  {filterHotels(ciudad).length > 0 ? filterHotels(ciudad).map((hotel, index) => {
                    return (
                      <Hotel key={index} hotel={hotel} role={role} addUrl={addUrl} reservas={reservas} removePhoto={removePhoto} user={user}/>
                    )
                  }) : "No se obtuvo resultados"}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
  
  export default Detalles