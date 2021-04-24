import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,900");

	body {
    top: 0;
    left: 0;
    background: #8537cc;
    width: 100%;
    height: 100%;
    font-family: "Montserrat", sans-serif;
	}  
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
  div {
    margin: 50px auto;
    text-align: center;
    h1 {
      margin: 0 0 15px;
      padding: 0;
      font-size: 36px;
      font-weight: 300;
      color: #fff;
      font-family: "Montserrat", sans-serif;
    }
  }
`;

export const Divform = styled.form`
  position: relative;
  background: #ffffff;
  max-width: 300px;
  margin: 0 auto 2rem;
  padding: 30px;
  border-radius: 3px;
  min-height: 488px;
  text-align: center;
`;

export const Thumbnail = styled.div`
  background: #8537cc;
  width: 150px;
  height: 150px;
  margin: 0 auto 30px;
  padding: 50px 30px;
  border-radius: 100%;
  box-sizing: border-box;
`;

export const Input = styled.input`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
`;

export const TextAcount = styled.button`
  position: absolute;
    top: -3.8rem;
    z-index: 3;
    left: 42%;
  color: #b3b3b3;
  font-size: 12px;
  border: none;
  background-color: transparent;
`;

export const DivTextA = styled.div`
  position: relative;
`;

export const Link = styled.a`
  color: #8537cc;
  text-decoration: none;
  cursor: pointer;
`;

export const Button = styled.button`
  outline: 0;
  background: #8537cc;
  width: 100%;
  border: none;
  padding: 15px;
  border-radius: 3px;
  color: #ffffff;
  font-size: 14px;
  transition: all 0.3 ease;
  cursor: pointer;
  text-transform: uppercase;
`;

export const Buttonline = styled.button`
  outline: 0;
  background: none;
  width: 100%;
  border: 0;
  padding: 10px;
  border-radius: 3px;
  color: #8537cc;
  font-size: 14px;
  transition: all 0.3 ease;
  cursor: pointer;
  border: #8537cc 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  img {
    height: 28px;
    width: 28px;
    margin-right: 10px;
  }
`;

export const Containerline = styled.div`
  width: 50%;
  display: inline-block;
  margin-top: 5px;
  position: relative;
  height: 25px;
  padding: 20px;
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
