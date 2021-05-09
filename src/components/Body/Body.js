import React, { useEffect, useState } from 'react';
import * as styled from "../Assets/Styles/Styled";
import patron from "../Assets/Images/patron.svg";
import Calendar from "../Calendar/Calendar";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire';


function Body() {
    let date = new Date();
    let month = date.toLocaleString('default', { month: 'short' })
    /* States */
    const [balance, setBalance] = useState(0);
    const [incomes, setIncomes] = useState(0);
    const [expenses, setExpenses] = useState(0);
    /* firebase data */
    const { data: user } = useUser();
    const incomesRef = useFirestore().collection('users').doc(user.uid).collection('incomes').doc('months').collection(month);
    const expensesRef = useFirestore().collection('users').doc(user.uid).collection('expenses').doc('months').collection(month);
    const { data: incData, status: incSt } = useFirestoreCollectionData(incomesRef);
    const { data: expData, status: expSt } = useFirestoreCollectionData(expensesRef);
    let prevMonth = new Date()
    prevMonth.setMonth(prevMonth.getMonth() - 1)
    prevMonth = prevMonth.toLocaleDateString('es-Co', {month: 'long'})
    let nextMonth = new Date()
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    nextMonth = nextMonth.toLocaleDateString('es-Co', {month: 'long'})
    /* Set states */
    useEffect(() => {
        let isMounted = true;
        if (isMounted && incSt === 'success' && expSt === 'success') {
            const incSubtotal = incData.reduce((total, nextNnum) => total + nextNnum.subtotal, 0)
            const expSubtotal = expData.reduce((total, nextNnum) => total + nextNnum.subtotal, 0)
            setIncomes(incSubtotal);
            setExpenses(expSubtotal);
            setBalance(incSubtotal - expSubtotal);
        }
        return () => { isMounted = false }
    }, [incData, expData, incSt, expSt])

    return (
        <React.Fragment>
            <styled.BodySection>
                <styled.ContainerHome>
                    <styled.UlRow>
                        <styled.Col12><styled.BarsIn /><Link to="/incomes"><styled.AddIconLeft size="2.3rem" /></Link></styled.Col12>
                        <styled.Col12><styled.BarsOu /><Link to="/expenses"><styled.AddIconRight size="2.3rem" /></Link></styled.Col12>
                    </styled.UlRow>
                    <styled.IconBack><img src={patron} alt="Patron background" /></styled.IconBack>
                    <styled.UlRow>
                        <styled.Col12>
                            <styled.CardIn><h2>Total Ingresos</h2><span>$ {incomes} COP</span></styled.CardIn>
                        </styled.Col12>
                        <styled.Col12>
                            <styled.CardOu><h2>Total Gastos</h2><span>$ {expenses} COP</span></styled.CardOu>
                        </styled.Col12>
                    </styled.UlRow>
                </styled.ContainerHome>
            </styled.BodySection>

            {/* <!-- Saldo section --> */}
            <styled.SaldoSection>
                <styled.ContainerHome>
                    <styled.UlRow>
                        <styled.Col12><div><h3>Saldo {date.toLocaleDateString('es-Co', {month: 'long'})} {date.getFullYear()}</h3></div></styled.Col12>
                        <styled.Col12>
                            <styled.SaldoNumber><h3>$ {balance} COP</h3></styled.SaldoNumber>
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
                                <span><MdChevronLeft />{prevMonth} {date.getFullYear()}</span>
                            </styled.CardCalendar>
                        </styled.Col13>
                        <styled.Col13>
                            <styled.CardCalendar>
                                <Calendar/>
                            </styled.CardCalendar>
                        </styled.Col13>
                        <styled.Col13>
                            <styled.CardCalendar>
                                <span>{nextMonth} {date.getFullYear()}<MdChevronRight /></span>
                            </styled.CardCalendar>
                        </styled.Col13>
                    </styled.UlRow>
                </styled.ContainerHome>
            </styled.CalendarSection>
        </React.Fragment>
    )
}
export default Body;
