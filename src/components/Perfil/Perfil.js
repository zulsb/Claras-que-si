import React from "react";
import * as styled from "../Assets/Styles/Styled";

function Perfil() {
  return (
    <React.Fragment>
      <styled.BodySection>
        <styled.DivPerfil>
          <div>
            <h4>Nombre de usuario:</h4>
            <p>Maria4872385</p>
          </div>
          <div>
            <h4>Correo electrónico:</h4>
            <p>sjfahfa@jsfjhsf.com</p>
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
