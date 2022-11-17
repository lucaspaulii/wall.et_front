import etHEAD from "../Resources/etHEAD.png";
import styled, { keyframes } from "styled-components";

export default function Loading(params) {
  return (
    <LoadingDiv>
      <LoadingImg src={etHEAD} alt="E.T head" />
    </LoadingDiv>
  );
}

const pulseAnimation = keyframes`
0% {opacity: 1;}
50% {opacity: 0.7;}
100% {opacity: 1;}
`;

const rotateAnimation = keyframes`
0% {transform: rotate(0deg) scale(1.1);}
50% {transform: rotate(30deg) scale(0.8);}
100% {transform: rotate(360deg) scale(1);}
`;

const LoadingDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: ${pulseAnimation};
  animation-duration: 0.4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const LoadingImg = styled.img`
  width: 30%;
  height: auto;
  animation-name: ${rotateAnimation};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;


