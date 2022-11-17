import styled from "styled-components";
import {
  defaultBackgroundColor,
  defaultButtonColor,
} from "../Resources/DefaultColors";
import { MdOutlineExitToApp } from "react-icons/md";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";

export default function MainPage() {
  return (
    <MainContainer>
      <Header>
        <h1>Olá, Fulano</h1>
        <MdOutlineExitToApp />
      </Header>
      <Board></Board>
      <ButtonContainer>
        <Button>
          <HiOutlinePlusCircle />
          <p>Nova entrada</p>
        </Button>
        <Button>
          <HiOutlineMinusCircle />
          <p>Nova saída</p>
        </Button>
      </ButtonContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${defaultBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  height: 12vh;
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
`;
const Board = styled.div`
  background-color: #ffffff;
  width: 90%;
  height: 70vh;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const Button = styled.button`
  font-family: "Open Sans", sans-serif;
  width: 47%;
  height: 15vh;
  background-color: ${defaultButtonColor};
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 22px;
  display: flex;
  padding: 20px 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  p {
    font-size: 16px;
  }
`;
