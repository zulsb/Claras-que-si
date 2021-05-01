import React, { useState } from "react";
import LoginWithGoogle from "./LoginWithGoogle";
import * as styled from "../Assets/Styles/Styled";
import { useAuth } from "reactfire";

function Login(props) {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const auth = useAuth();
  const chageValue = (event) => {
    const {name, value} = event.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!login.email || !login.password) {
      return;
    }
    await auth.signInWithEmailAndPassword(login.email, login.password);
  }

  return (
    <React.Fragment>
      <styled.Container><div><h1>Iniciar Sesión</h1></div></styled.Container>
      <styled.Divform>
          <styled.LogoIcon />
          <LoginWithGoogle props={"Ingresar"} />
          <styled.ContainerButton><styled.Line></styled.Line><styled.TextO>ó</styled.TextO></styled.ContainerButton>
          <styled.Input id="email" name="email" type="text" autoComplete="username"
                 onChange={chageValue} placeholder="Correo electrónico" required />
              <styled.Input id="password" name="password" type="password" autoComplete="current-password"
                 onChange={chageValue} placeholder="Contraseña" required />
          <styled.Button onClick={onSubmit}>Ingresar</styled.Button>
      </styled.Divform>
    </React.Fragment>
  );
}

export default Login;
