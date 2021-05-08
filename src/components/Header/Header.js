import React from 'react';
import * as styled from "../Assets/Styles/Styled";
import logo from "../Assets/Images/logo.png";
import LogOut from "../LogOut/LogOut";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <React.Fragment>
            <styled.Header>
                    <styled.ContainerHome>
                        <styled.HeaderContainer>                            
                            <div><styled.Logo src={logo} alt="Logo"/></div> 
                            <styled.Nav>
                                <li><styled.NavLink><Link to={"/"}><styled.HomeIcon /> Inicio</Link></styled.NavLink></li>
                                <li><styled.NavLink><Link to={"/notifications"}><styled.NotiIcon /> Notificaciones</Link></styled.NavLink></li>
                                <li><styled.NavLink><Link to={"/incomes"}><styled.UserIcon /> Perfil</Link></styled.NavLink></li>
                                <li><LogOut>Cerrar sesión</LogOut></li>
                            </styled.Nav>
                        </styled.HeaderContainer>
                    </styled.ContainerHome>
                </styled.Header>
      </React.Fragment>
    )
}
export default Header;
