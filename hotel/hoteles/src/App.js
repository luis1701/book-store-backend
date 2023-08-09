import './App.css';
import { useEffect, useState } from 'react';
import PageAdmin from './components/PageAdmin';
import PageUser from './components/PageUser';

function App() {

  const [role, setRole] = useState()

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')

    const userInfoToObj = JSON.parse(userInfo)

    if (userInfoToObj.role === 'ADMIN') {
      setRole("ADMIN")
    } else {
      setRole("USER")
    }
  }, [])

  const onLogout = () => {
    localStorage.removeItem('userInfo')
    window.location.reload()
  }

  const getRoles = () => {
    switch (role) {
      case 'ADMIN':
        return (            
          <PageAdmin/>
        )
      case 'USER':
        return (
          <PageUser/>
        )
      default:
        return '';
    }
  }

  if (role === undefined) {
    return "Cargando..."
  }

  return (
    <div className="App"> 
      <body>
        <button onClick={() => onLogout()}>Logout</button>
        {getRoles()}
      </body>
    </div>
  );
}

export default App;
