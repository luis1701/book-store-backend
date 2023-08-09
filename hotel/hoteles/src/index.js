import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Registro from './components/Registro';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Controller />
  </React.StrictMode>
);

function Controller(params) {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      setIsAuth(true);
    }
  }, [])

  return (
    isAuth ? <App /> : <Registro setIsAuth={setIsAuth} />    
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
