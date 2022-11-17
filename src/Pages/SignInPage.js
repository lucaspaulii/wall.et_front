import walletETCircle from "../Resources/walletETCircle.png";
import { InputButton, InputsContainer, LoginContainer } from "../Resources/StyledComponents";
import { Link } from "react-router-dom";

export default function SignInPage() {
  return (
    <LoginContainer>
      <img src={walletETCircle} alt="ET" />
      <h1>Wall.ET</h1>
      <InputsContainer>
        <form>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
        </form>
        <InputButton>Entrar</InputButton>
      </InputsContainer>
      <Link to={"/login"}><p>Já tem uma conta? <span>Entre agora!</span></p></Link>
    </LoginContainer>
  );
}