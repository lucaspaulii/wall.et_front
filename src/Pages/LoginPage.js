import walletETCircle from "../Resources/walletETCircle.png";
import { InputButton, InputsContainer, LoginContainer } from "../Resources/StyledComponents";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <LoginContainer>
      <img src={walletETCircle} alt="ET" />
      <h1>Wall.ET</h1>
      <InputsContainer>
        <form>
          <input></input>
          <input></input>
        </form>
        <InputButton>Entrar</InputButton>
      </InputsContainer>
      <Link to={"/signup"}><p>Primeira vez? <span>Cadastre-se!</span></p></Link>
    </LoginContainer>
  );
}


