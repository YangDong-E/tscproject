import styled from "styled-components";

// 추후에 ExampleItems 부분은 삭제될 예정(제품이 여러개일때 css 적용 확인용)
const ExampleItems = styled.div`
  display: grid;
  // grid 비율을 1:1:1로
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
  padding: 75px 105px;
`;

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
  ExampleItems,
  ItemCardTextWrapper,
  CompanyName,
  ItemImg,
  ItemName,
  ItemPrice,
  ItemsCardWrapper,
};
