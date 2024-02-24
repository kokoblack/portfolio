import styled, { css } from "styled-components";

export const LogoContainer = styled.div<{ gradient?: boolean; hide?: boolean }>`
  margin-right: auto;
  display: block;
  box-sizing: border-box;
  font-size: 0.5rem;
  padding: 0.2rem 0.4rem;
  border: 2px solid;
  ${({ gradient }) => {
    if (gradient) {
      return css`
        border-image-slice: 1;
        border-image-source: linear-gradient(
          90deg,
          #13b0f5 -2.06%,
          #e70faa 100%
        );
        background: -webkit-linear-gradient(
          90deg,
          #13b0f5 -2.06%,
          #e70faa 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      `;
    } else {
      return css`
        border-color: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.secondary};
      `;
    }
  }}

  @media screen and (max-width: 767px) {
    ${({ hide }) => {
      if (hide) {
        return css`
          display: none;
        `;
      }
    }}
  }
`;

export const LogoText = styled.p<{ base?: any }>`
  font-size: ${({ base }) => (base ? base : "1.2")}rem;
  margin: 0;

  @media screen and (max-width: 479px) {
    font-size: ${({ base }) => (base ? base - 0.1 : "1")}rem;
  }
`;