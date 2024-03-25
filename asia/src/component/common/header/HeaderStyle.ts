import styled from "styled-components";
import searchImg from "../../../assets/images/search.png";
import logoAsia from "../../../assets/images/logo-asia.png";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 320px;
  gap: 420px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  /* background-color: blue; */
  /* 추후에 반응형 css로 변경 예정 */
  /* @media only screen and (max-width: 1200px) {
    width: 100%;
  } */
  /* @media only screen and (min-width: 300px) {
    width: 100%;
  } */
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 30px;
`;

const LogoBtn = styled.button`
  width: 124px;
  height: 38px;
  border: none;
  background: url(${logoAsia}) no-repeat center;
  background-size: contain;
`;

const SearchInput = styled.input`
  width: 400px;
  height: 46px;
  border: 2px solid purple;
  padding-left: 20px;
  position: relative;
`;

const SearchBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 12px;
  width: 28px;
  height: 28px;
  border: none;
  background: url(${searchImg}) no-repeat center;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconTxt = styled.p`
  color: black;
  font-size: 12px;
`;

const IconWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export {
  LogoBtn,
  SearchInput,
  SearchBtn,
  SearchWrapper,
  UserWrapper,
  IconTxt,
  IconWrapper,
  HeaderWrapper,
};
