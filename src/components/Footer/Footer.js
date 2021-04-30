import React from 'react';
import * as styled from "../Assets/Styles/Styled";
import logoicon from "../Assets/Images/logo-icon.png"

function Footer() {
    return (
        <React.Fragment>
            <styled.FooterSection>
                <styled.ContainerHome>
                    <div>
                        <div><styled.LogoIconFooter src={logoicon} alt="Logo"/></div>
                    </div>
                </styled.ContainerHome>
            </styled.FooterSection>
        </React.Fragment>
    )
}
export default Footer;
