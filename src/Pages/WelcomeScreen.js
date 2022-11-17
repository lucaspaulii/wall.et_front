import { Link } from "react-router-dom";
import styled from "styled-components";
import { defaultBackgroundColor, defaultButtonColor, defaultInColor, defaultTextColor, welcomeBackgrounColor } from "../Resources/DefaultColors";
import donttrusthumans from "../Resources/donttrusthumans.png";

export default function WelcomeScreen() {
  return (
    <WelcomeScreenContainer>
      <img src={donttrusthumans} alt="website logo" />
      <div>
        <Link to={"/signup"}><p>Primeira vez? <span>Cadastre-se!</span></p></Link>
        <Link to={"/login"}><p>Já tem uma conta? <span>Entre agora!</span></p></Link>
      </div>
    </WelcomeScreenContainer>
  );
}

const WelcomeScreenContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${welcomeBackgrounColor};
  font-family: 'Open Sans', sans-serif;

  img {
    width: 180px;
    height: auto;
    background-color: ${defaultButtonColor};
    padding: 15px;
    border-radius: 8px;
    border: 3px solid ${defaultBackgroundColor};
    box-shadow: 0px 0px 13px 2px ${defaultInColor};
  }

  div {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    * {
        font-size: 18px;
        margin-top: 5px;
        text-decoration: none;
        color: ${defaultTextColor};
    }
    span {
        font-weight: 600;
    }
  }
`;

