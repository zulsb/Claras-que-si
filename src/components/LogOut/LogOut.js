import React from 'react';
import { useAuth } from 'reactfire';
import { ButtonNav } from '../Assets/Styles/Styled';

function LogOut(props) {
  const auth = useAuth();
  const logOut = async () => {
    await auth.signOut();
  }
  return (
    <ButtonNav onClick={logOut}>Cerrar sesión</ButtonNav>
  );
}

export default LogOut;
