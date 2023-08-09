import { useState } from "react"

function Hotel(props) {
    const { hotel, role, addUrl, reservas, removePhoto, user } = props
    const [ urlPhoto, setUrlPhoto] = useState("")

    const printUrlPhotos = () => {
      if (role === "ADMIN") {
        return (
          hotel.fotos.map((foto) => {
            return (
              <div>
                <a href={foto.urlPhoto} target="_blank" rel="noreferrer">{ foto.name }</a>
                {removePhoto ? <button onClick={() => removePhoto(foto.name, hotel)}>Borrar foto</button> : ''}
              </div>         
            )
          })
        )
      } else if (role === "USER") {
        return (
          hotel.fotos.map((foto) => {
            return (
              <div>
                <a href={foto.urlPhoto} target="_blank" rel="noreferrer">{ foto.name }</a>
              </div>         
            )
          })
        )
      }
    }

    const photoComponent = () => {
      return (
        <div style={{ margin: '16px' }}>
          <p><input value={urlPhoto} type="text" placeholder="Ingresa url de foto" onChange={(e) => setUrlPhoto(e.target.value)} /></p>
          <button onClick={() => {
            addUrl(hotel, urlPhoto)
            setUrlPhoto("")
          }}>Agregar url</button>
          <div style={{ margin: '16px', padding: '16px', background: 'Ivory', borderRadius: '4px' }}>
            {hotel.fotos && hotel.fotos.length > 0 ? printUrlPhotos() : 'Sin fotos'}            
          </div>     
        </div>
      )
    }

    const getActions = () => {
      switch (role) {
        case 'ADMIN':
          return (            
            photoComponent()
          )
        case 'USER':
          return (
            <div style={{ margin: '16px', padding: '16px', background: 'Ivory', borderRadius: '4px' }}>
              <button onClick={() => {reservas(hotel, user)}}>Reservar</button>              
              <p>{hotel.fotos && hotel.fotos.length > 0 ? printUrlPhotos() : 'Sin fotos'}</p>
            </div>
          )
        default:
          return '';
      }
    }
      
    return (
      <div style={{background: 'Ivory', width: "300px", borderRadius: "20px"}} key={hotel.nombre}>
        <p>Hotel: {hotel.nombre}</p>
        <p>Ciudad: {hotel.ciudad}</p>
        <p>Ubicación: {hotel.ubicacion}</p>
        <p>Habitaciones disponibles: {hotel.habitaciones}</p>
        <p>Precio x noche: {hotel.precio_noche}</p>
        {getActions()}
      </div>
    )
}

export default Hotel