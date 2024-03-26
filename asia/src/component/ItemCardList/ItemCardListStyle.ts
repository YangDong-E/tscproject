import styled from "styled-components";

const ItemCardList = styled.ul`
  display: grid;
  // grid 비율을 1:1:1로
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
  padding: 75px 105px;
`;

export { ItemCardList };
