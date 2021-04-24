import React, { useState } from 'react';
import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import * as styled from "../Assets/Styles/Styled";


// trigger para cambio de estado (modificar segun sea 
// necesario para mostrar login o registro )
const ChangeLogin = (props) => {
  return <styled.TextAcount onClick={props.login}>Ya tienes cuenta? <styled.Link>Ingresar</styled.Link></styled.TextAcount>
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
    <React.Fragment>
    <styled.GlobalStyle />
      {state === 'login' && (
        <Login></Login>)}
      {state === 'register' && (
        <Register></Register>)}
      {/* trigger de funcion cambio de estado */}
      <ChangeLogin login={triggerLoginState} />
      </React.Fragment>
  );
}

export default App;
