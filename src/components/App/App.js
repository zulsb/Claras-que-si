import React, { useState } from 'react';
import './App.css';
import Login from '../Login/Login'
import Register from '../Register/Register'

// trigger para cambio de estado (modificar segun sea 
// necesario para mostrar login o registro )
const ChangeLogin = (props) => {
  return <button onClick={props.login}>login</button>
}
function App() {
  // funcion para cambiar estado entre login y registro
  // y mostrar segun sea necesario
  const [state, setState] = useState('login')
  const triggerLoginState = () => {
    if (state === 'login'){setState('register')}
    else setState('login')
  }
  return (
    <div className="App">
      {state === 'login' && (
        <Login></Login>)}
      {state === 'register' && (
        <Register></Register>)}
      {/* trigger de funcion cambio de estado */}
      <ChangeLogin login={triggerLoginState} />
    </div>
  );
}

export default App;
