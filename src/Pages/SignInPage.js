import walletETCircle from "../Resources/walletETCircle.png";
import {
  InputButton,
  InputsContainer,
  LoginContainer,
} from "../Resources/StyledComponents";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "../Components/Loading";
import axios from "axios";
import { defaultInColor } from "../Resources/DefaultColors";

export default function SignInPage() {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confirmPassword, setConfirmPassword] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      if (email && password && name) {
        const submitObject = {
          name,
          email,
          password,
        };
        setIsLoading(true);
        signUp(submitObject);
      }
    } else {
      setErrorMessage("Senhas diferentes!");
    }
  }

  function signUp(obj) {
    const URL = "https://wall-et-api.onrender.com/sign-up";
    const promise = axios.post(URL, obj);
    promise.then((res) => {
      setIsLoading(false);
      setErrorMessage(undefined);
      setSuccessMessage("Usuário criado!");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    });
    promise.catch((err) => {
      setErrorMessage(err.response.data);
      setIsLoading(false);
    });
  }

  return (
    <LoginContainer>
      <img src={walletETCircle} alt="ET" />
      <h1>Wall.ET</h1>
      <InputsContainer color={errorMessage ? "red" : defaultInColor}>
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
            minLength="5"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Confirme a senha"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          {errorMessage && <p>{errorMessage}</p>}
          {successMessage && <p>{successMessage}</p>}
          <InputButton>{isLoading ? <Loading /> : "Cadastrar"}</InputButton>
        </form>
      </InputsContainer>
      <Link to={"/login"} style={{textDecoration: 'none'}}>
        <p>
          Já tem uma conta? <span>Entre agora!</span>
        </p>
      </Link>
    </LoginContainer>
  );
}
