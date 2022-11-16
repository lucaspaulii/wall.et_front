import etHEAD from "../Resources/etHEAD.png";
import styled, { keyframes } from "styled-components";

export default function Loading(params) {
  return (
    <LoadingDiv>
      <LoadingImg src={etHEAD} alt="E.T head" />
    </LoadingDiv>
  );
}

const LoadingDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: ${pulseAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

const LoadingImg = styled.img`
  width: 60%;
  height: auto;
  animation-name: ${rotateAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

const pulseAnimation = keyframes`
0% {opacity: 1;}
50% {opacity: 0.1;}
100% {opacity: 1;}
`;

const rotateAnimation = keyframes`
0% {transform: rotate(0deg);}
50% {transform: rotate(100deg);}
100% {transform: rotate(360deg);}
`;
