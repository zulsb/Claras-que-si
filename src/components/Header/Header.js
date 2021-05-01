import React from 'react';
import * as styled from "../Assets/Styles/Styled";
import logo from "../Assets/Images/logo.png"

function Header() {
    return (
        <React.Fragment>
            <styled.Header>
                    <styled.ContainerHome>
                        <styled.HeaderContainer>
                            <div><styled.Logo src={logo} alt="Logo"/></div> 
                            <nav>
                                <styled.Nav>
                                    <li><styled.NavLink>Inicio</styled.NavLink></li>
                                    <li><styled.NavLink>Alarmas</styled.NavLink></li>
                                    <li><styled.NavLink>Perfil</styled.NavLink></li>
                                    <li><styled.ButtonNav>Cerrar sesión</styled.ButtonNav></li>
                                </styled.Nav>
                            </nav>
                        </styled.HeaderContainer>
                    </styled.ContainerHome>
                </styled.Header>
      </React.Fragment>
    )
}
export default Header;
