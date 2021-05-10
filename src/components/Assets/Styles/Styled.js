import styled, { createGlobalStyle } from "styled-components";
import logoicon from "../Images/logo-icon.png";
import patronfooter from "../Images/patron-group-footer.svg";
import patron from "../Images/patron.png";
import { MdHome, MdNotifications, MdPerson, MdAddCircle, MdKeyboardReturn, MdBrightness1 } from "react-icons/md";


/* Global
============================= */

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    top: 0;
    left: 0;
    background:-webkit-linear-gradient(top, #B153F9, #4A1176);
    background:-moz-linear-gradient(top, #B153F9, #4A1176);
    background:-o-linear-gradient(top, #B153F9, #4A1176);
    background:-ms-linear-gradient(top, #B153F9, #4A1176);
    width: 100%;
    height: 100%;
    font-family: "Montserrat", sans-serif;
    background-repeat: no-repeat;
	}  
`;


/* Login and register
============================= */

export const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;

  div {
    margin: 50px auto;
    text-align: center;
    h1 {
      font-size: 36px;
      font-weight: 500;
      color: #FFFFFF;
      font-family: "Montserrat", sans-serif;
    }
  }
`;

export const Divform = styled.form`
  outline: 0;
  position: relative;
  background: #FFFFFF;
  max-width: 350px;
  margin: 0 auto 2rem;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  min-height: ${({ isRight }) => (isRight ? "565px" : "500px")};
`;

export const LogoIcon = styled.img`
  width: 150px;
  margin: 0 auto 30px;
  padding: 50px 30px;
  background-image: url(${logoicon});
  background-repeat: no-repeat;
  background-position: center;
`;

export const Input = styled.input`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  border-radius: 8px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: ${({ isExpense }) => (isExpense ? "#FF9900" : "#4A1176")};
`;

export const InputIn = styled(Input)`
  position: relative;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ isExpense }) => (isExpense ? "#FF9900" : "#4A1176")};
  border-radius: 0;
`;

export const Label = styled.label`
  position: relative;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  color: ${({ isExpenseLabel }) => (isExpenseLabel ? "#FF9900" : "#4A1176")};
`;

export const Textarea = styled.textarea`
  outline: 0;
  position: relative;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ isExpense }) => (isExpense ? "#FF9900" : "#4A1176")};
  border-radius: 0;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  resize: none;
  color: ${({ isExpense }) => (isExpense ? "#FF9900" : "#4A1176")};
`;

export const TextAcount = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  top: -3.8rem;
  z-index: 3;
  color: #b3b3b3;
  font-size: 12px;
  border: none;
  background-color: transparent;
`;

export const DivTextA = styled.div`
  position: relative;
`;

export const LinkStyle = styled.a`
  color: #4A1176;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  margin-left: 5px;

  &:hover {
    color: #FF9900;
  }
`;

export const Button = styled.button`
  background: #4A1176;
  width: 100%;
  border: none;
  padding: 15px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  transition: all 0.3 ease;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;

  &:hover {
    background-color: ${({ isExpenseButton }) => (isExpenseButton ? "#B153F9" : "#FF9900")};;
    color: #FFFFFF;
  }
`;

export const ButtonIn = styled(Button)`
  width: 25%;
  display: block;
  margin: 2rem auto;
  background-color: ${({ isExpenseButton }) => (isExpenseButton ? "#FF9900" : "#B153F9")};;
`;

export const Buttonline = styled(Button)`
  background: none;
  padding: 10px;
  color: #4A1176;
  transition: all 0.3 ease;
  border: #4A1176 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  img {
    height: 28px;
    width: 28px;
    margin-right: 10px;
  }

  &:hover {
    color: #FF9900;
    border-color: #FF9900;
    background-color: transparent;
  }
`;

export const ContainerButton = styled.div`
  width: 50%;
  display: inline-block;
  margin-top: 5px;
  position: relative;
  height: 25px;
  padding: 30px;
`;

export const Line = styled.div`
  position: absolute;
  top: 30px;
  left: 0px;
  width: 100%;
  height: 1px;
  background: rgb(151, 151, 151);
`;

export const TextO = styled.div`
  position: absolute;
  top: 17px;
  height: 25px;
  line-height: 25px;
  background: rgb(255, 255, 255);
  left: 50%;
  transform: translateX(-50%);
  color: rgb(151, 151, 151);
  padding: 0px 10px;
`;

// Homepage styles

/* Header
============================= */

export const Header = styled.header`
  padding: 2rem 0;
  position: relative;
  z-index: 3;
  background: #f2f0f0;
  border-top: 13px solid #4a1176;
  font-size: 14px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerHome = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
`;

export const Logo = styled.img`
  width: 220px;
`;

export const LogoIconFooter = styled.img`
  width: 60px;
`;

export const Nav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  display: flex;
`;

export const NavLink = styled.div`
  display: block;
  padding: 0.5rem 0;
  position: relative;
  font-weight: 500;
  color: #4a1176;
  margin: 0 0 0 2rem;
  cursor: pointer;
  a {
    text-decoration: none;
    &:hover {
    color: #ff9900;
    }
  }
`;

export const HomeIcon = styled(MdHome)`
  vertical-align: top;
`;

export const NotiIcon = styled(MdNotifications)`
  vertical-align: top;
`;

export const UserIcon = styled(MdPerson)`
  vertical-align: top;
`;

export const ButtonNav = styled.a`
  display: inline-block;
  width: 8rem;
  padding: 7px;
  margin-left: 32px;
  border: #4a1176 solid 1px;
  font-size: 14px;
  color: #4a1176;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 500;
  &:hover {
    color: #FFFFFF;
    background: #FF9900;
    transition-duration: .3s;
    border: #FF9900 solid 1px;
  }
`;

/* Body
============================= */

export const BodySection = styled.section`
  color: #4A1176;
  background: #E5E5E5;
  padding: 4rem;
`;

export const BodySectionIn = styled(BodySection)`
  padding: 4rem 0 1rem;
`;

export const Col = styled.li`
  width: 100%;
`;

export const Col12 = styled.li`
  width: calc((100% / 2));
`;

export const Col13 = styled(Col12)`
  width: calc((100% / 3));
  padding: 0 2rem;
`;

export const UlRow = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const BarsIn = styled.div`  
    display: block;
    padding: 1.7rem;
    background-color: #B153F9;
    text-align: center;
    text-decoration: none;
    border-radius: 0 5px 5px 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    background-image: url(${patron});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 5rem;
    transform: scaleX(-1);
    cursor: pointer;
`;

export const BarsOu = styled(BarsIn)`  
    background-color: #FF9900;
    border-radius: 5px 0 0 5px;
    background-position: ${({ isExpenseBar }) => (isExpenseBar ? "right" : "left")};
`;

export const IconBack = styled.div`
  display: flex;
  justify-content: center;
  img {
    position: absolute;
    width: 25rem;
    top: 9rem;
  }
`;

export const AddIconLeft = styled(MdAddCircle)`
  position: relative;
  bottom: 2.8rem;
  left: 0.6rem;
  color: #FFFFFF;
  &:hover{
    color: #ffffffe0;
    transform: scale(1.1, 1.1);
  }
`;

export const AddIconRight = styled(AddIconLeft)`
  left: 27rem;
`;

export const AddIconBack = styled(MdKeyboardReturn)`
  position: relative;
  bottom: 2.8rem;
  left: 0.6rem;
  color: #FFFFFF;
  &:hover{
    color: #ffffffe0;
    transform: scale(1.1, 1.1);
  }
`;

export const CardIn = styled.div`
  text-align: center;
  position: relative;
  span{
    font-size: 22px;
  }
`;

export const CardOu = styled(CardIn)`  
  color: #FF9900;
`;

// Saldo

export const SaldoSection = styled.section`
  color: #FFFFFF;
  background: #4A1176;
  padding: 5px;
  border-bottom: 6px solid #b153f952;
`;

export const SaldoNumber = styled.div`
  text-align: end;
`;

// Calendar

export const CalendarSection = styled.section`
  background: #B153F9;
  padding: 25px;
`;

export const CardCalendar = styled.div`
  div{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  span{
    display: flex;
    justify-content: ${({ isNextMonth }) => (isNextMonth ? "flex-end" : "start")};
    color: #FFFFFF;
    cursor: ${({ isActualMonth }) => (isActualMonth ? "none" : "pointer")};
    position: relative;
    font-size: ${({ isActualMonth }) => (isActualMonth ? "18px" : "16px")};
    font-weight: ${({ isActualMonth }) => (isActualMonth ? "600" : "400")};
    &:hover {
      color: ${({ isActualMonth }) => (isActualMonth ? "#FFFFFF" : "#ffffffe0")};
      transform: ${({ isActualMonth }) => (isActualMonth ? "none" : "scale(1.1, 1.1)")};
      font-weight: ${({ isActualMonth }) => (isActualMonth ? "none" : "500")};
    }
  }    
`;

export const CardCalendarCenter = styled(CardCalendar)`
  span{
    display: flex;
    justify-content: center;    
  }    
`;


export const IconCalSection = styled(MdBrightness1)`
  color: #7915c512;
  position: absolute;
  bottom: 5.4rem;  
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 45px;
`;

export const DivPerfil = styled.div`
  position: relative;
  background: #FFFFFF;
  max-width: 30rem;
  margin: 0 auto 2rem;
  padding: 30px;
  border-radius: 8px;
  min-height: 16rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;


/* Footer
============================= */

export const FooterSection = styled.footer`
  background: #F2F0F0;
  background-image: url(${patronfooter});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top: 13px solid #FF9900;
  border-bottom: 13px solid #4A1176;
  padding: 22px;
  /* position:absolute; */
  bottom: 0;
  left: 0;
  width: 100%;
  div{
    display: flex;
    justify-content: center;
  }
`;


