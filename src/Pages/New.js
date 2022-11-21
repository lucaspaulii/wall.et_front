import { useNavigate, useParams } from "react-router-dom";
import { InputButton, InputsContainer } from "../Resources/StyledComponents";
import styled from "styled-components";
import {
  defaultBackgroundColor,
  defaultInColor,
  defaultOutColor,
} from "../Resources/DefaultColors";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/auth";
import axios from "axios";
import Loading from "../Components/Loading";

export default function New() {
  const { inout } = useParams();
  const [value, setValue] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);
  const { userToken } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage(undefined);
    setIsLoading(true);
    const padronizedValue = value.replaceAll(",", ".");
    const numberValue = Number(padronizedValue);
    const submitObject = {
      value: numberValue,
      description,
      type: inout,
    };
    postInflow(submitObject);
  }

  function postInflow(obj) {
    const URL = "https://wall-et-api.onrender.com/inflow";
    const config = {
      headers: { Authorization: `Bearer ${userToken}` },
    };
    const promise = axios.post(URL, obj, config);
    promise.then((res) => {
      setSuccessMessage("Valor adicionado com sucesso!");
      setDescription(undefined);
      setValue(undefined);
      setTimeout(() => {
        navigate("/main");
      }, 1500);
    });
    promise.catch((err) => {
      setErrorMessage(err.response.data);
      setIsLoading(false);
    });
  }

  return (
    <InOutContainer>
      <Header>
        <h1>
          Nova {inout === "in" ? "entrada" : inout === "out" ? "saída" : ""}
        </h1>
      </Header>
      <InputsContainer color={(errorMessage && defaultOutColor) || (successMessage && defaultInColor)}>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Valor"
            step=".01"
            required
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Descriçao"
            required
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <InputButton
            type="submit"
            disabled={value && description ? false : true}
          >
          {isLoading ? <Loading></Loading> : (`Salvar ${inout === "in" ? "entrada" : inout === "out" ? "saída" : ""}`)}
            
          </InputButton>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}
      </InputsContainer>
    </InOutContainer>
  );
}

export const InOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${defaultBackgroundColor};
`;
export const Header = styled.div`
  height: 12vh;
  display: flex;
  width: 80%;
  justify-content: flex-start;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
`;
