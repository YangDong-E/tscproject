import styled from "styled-components";

interface CommonBtnProps {
  icon?: string;
  width?: string;
  color?: string;
  disabled?: boolean;
  marginTop?: string;
}

const CommonBtn = styled.button<CommonBtnProps>`
  display: inline-block;
  width: ${({ width }) => (width ? width : "100%")};
  background-color: var(--color-main);
  color: var(--color-white);
  height: 54px;
  border-radius: 5px;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0")};
  &:disabled {
    background-color: var(--color-grey);
    cursor: default;
  }
`;

export { CommonBtn };
