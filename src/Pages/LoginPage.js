import walletETCircle from "../Resources/walletETCircle.png";
import {
  InputButton,
  InputsContainer,
  LoginContainer,
} from "../Resources/StyledComponents";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  function handleSubmit(e) {
    e.preventDefault();
    const submitObject = {
      email,
      password,
    };
    console.log(submitObject);
  }

  return (
    <LoginContainer>
      <img src={walletETCircle} alt="ET" />
      <h1>Wall.ET</h1>
      <InputsContainer>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="e-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="senha"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <InputButton
            type="submit"
            disabled={email && password ? false : true}
          >
            Entrar
          </InputButton>
        </form>
      </InputsContainer>
      <Link to={"/signup"}>
        <p>
          Primeira vez? <span>Cadastre-se!</span>
        </p>
      </Link>
    </LoginContainer>
  );
}
