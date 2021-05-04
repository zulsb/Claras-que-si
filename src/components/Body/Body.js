import React from 'react';
import * as styled from "../Assets/Styles/Styled";
import Calendar from "../Calendar/Calendar";
import { MdAddCircle } from "react-icons/md";

function Body() {
    return (
        <React.Fragment>
            <styled.BodySection>
                <styled.ContainerHome>
                    <styled.UlRow>
                        <styled.Col12><styled.BarsIn /><MdAddCircle size="3rem" color="#FFFFFF" style={{ position: "relative", bottom: "3.1rem", left: "0" }} /></styled.Col12>
                        <styled.Col12><styled.BarsOu /><MdAddCircle size="3rem" color="#FFFFFF" style={{ position: "relative", bottom: "3.1rem", left: "27rem" }} /></styled.Col12>
                    </styled.UlRow>
                    <styled.UlRow>
                        <styled.Col12>
                            <styled.CardIn>
                                <h2>Total Ingresos</h2>
                                <span>$ 0 COP</span>
                            </styled.CardIn>
                        </styled.Col12>
                        <styled.Col12>
                            <styled.CardIn>
                                <h2>Total Gastos</h2>
                                <span>$ 0 COP</span>
                            </styled.CardIn>
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
                                <span>Marzo</span>
                            </styled.CardCalendar>
                        </styled.Col13>
                        <styled.Col13>
                            <styled.CardCalendar>
                                <Calendar/>
                            </styled.CardCalendar>
                        </styled.Col13>
                        <styled.Col13>
                            <styled.CardCalendar>
                                <span>Mayo</span>
                            </styled.CardCalendar>
                        </styled.Col13>
                    </styled.UlRow>
                </styled.ContainerHome>
            </styled.CalendarSection>
        </React.Fragment>
    )
}
export default Body;
