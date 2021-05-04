import React from 'react';
import * as styled from "../Assets/Styles/Styled";
import logo from "../Assets/Images/logo.png";
import LogOut from "../LogOut/LogOut";
import { MdHome, MdNotifications, MdPerson } from "react-icons/md";

function Header() {
    return (
        <React.Fragment>
            <styled.Header>
                    <styled.ContainerHome>
                        <styled.HeaderContainer>
                            <div><styled.Logo src={logo} alt="Logo"/></div> 
                            <nav>
                                <styled.Nav>
                                    <li><styled.NavLink><MdHome style={{ position: "relative", top: "2px"}} /> Inicio</styled.NavLink></li>
                                    <li><styled.NavLink><MdNotifications style={{ position: "relative", top: "2px"}} /> Notificaciones</styled.NavLink></li>
                                    <li><styled.NavLink><MdPerson style={{ position: "relative", top: "2px"}} /> Perfil</styled.NavLink></li>
                                    <li><LogOut>Cerrar sesión</LogOut></li>
                                </styled.Nav>
                            </nav>
                        </styled.HeaderContainer>
                    </styled.ContainerHome>
                </styled.Header>
      </React.Fragment>
    )
}
export default Header;
