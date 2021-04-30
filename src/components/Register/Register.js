import React, { useState } from "react";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import LoginWithGoogle from "../Login/LoginWithGoogle";
import * as styled from "../Assets/Styles/Styled";


function Register(props) {
  const firebase = useFirebaseApp();
  const user = useUser();
  const userTest = firebase.auth().currentUser;
  const [register, setRegister] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const submit = async (event) => {
    event.preventDefault();
    if (!register.email || !register.password || !register.userName) {
      return;
    }
    await firebase
      .auth()
      .createUserWithEmailAndPassword(register.email, register.password);
  };

  const chageValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRegister({
      ...register,
      [name]: value,
    });
  };
  const logOut = async () => {
    await firebase.auth().signOut();
    console.log(user);
  };
  console.log(userTest);
  return (
    <React.Fragment>
      {/* Solo se mostrará si no hay un usuario logeado */}
      {!user.data && (
        <React.Fragment>
            <styled.Container><div><h1>Registro</h1></div></styled.Container>
          	<styled.Divform isRight={true}>
          	    <styled.LogoIcon />
          	    {/* componente de login con google (pendiente modificar condicionales) */}
          	    <LoginWithGoogle props={"Registrarse"} />
          	    <styled.ContainerButton><styled.Line></styled.Line><styled.TextO>ó</styled.TextO></styled.ContainerButton>
          	    <styled.Input id="userName" name="userName" type="text" autoComplete="username" value={register.userName}
          	      onChange={chageValue} placeholder="Usuario" required />
          	    <styled.Input id="email" name="email" type="text" autoComplete="username"
          	      value={register.email} onChange={chageValue} placeholder="Correo electrónico" required />
          	    <styled.Input id="password" name="password" type="password" autoComplete="current-password"
          	      value={register.password} onChange={chageValue} placeholder="Contraseña" required />
          	    <styled.Button onClick={submit}>Registrarse</styled.Button>
          	</styled.Divform>
        </React.Fragment>
      )}
      {/* Solo se mostrará si no hay un usuario logeado */}
      {user.data && <styled.Button onClick={logOut}>Cerrar session</styled.Button>}
    </React.Fragment>
  );
}

export default Register;
