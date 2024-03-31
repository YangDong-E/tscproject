import styled from "styled-components";

const PhoneSelectInputWrapper = styled.div`
  position: relative;
`;
const SelectBox = styled.div`
  width: 152px;
  border: 1px solid rgb(128, 128, 128);
  border-radius: 5px;
  padding: 0px 10px;

  button {
    padding-top: 5px;
  }
`;

const SelectInput = styled.input`
  border: 0px;
  width: 100%;
  text-align: center;
`;

const OptionBox = styled.ul`
  position: absolute;
  top: 60px;
  width: 152px;
  height: 150px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 15px; /* 스크롤바의 너비 */
    border: 0;
  }
  ::-webkit-scrollbar-thumb {
    height: 10%; /* 스크롤바의 길이 */
    background: rgb(128, 128, 128); /* 스크롤바의 색상 */
    background-clip: padding-box;
    border: 4px solid transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: rgb(87, 89, 93); /*스크롤바 뒷 배경 색상*/
    border-radius: 5px;
  }
  li {
    background: white;
    text-align: center;
    height: 40px;
    padding-top: 7px;
    &:hover {
      background: rgb(128, 128, 128);
      cursor: pointer;
    }
  }
`;

export { PhoneSelectInputWrapper, SelectBox, SelectInput, OptionBox };
