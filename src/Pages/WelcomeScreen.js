import { Link } from "react-router-dom";
import styled from "styled-components";
import { defaultButtonColor, defaultTextColor, welcomeBackgrounColor } from "../Resources/DefaultColors";
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

  img {
    width: 200px;
    height: auto;
  }

  div {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    padding-top: 30px;
    padding-bottom: 50px;
    border-top: solid 10px ${defaultButtonColor};
    background-color: ${defaultButtonColor};
    * {
        font-size: 20px;
        margin-top: 5px;
        text-decoration: none;
        color: ${defaultTextColor};
    }
    span {
        font-weight: 600;
    }
  }
`;

