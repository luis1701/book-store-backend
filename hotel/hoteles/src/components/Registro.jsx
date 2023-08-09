import { useState } from "react";
import { login } from '../services/IdentUsuarios'

function Registro(props) {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const {setIsAuth} = props

  const cleanState = () => {
    setUser("")
    setPassword("")
  }

  const onLogin = () => {
    const userInfo = login(user, password)
    
    if (userInfo) {
      setIsAuth(true)
      localStorage.setItem("userInfo", JSON.stringify(userInfo))
    } else {
      alert("Usuario no registrado o datos incorrectos")
      cleanState()
    }
  }

  return (
    <body>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', flexDirection: 'column' }}>
        <div>
          <h1>HOTELES</h1>
        </div>
        <div>
          <input value={user}  type="text" placeholder="Usuario" onChange={(event) => setUser(event.target.value)} />
          <input value={password} type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
          <button onClick={onLogin}>Login</button>
        </div>      
      </div>
    </body>
  )
}

export default Registro;
