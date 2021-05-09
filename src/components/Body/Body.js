import React from 'react';
import * as styled from "../Assets/Styles/Styled";
import patron from "../Assets/Images/patron.svg";
import Calendar from "../Calendar/Calendar";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from 'react-router-dom';


function Body() {
    return (
        <React.Fragment>
            <styled.BodySection>
                <styled.ContainerHome>
                    <styled.UlRow>
                        <styled.Col12><styled.BarsIn /><Link to="/incomes"><styled.AddIconLeft size="2.3rem" /></Link></styled.Col12>
                        <styled.Col12><styled.BarsOu /><styled.AddIconRight size="2.3rem" /></styled.Col12>
                    </styled.UlRow>
                    <styled.IconBack><img src={patron} alt="Patron background" /></styled.IconBack>
                    <styled.UlRow>
                        <styled.Col12>
                            <styled.CardIn><h2>Total Ingresos</h2><span>$ 0 COP</span></styled.CardIn>
                        </styled.Col12>
                        <styled.Col12>
                            <styled.CardOu><h2>Total Gastos</h2><span>$ 0 COP</span></styled.CardOu>
                        </styled.Col12>
                    </styled.UlRow>
                </styled.ContainerHome>
            </styled.BodySection>

            {/* <!-- Saldo section --> */}
            <styled.SaldoSection>
                <styled.ContainerHome>
                    <styled.UlRow>
                        <styled.Col12><div><h3>Saldo Abril 2021</h3></div></styled.Col12>
                        <styled.Col12>
                            <styled.SaldoNumber><h3>$ 0 COP</h3></styled.SaldoNumber>
                        </styled.Col12>
                    </styled.UlRow>
                </styled.ContainerHome>
            </styled.SaldoSection>

            {/* <!-- Calendar section --> */}
            <styled.CalendarSection>
                <styled.ContainerHome>
                    <styled.UlRow>
                        <styled.Col13>
                            <styled.CardCalendar>                                
                                <span><MdChevronLeft /> Marzo</span>
                            </styled.CardCalendar>
                        </styled.Col13>
                        <styled.Col13>
                            <styled.CardCalendar>
                                <Calendar/>
                            </styled.CardCalendar>
                        </styled.Col13>
                        <styled.Col13>
                            <styled.CardCalendar>
                                <span>Mayo <MdChevronRight /></span>
                            </styled.CardCalendar>
                        </styled.Col13>
                    </styled.UlRow>
                </styled.ContainerHome>
            </styled.CalendarSection>
        </React.Fragment>
    )
}
export default Body;
