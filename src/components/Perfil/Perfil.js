import React from "react";
import { useUser } from "reactfire";
import * as styled from "../Assets/Styles/Styled";

function Perfil() {
  const { data: user } = useUser();
  return (
    <React.Fragment>
      <styled.BodySection>
        <styled.DivPerfil>
          <div>
            <h4>Nombre de usuario:</h4>
            <p>{user.displayName}</p>
          </div>
          <div>
            <h4>Correo electrónico:</h4>
            <p>{user.email}</p>
          </div>
          <div>
            <h4>Contraseña:</h4>
            <p>***************</p>
          </div>
        </styled.DivPerfil>
      </styled.BodySection>
    </React.Fragment>
  );
}

export default Perfil;
