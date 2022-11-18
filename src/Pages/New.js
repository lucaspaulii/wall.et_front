import { useParams } from "react-router-dom";
import { InputButton, InputsContainer } from "../Resources/StyledComponents";
import styled from "styled-components";
import { defaultBackgroundColor } from "../Resources/DefaultColors";
import { useState } from "react";

export default function New() {
  const { inout } = useParams();
  const [value, setValue] = useState(undefined);
  const [description, setDescription] = useState(undefined);

  function handleSubmit(e) {
    e.preventDefault();
    const submitObject = {
        value,
        description,
        inout
    }
    console.log(submitObject)
  }
  return (
    <InOutContainer>
      <Header>
        <h1>
          Nova {inout === "in" ? "entrada" : inout === "out" ? "saída" : ""}
        </h1>
      </Header>
      <InputsContainer>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Valor"
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
            Salvar {inout === "in" ? "entrada" : inout === "out" ? "saída" : ""}
          </InputButton>
        </form>
      </InputsContainer>
    </InOutContainer>
  );
}

const InOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${defaultBackgroundColor};
`;
const Header = styled.div`
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
