import styled from "styled-components";
import {
  defaultBackgroundColor,
  defaultButtonColor,
  defaultInColor,
  defaultOutColor,
  defaultTextColor,
} from "../Resources/DefaultColors";
import { MdOutlineExitToApp } from "react-icons/md";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/auth";
import { UserInfoContext } from "../Providers/userInfo";
import axios from "axios";
import Loading from "../Components/Loading";

export default function MainPage() {
  const navigate = useNavigate();
  const { userToken, setUserToken } = useContext(AuthContext);
  const { userInfo } = useContext(UserInfoContext);
  const [userInflows, setUserInflows] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [reload, setReload] = useState(false);
  const config = {
    headers: { Authorization: `Bearer ${userToken}` },
  };
  let total = 0;

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage(undefined);
    const URL = "https://wall-et-api.onrender.com/inflow";
    const promise = axios.get(URL, config);
    promise.then((res) => {
      setUserInflows(res.data);
      setIsLoading(false);
    });
    promise.catch((err) => {
      setErrorMessage(err.response.data);
      setIsLoading(false);
    });
  }, [reload]);

  function deleteInflow(id) {
    setIsLoading(true);
    const URL = `https://wall-et-api.onrender.com/inflow/${id}`;
    const promise = axios.delete(URL, config);
    promise.then((res) => {
      setReload(!reload);
    });
  }

  function logOut() {
    setUserToken(undefined);
    navigate("/login");
  }

  return (
    <MainContainer>
      <Header>
        <h1>Olá, {userInfo?.name}</h1>
        <MdOutlineExitToApp onClick={logOut} />
      </Header>
      <Board>
        {isLoading ? (
          <Loading></Loading>
        ) : userInflows?.length > 0 ? (
          <InflowContainer>
          {userInflows.map((inflow) => {
            if (inflow.type === "out") {
              total = total - inflow.value;
            }
            if (inflow.type === "in") {
              total = total + inflow.value;
            }
            return (
              <Inflow
                key={inflow._id}
                color={inflow.type === "out" ? defaultOutColor : defaultInColor}
              >
                <p>
                  {inflow.date}{" "}
                  <span
                    onClick={() =>
                      navigate(`/edit/${inflow._id}$${inflow.type}`)
                    }
                  >
                    {inflow.description}
                  </span>
                </p>
                <h3>
                  {inflow.value.toFixed(2)}{" "}
                  <span onClick={() => deleteInflow(inflow._id)}>x</span>
                </h3>
                {}
              </Inflow>
            ) ;
          })} </InflowContainer>
        ) : errorMessage ? (
          <h4>{errorMessage}</h4>
        ) : (
          <h4>Não há registros de entrada ou saída</h4>
        )}
        {!isLoading && userInflows?.length > 0 && (
          <TotalContainer total={total}>
            <h2>Saldo</h2>
            <p>{total.toFixed(2)}</p>
          </TotalContainer>
        )}
      </Board>
      <ButtonContainer>
        <Button onClick={() => navigate("/new/in")}>
          <HiOutlinePlusCircle />
          <p>Nova entrada</p>
        </Button>
        <Button onClick={() => navigate("/new/out")}>
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
  font-weight: 600;
`;
const Board = styled.div`
  font-family: "Open Sans", sans-serif;
  background-color: #ffffff;
  width: 90%;
  height: 70vh;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    width: 150px;
    height: auto;
  }
  h4 {
    color: grey;
    font-size: 20px;
    top: 50%;
    transform: translateY(-50%);
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
  }
`;

const InflowContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  overflow-y: scroll;
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

const Inflow = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: space-between;
  margin: 15px 12px;
  min-height: 20px;
  p {
    color: grey;
    font-size: 18px;
    width: 75%;
    span {
      color: ${defaultTextColor};
      font-size: 16px;
      word-break: break-all;
    }
  }
  h3 {
    color: ${(props) => props.color};
    font-size: 18px;
    width: 25%;
    word-break: break-all;
    text-align: right;
    span {
      color: grey;
      font-size: 16px;
    }
  }
`;

const TotalContainer = styled.div`
  border-top: 2px solid ${defaultBackgroundColor};
  padding-top: 10px;
  font-family: "Open Sans", sans-serif;
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 10px;
  height: 30px;
  width: 100%;
  font-size: 20px;
  h2 {
    margin-left: 12px;
    font-weight: 700;
  }
  p {
    margin-right: 12px;
    color: ${(props) =>
      props.total > 0
        ? defaultInColor
        : props.total < 0
        ? defaultOutColor
        : defaultTextColor};
  }
`;
