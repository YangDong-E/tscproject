import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export type SvgIconId =
  | "icon-check-on"
  | "icon-check-off"
  | "icon-shopping-cart"
  | "icon-user"
  | "icon-swiper-2"
  | "icon-fb"
  | "icon-swiper-1"
  | "icon-insta"
  | "logo-asia"
  | "icon-plus-line"
  | "icon-yt"
  | "icon-minus-line"
  | "icon-plus"
  | "icon-down-arrow"
  | "icon-up-arrow"
  | "check-fill-box"
  | "check-box";

interface SvgIconProps {
  id: SvgIconId | string;
  label?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
  alt?: string;
  onClick?: () => void;
  marginRight?: string;
}

const SvgIcon = styled.svg<{ value?: string; marginRight?: string }>`
  cursor: ${({ value }) => (value === "logo-asia" ? "pointer" : "")};
  margin-right: ${({ marginRight }) => marginRight};
`;

function SVGIcon({
  id,
  label = undefined,
  width = 24,
  height = 24,
  alt,
  fill = "currentColor",
  marginRight,
}: SvgIconProps) {
  const navigate = useNavigate();

  const navigateHome = () => {
    if (id === "logo-asia") {
      navigate("/");
    }
  };

  return (
    <SvgIcon
      display="inline-block"
      width={width}
      height={height}
      aria-label={alt}
      marginRight={marginRight}
      fill="transparent"
      onClick={navigateHome}
      value={id}
    >
      <use
        display="inline-block"
        width={width}
        height={height}
        href={`#${id}`}
      />
    </SvgIcon>
  );
}

//<SVGIcon id='icon-check-on' width="20" />
export { SVGIcon };
