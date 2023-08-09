import { useEffect, useState } from "react"
import Detalles from "../components/Detalles"
import { getAll, create, update } from "../services/HotelServices"

const ciudades = ["La Paz", "Cochabamba", "Santa Cruz"]

function PageAdmin(params) {
  const  [ hotels, setHotel ] = useState([])

  useEffect(() => {    
    reloadData()
  }, [])

  const reloadData = () => {
    getAll()
      .then((result) => {        
        setHotel(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const resetForm = () => {
    setNewHotel({
        ciudad: 'La Paz',
        nombre: '',
        ubicacion: '',
        habitaciones: 0,
        precio_noche: 0,
        fotos: []
    })
  }

  const [newHotel, setNewHotel] = useState({
    ciudad: 'La Paz',
    nombre: '',
    ubicacion: '',
    habitaciones: 0,
    precio_noche: 0,
    fotos: []
  })

  useEffect(() => {
    const hotels = localStorage.getItem('hoteles')
    if (hotels) {
      setHotel(JSON.parse(hotels))
    }
  }, [])

  useEffect(() => {
    if (hotels.length > 0) {
      localStorage.setItem('hoteles', JSON.stringify(hotels))
    }
  }, [hotels])

  const saveHotel = async () => {
    const existHotel = hotels.find((hotel) => hotel.nombre === newHotel.nombre)
    if (existHotel) {
      resetForm()
      alert("El hotel fue registrado")
      return
    }
    await create(newHotel)
    resetForm()
    await reloadData()
  }

  const addUrl = async (hotel, urlPhoto) => {
    const existHotel = hotels.find((hoteles) => hoteles.nombre === hotel.nombre)
    if (!existHotel) {
      alert("El hotel no existe")
      return
    }
    
    const newPhoto = {
      name: "Foto " + (existHotel.fotos.length + 1),
      urlPhoto
    }

    existHotel.fotos = [...existHotel.fotos, newPhoto]
    await update(existHotel._id, { fotos: existHotel.fotos })
    await reloadData()
  }

  const removePhoto = async (fotoNombre, hotel) => {
    const otrasFotos = hotel.fotos.filter((foto) => foto.name !== fotoNombre)    
    await update(hotel._id, { fotos: otrasFotos })
    await reloadData()
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px'}}>
        <select value={newHotel.ciudad} onChange={(e) => setNewHotel({...newHotel, ciudad: e.target.value})}>
            {ciudades.map((value) => {
              return (
                  <option key={value} value={value}>{value}</option>
              )
            })}
        </select>
        <input
            type="text"
            value={newHotel.nombre}
            placeholder="Nombre del hotel" onChange={(e) => setNewHotel({...newHotel, nombre: e.target.value})}/>
        <input
            type="text"
            value={newHotel.ubicacion}
            placeholder="Ubicación / dirección" onChange={(e) => setNewHotel({...newHotel, ubicacion: e.target.value})}/>
        <input
            type="text"
            value={newHotel.habitaciones}
            placeholder="Habitaciones" onChange={(e) => setNewHotel({...newHotel, habitaciones: e.target.value})}/>
        <input
            type="text"
            value={newHotel.precio_noche}
            placeholder="Precio x habitación" onChange={(e) => setNewHotel({...newHotel, precio_noche: e.target.value})}/>
      
        <button disabled={newHotel.ciudad === "" || newHotel.nombre === "" || newHotel.ubicacion === "" || newHotel.habitaciones === "" || newHotel.precio_noche === ""} onClick={() => saveHotel()}>Registrar hotel</button>
        <br />
        <Detalles hotels={hotels} ciudades={ciudades} addUrl={addUrl} removePhoto={removePhoto}/>
    </div>
  )
}

export default PageAdmin