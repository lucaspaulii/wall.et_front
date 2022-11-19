import walletETCircle from "../Resources/walletETCircle.png";
import {
  InputButton,
  InputsContainer,
  LoginContainer,
} from "../Resources/StyledComponents";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/auth";
import Loading from "../Components/Loading";

export default function LoginPage() {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { setUserToken } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      const submitObject = {
        email,
        password,
      };
      setIsLoading(true);
      login(submitObject);
    }
  }

  function login(obj) {
    const URL = "https://wall-et-api.onrender.com/sign-in";
    const promise = axios.post(URL, obj);
    promise.then((res) => {
      setUserToken(res.data);
      setIsLoading(false);
      navigate("/main");
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
      <InputsContainer color={errorMessage ? 'red' : 'green'}>
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
            minLength="5"
          ></input>
          {errorMessage && <p>{errorMessage}</p>}
          <InputButton
            type="submit"
            disabled={email && password ? false : true}
          >
            {isLoading ? <Loading /> : "Entrar"}
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
