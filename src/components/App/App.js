import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { SuspenseWithPerf } from 'reactfire'
import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import {GlobalStyle} from "../Assets/Styles/Styled";
import * as styled from "../Assets/Styles/Styled";
import { useUser } from 'reactfire';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notification';
import Categories from '../Categories/Categories'
import Income from '../Income/Income';


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
    <SuspenseWithPerf fallback={<div>...loading</div>}>
    <GlobalStyle />
    <Router>
    { user && <Header></Header> }
      <Switch>
        <Route exact path="/">
          {!user &&
            <React.Fragment>
                {state === 'login' && (<Login></Login>)}
                {state === 'register' && (<Register></Register>)}
                <styled.DivTextA>
                  <ChangeLogin login={triggerLoginState} state={state} />
                </styled.DivTextA>
            </React.Fragment>
          }
          { user && <Body></Body> }
        </Route>
        <Route path="/alarms">
          <Notification></Notification>
        </Route>
        <Route path="/categories">
          <Categories></Categories>
        </Route>
        <Route path="/incomes">
          <Income></Income>
        </Route>
      </Switch>
      { user && <Footer></Footer> }
    </Router>
    </SuspenseWithPerf>
  );
}

export default App;
