import walletETCircle from "../Resources/walletETCircle.png";
import {
  InputButton,
  InputsContainer,
  LoginContainer,
} from "../Resources/StyledComponents";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignInPage() {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confirmPassword, setConfirmPassword] = useState(undefined);

  function handleSubmit(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      const submitObject = {
        name,
        email,
        password,
      };
      console.log(submitObject)
    }
    else {
      alert('senhas diferentes!')
    }
  }

  return (
    <LoginContainer>
      <img src={walletETCircle} alt="ET" />
      <h1>Wall.ET</h1>
      <InputsContainer>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Senha"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Confirme a senha"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          <InputButton>Cadastrar</InputButton>
        </form>
      </InputsContainer>
      <Link to={"/login"}>
        <p>
          Já tem uma conta? <span>Entre agora!</span>
        </p>
      </Link>
    </LoginContainer>
  );
}
