import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { AuthContext } from "../Providers/auth";
import { defaultInColor, defaultOutColor } from "../Resources/DefaultColors";
import { InputButton, InputsContainer } from "../Resources/StyledComponents";
import { Header, InOutContainer } from "./New";

export default function EditPage() {
  const { idinout } = useParams();
  const [value, setValue] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);
  const { userToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const paramsArr = idinout.split("$");
  const inout = paramsArr[1];
  const inflowId = paramsArr[0];
  const [type, setType] = useState(inout);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const padronizedValue = value.replaceAll(",", ".");
    const numberValue = Number(padronizedValue);
    const submitObject = {
      value: numberValue,
      description,
      type,
    };
    editInflow(submitObject);
  }

  function editInflow(obj) {
    const URL = `https://wall-et-api.onrender.com/inflow/${inflowId}`;
    const config = {
      headers: { Authorization: `Bearer ${userToken}` },
    };
    const promise = axios.put(URL, obj, config);
    promise.then((res) => {
      setErrorMessage(undefined);
      setSuccessMessage("Valor editado com sucesso!");
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
          Editar {inout === "in" ? "entrada" : inout === "out" ? "saída" : ""}
        </h1>
      </Header>
      <InputsContainer
        color={
          (errorMessage && defaultOutColor) ||
          (successMessage && defaultInColor)
        }
      >
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
          <td>
            <input
              id="entrada"
              name="inout"
              type="radio"
              value="Entrada"
              placeholder="Descriçao"
              required
              onChange={() => setType("in")}
            ></input>
            <label htmlFor="entrada">Entrada</label>
            <input
              id="saída"
              name="inout"
              type="radio"
              value="Saída"
              placeholder="Descriçao"
              required
              onChange={() => setType("out")}
            ></input>
          </td>
          <label htmlFor="saída">Saída</label>
          <InputButton
            type="submit"
            disabled={value && description ? false : true}
          >
            {isLoading ? (
              <Loading></Loading>
            ) : (
              `Editar ${
                inout === "in" ? "entrada" : inout === "out" ? "saída" : ""
              }`
            )}
          </InputButton>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}
      </InputsContainer>
    </InOutContainer>
  );
}
