import React, { Suspense, useState } from 'react';
import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Icome from '../income/Income';
import {GlobalStyle} from "../Assets/Styles/Styled";
import * as styled from "../Assets/Styles/Styled";
import { useUser } from 'reactfire';


// trigger para cambio de estado (modificar segun sea 
// necesario para mostrar login o registro )
const ChangeLogin = (props) => {
  return <styled.TextAcount onClick={props.login} isRight={true}>{props.state === 'register' ? 'Ya' : 'No'} tienes cuenta? <styled.Link> {props.state === 'register' ? ' Iniciar sesión' : ' Registrarse'}</styled.Link></styled.TextAcount>
}

function App() {
  // funcion para cambiar estado entre login y registro
  // y mostrar segun sea necesario
  const [state, setState] = useState('login')
  const triggerLoginState = () => {
    if (state === 'login'){setState('register')}
    else setState('login')
  }
  const { data: user } = useUser();
  return (
    <Suspense fallback={<div>...loading</div>}>
    <GlobalStyle />
    {!user &&
      <React.Fragment>
          {state === 'login' && (<Login></Login>)}
          {state === 'register' && (<Register></Register>)}
          <styled.DivTextA>
            <ChangeLogin login={triggerLoginState} state={state} />
          </styled.DivTextA>
      </React.Fragment>
    }
    { user &&
      <Icome></Icome>
    }
    </Suspense>
  );
}

export default App;
