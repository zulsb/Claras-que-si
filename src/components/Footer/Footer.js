import React from 'react';
import * as styled from "../Assets/Styles/Styled";

function Footer() {
    return (
        <React.Fragment>
            <styled.FooterSection>
                <styled.ContainerHome>
                    <div>
                        <div><styled.Logo src="../Assets/images/" alt="Logo"/></div>
                    </div>
                </styled.ContainerHome>
            </styled.FooterSection>
        </React.Fragment>
    )
}
export default Footer;
