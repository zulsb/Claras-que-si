import React, { useState } from 'react';
import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import * as styled from "../Assets/Styles/Styled";


// trigger para cambio de estado (modificar segun sea 
// necesario para mostrar login o registro )
const ChangeLogin = (props) => {
  return <styled.TextAcount onClick={props.login}>No tienes cuenta? <styled.Link>{props.state === 'register' ? 'Ingresar' : 'Registrarse'}</styled.Link></styled.TextAcount>
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
      {state === 'login' && (<Login></Login>)}
      {state === 'register' && (<Register></Register>)}
      <styled.DivTextA>
        <ChangeLogin login={triggerLoginState} state={state} />
      </styled.DivTextA>
    </React.Fragment>
  );
}

export default App;
