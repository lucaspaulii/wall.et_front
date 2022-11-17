import styled from "styled-components";
import { defaultBackgroundColor, defaultButtonColor } from "./DefaultColors";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${defaultBackgroundColor};
  img {
    width: 150px;
    height: auto;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 60px;
    margin-bottom: 10px;
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
`;
