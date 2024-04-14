import styled from "styled-components";

const HeaderWrap = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; */
`;
const CustomOutput = styled.div`
  overflow: scroll;
  overflow-x: hidden;

  margin: 5px;
  display: flex;
  /* width: 200px; */
  height: 300px;
  background-color: #ffffff;
  box-shadow: inset 0 0 11px #afa8a8;
  border-radius: 30px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CustomOutputElement = styled.p`
  margin: 13px;
  font-family: Montserrat;
  font-size: 3vw;
  font-weight: 500;
  line-height: 18.29px;
`;

export { HeaderWrap, CustomOutput, CustomOutputElement };
