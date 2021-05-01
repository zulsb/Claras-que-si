import React from 'react';
import { useAuth } from 'reactfire';
import { Button } from '../Assets/Styles/Styled';

function LogOut(props) {
  const auth = useAuth();
  const logOut = async () => {
    await auth.signOut();
  }
  return (
    <Button onClick={logOut}>Cerrar sesión</Button>
  );
}

export default LogOut;
