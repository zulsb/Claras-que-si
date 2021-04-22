import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

function Register(props) {
  const firebase = useFirebaseApp();
  const user = useUser();
  const userTest = firebase.auth().currentUser;
  const [register, setRegister] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const submit = async (event) => {
    event.preventDefault();
    if (!register.email || !register.password || !register.userName) {
      return;
    }
    await firebase.auth().createUserWithEmailAndPassword(register.email, register.password);
  }

  const chageValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRegister({
      ...register,
      [name]: value
    });
  }
  const logOut = async () => {
    await firebase.auth().signOut();
    console.log(user);
  }
  console.log(userTest);
  return (
    <React.Fragment>
    {/* Solo se mostrará si no hay un usuario logeado */}
    { !user.data &&
      <React.Fragment>
        <form>
          <button onClick={() => console.log('google account')}>Ingresa con cuenta de google</button>
          <p>------- ó -------</p>
          <label htmlFor="userName">Usuario</label>
          <input id="userName" name="userName" type="text" autoComplete='username' value={register.userName} onChange={chageValue} required />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="text" autoComplete='username' value={register.email} onChange={chageValue} required />
          <label htmlFor="password">Contraseña</label>
          <input id="password" name="password" type="password" autoComplete='current-password' value={register.password} onChange={chageValue} required />
          <button onClick={submit}>Enviar</button>
        </form>
      </React.Fragment>
    }
    {/* Solo se mostrará si no hay un usuario logeado */}
    {
      user.data && <button onClick={logOut}>Cerrar session</button>
    }
    </React.Fragment>
  );
}

export default Register;
