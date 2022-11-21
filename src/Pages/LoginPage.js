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
import { UserInfoContext } from "../Providers/userInfo";
import Loading from "../Components/Loading";

export default function LoginPage() {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { setUserToken } = useContext(AuthContext);
  const { setUserInfo } = useContext(UserInfoContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      const submitObject = {
        email,
        password,
      };
      setIsLoading(true);
      setErrorMessage(undefined);
      login(submitObject);
    }
  }

  function login(obj) {
    const URL = "https://wall-et-api.onrender.com/sign-in";
    const promise = axios.post(URL, obj);
    promise.then((res) => {
      setUserToken(res.data);
      userInfo(res.data);
      setIsLoading(false);
      navigate("/main");
    });
    promise.catch((err) => {
      setErrorMessage(err.response.data);
      setIsLoading(false);
    });
  }

  function userInfo(token) {
    const URL = "https://wall-et-api.onrender.com/user";
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const promise = axios.get(URL, config);
    promise.then((res) => {
      setUserInfo(res.data);
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
      <InputsContainer color={errorMessage ? "red" : "green"}>
        <form onSubmit={handleSubmit}>
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
      <Link to={"/signup"} style={{textDecoration: 'none'}}>
        <p>
          Primeira vez? <span>Cadastre-se!</span>
        </p>
      </Link>
    </LoginContainer>
  );
}
