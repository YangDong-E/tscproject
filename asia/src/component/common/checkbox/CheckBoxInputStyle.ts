import styled from "styled-components";
import check_box from "../../../assets/icon/check-box.png";
import check_box_fill from "../../../assets/icon/check-fill-box.png";

export const CheckBoxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  height: 15px;
  padding-top: 5px;
`;
export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  /* padding-bottom: -10px; */
  margin: 0;
  /* padding-top: 10px; */
  height: 15px;

  &:after {
    height: 15px;
    content: "   sdfsasdfasddfs";
    display: inline-block;
    color: transparent;
    width: 15px;
    background: ${({ checked }) =>
      checked === true
        ? `url(${check_box_fill}) no-repeat`
        : `url(${check_box}) no-repeat`};
    background-size: contain;
  }
  &:hover {
    cursor: pointer;
  }
`;
