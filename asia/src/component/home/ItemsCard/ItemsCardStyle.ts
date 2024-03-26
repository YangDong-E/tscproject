import styled from "styled-components";

const ItemsCardWrapper = styled.div`
  border: 1px solid red;
`;
const ItemImg = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: blue;
  background-size: cover;
  // 자식요소 중앙 정렬
  align-items: center;
  display: flex;
  justify-content: center;
`;

const ItemCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 3px; */
  /* margin-top: 5px; */
`;
const CompanyName = styled.p`
  color: rgb(90, 90, 90);
  font-size: 16px;
  line-height: 20px;
`;

const ItemName = styled.h1`
  color: rgb(90, 90, 90);
  font-size: 18px;
  line-height: 20px;
`;

const ItemPrice = styled.p`
  color: rgb(90, 90, 90);
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  &::after {
    content: "원";
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    margin-left: 3px;
  }
`;

export {
  ItemCardTextWrapper,
  CompanyName,
  ItemImg,
  ItemName,
  ItemPrice,
  ItemsCardWrapper,
};
