import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: rgb(180, 180, 180);
  padding: 50px 320px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid gray;
`;

const DownWrapper = styled.div`
  margin-top: 25px;
`;

// li안에 css 적용을 하여 모든 리스트들의 사이를 검은줄로 구분함.
// hover를 사용하여 마우스를 올렸을때 변화되는부분을 구분함.
const FooterList = styled.ul`
  display: flex;
  gap: 14px;
  height: 15px;
  li {
    display: inline-block;
    border-left: 2px solid black;
    padding-left: 15px;
    font-size: 14px;
    &:hover {
      color: black;
      text-decoration: underline;
    }
  }
`;

const CompanyName = styled.h2`
  /* color: var(--color-darkGrey); */
  color: rgb(60, 60, 60);
  font-size: 14px;
  font-weight: 700;
  line-height: 15px;
`;

const CompanyTxt = styled.p`
  /* color: var(--color-darkGrey); */
  color: rgb(60, 60, 60);
  font-size: 14px;
  line-height: 15px;
`;

export {
  FooterWrapper,
  TopWrapper,
  DownWrapper,
  FooterList,
  CompanyName,
  CompanyTxt,
};
