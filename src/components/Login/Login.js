import React, { Component } from "react";
import LoginWithGoogle from "./LoginWithGoogle";
import * as styled from "../Assets/Styles/Styled";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <styled.Container><div><h1>Iniciar Sesión</h1></div></styled.Container>
        <styled.Divform>
            <styled.Thumbnail />
            <LoginWithGoogle props={"Ingresar"} />
            <styled.ContainerButton><styled.Line></styled.Line><styled.TextO>ó</styled.TextO></styled.ContainerButton>
            <styled.Input id="email" name="email" type="text" autoComplete="username"
          	      value="" onChange="" placeholder="Correo electrónico" required />
          	    <styled.Input id="password" name="password" type="password" autoComplete="current-password"
          	      value="" onChange="" placeholder="Contraseña" required />
            <styled.Button>Ingresar</styled.Button>
        </styled.Divform>
      </React.Fragment>
    );
  }
}

export default Login;
