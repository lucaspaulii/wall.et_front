import styled from "styled-components";
import {
  defaultBackgroundColor,
  defaultButtonColor,
  defaultTextColor,
  welcomeBackgrounColor,
} from "./DefaultColors";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${defaultBackgroundColor};
  font-family: 'Open Sans', sans-serif;
  img {
    width: 150px;
    height: auto;
    margin-bottom: 10px;
  }
  h1 {
    font-family: 'Space Mono', monospace;
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 10px;
    color: ${defaultTextColor}
  }
  p {
    text-align: center;
    margin-top: 30px;
    color: #ffffff;
  }
  span {
    font-weight: 600;
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  position: relative;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  input {
    width: 80%;
    margin-top: 5px;
    height: 50px;
    border: none;
    border-radius: 5px;
    padding-left: 7px;
    font-size: 16px;
  }
  input:focus {
    outline: 3px solid ${welcomeBackgrounColor};
    outline-offset: -4px;
    color: ${defaultTextColor}
  }
  p {
    margin-top: 10px;
    color: ${props => props.color};
    font-weight: 600;
  }
`;

export const InputButton = styled.button`
  background-color: ${defaultButtonColor};
  border: none;
  border-radius: 5px;
  width: 80%;
  height: 50px;
  margin-top: 10px;
  font-size: 20px;
  color: #ffffff;
  img {
    height: 80%;
    width: auto;
  }
`;
