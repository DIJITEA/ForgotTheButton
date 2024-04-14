import styled, { css, keyframes } from "styled-components";

const colorChange = keyframes`
  from {  
    background-color: #fc8eac;
  }
  50%{
    background-color: black;
  }
  100%{
    background-color: #fc8eac;
  }
`;

const animationPlay = css`
  animation: ${colorChange} 1s linear;
`;

const StyledHeaderButton = styled.button<{ $animation?: boolean }>`
  margin: 35px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fc8eac;
  border: none;
  box-shadow: -1px 0px 17px 0px #b5acae;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
    ${(props) => (props.$animation ? animationPlay : "")};
`;

const StyledHeaderH2 = styled.div`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 500;
  line-height: 18.29px;
  text-align: center;
  color: white;
  outline: none;
`;

export { StyledHeaderButton, StyledHeaderH2 };
