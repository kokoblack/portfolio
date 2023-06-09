import styled, { css } from "styled-components";

export const color = {
  lightPrimary: "#666666",
  lightSecondary: "#42446E",
  darkPrimary: "#A7A7A7",
  darkSecondary: "#CCCCCC",
  dark: "#000000",
  white: "#ffffff",
};

export const Flex = styled.div<{
  item?: string;
  gap?: string;
  content?: string;
  w?: boolean;
}>`
  display: flex;
  align-items: ${({ item }) => (item ? item : "center")};
  justify-content: ${({ content }) => (content ? content : "center")};
  column-gap: ${({ gap }) => (gap ? gap : "2")}%;
  ${({ w }) =>
    w &&
    css`
      width: 100%;
    `}
`;

export const MoveRight = styled.div`
  margin-left: auto;
`;
export const MoveLeft = styled.div`
  margin-right: auto;
`;

export const BgcolorWhite = styled.div`
  background-color: ${color.white};
`;
export const BgcolorDark = styled.div`
  background-color: ${color.dark};
`;
