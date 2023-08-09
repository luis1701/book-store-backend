import { useEffect, useState } from "react"
import Detalles from "../components/Detalles"
import { getAll, update } from "../services/HotelServices"
import { create } from "../services/ReservaServices"

const ciudades = ["La Paz", "Cochabamba", "Santa Cruz"]

function PageUser(params) {
  const  [ hotels, setHotel ] = useState([])  

  useEffect(() => {
    reloadData()
  }, [])

  useEffect(() => {
    if (hotels.length > 0) {
      localStorage.setItem('hoteles', JSON.stringify(hotels))
    }
  }, [hotels])

  const reloadData = () => {
    getAll()
      .then((result) => {
        setHotel(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const addUrl = (hotel, urlPhoto) => {
    const existHotel = hotels.find((hoteles) => hoteles.nombre === hotel.nombre)
    const indexHotel = hotels.findIndex((hoteles) => hoteles.nombre === hotel.nombre)
    if (!existHotel) {
      alert("El hotel no existe")
      return
    }
    
    const newPhoto = {
      name: "Foto " + (existHotel.fotos.length + 1),
      urlPhoto        
    }

    existHotel.fotos.push(newPhoto)
    hotels.splice(indexHotel, 1, existHotel)
    setHotel(hotels)
    localStorage.setItem('hoteles', JSON.stringify(hotels))

  }

  const reservas = async (hotel, user) => {
    const hotelUpdate = hotels.find((hotelSelect) => hotelSelect.nombre === hotel.nombre)
    //const indexHotel = hotels.findIndex((hoteles) => hoteles.nombre === hotel.nombre)

    if (hotelUpdate.habitaciones > 0) {
      hotelUpdate.habitaciones = hotel.habitaciones - 1
    } else {
      alert("No hay habitaciones disponibles")
    }    
    /*hotels.splice(indexHotel, 1, hotelUpdate)    
    setHotel(hotels)
    localStorage.setItem('hoteles', JSON.stringify(hotels))*/
    
    const reserva = {
      hotel: hotelUpdate.nombre,
      usuario: user
    }

    await create(reserva)
    await update(hotelUpdate._id, { habitaciones: hotelUpdate.habitaciones })
    await reloadData()
    alert("Habitación reservada por " + user + " en el hotel " + hotelUpdate.nombre)
  }


  const removePhoto = (fotoNombre, fotosHotel, hotel) => {
    const otrasFotos = hotel.fotos.filter((foto) => foto.name !== fotoNombre)
    hotel.fotos = otrasFotos
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px'}}>        
        <Detalles hotels={hotels} ciudades={ciudades} removePhoto={removePhoto} addUrl={addUrl} reservas={reservas} />
    </div>
  )
}

export default PageUser