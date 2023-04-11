import styled from "styled-components";
import { css } from "styled-components";
import { Flex } from "./Global";

export const NavContainer = styled(Flex)<{ menu: boolean }>`
  width: 100%;
  font-family: 'DM Sans';
  font-weight: 500;
  padding: 0.3rem 4%;
  box-sizing: border-box;
  font-size: clamp(0.625rem, 2.5vw, 1.1rem);
  position: sticky;
  top: 0;
  ${({ menu }) => {
    if (!menu) {
      return css`
        backdrop-filter: blur(8px);
      `;
    }
  }}
  box-shadow: inset 0px -1px 1px ${({ theme }) => theme.border};
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;

  @media screen and (max-width: 767px) {
    margin-bottom: 6%;
  }
`;

export const NavIcon = styled(Flex)`
  font-size: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  margin-left: 0.5rem;

  @media screen and (max-width: 479px) {
    display: none;
  }
`;

export const NavLinkFlex = styled(Flex)`
  /* margin-right: auto; */

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavIconFlex = styled(Flex)`
  margin-left: auto;
`;

export const NavTheme = styled(Flex)`
  padding: 0.4rem 0.5rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  font-size: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};

  /* &:hover {
    background-color: #ebe8e8;
  } */

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavMenu = styled(Flex)`
  display: none;
  margin-left: 3%;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};

  @media screen and (max-width: 767px) {
    display: flex;
  }

  @media screen and (max-width: 479px) {
    z-index: 10;
    font-size: 2rem;
  }
`;

export const ToggleMenu = styled.div`
  position: absolute;
  top: 80%;
  right: 5%;

  @media screen and (max-width: 479px) {
    top: 0;
    right: 0;
  }
`;

export const Div = styled.div<{ menu: boolean }>`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.standard};
  box-shadow: 1px 1px 1px 1px ${({ theme }) => theme.border},
    -1px -1px 1px 1px ${({ theme }) => theme.border};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  font-size: 1rem;
  box-sizing: border-box;

  @media screen and (max-width: 479px) {
    width: 100vw;
    min-height: 100vh;
    box-shadow: none;
    padding: 0;
    font-size: clamp(1.5rem, 4vw, 2rem);
    justify-content: start;
    padding-top: 25%;
    border-radius: none;
    background-color: transparent;
    ${({ menu }) => {
      if (menu) {
        return css`
          backdrop-filter: blur(8px);
        `;
      }
    }}
  }
`;


export const ToggleNavIcon = styled(NavIcon)`
  display: none;
  @media screen and (max-width: 479px) {
    display: flex;
    font-size: 1.5rem;
    margin: 0;
    color: ${({ theme }) => theme.primary};
  }
`;
export const ToggleNavTheme = styled(NavTheme)`
  display: none;
  width: fit-content;

  @media screen and (max-width: 767px) {
    display: flex;
    margin-top: 50%;
  }

  @media screen and (max-width: 479px) {
    font-size: 1.5rem;
  }
`;

export const NavIconContainer = styled(Flex)`
  margin-top: 25%;
  flex-direction: column;
`;
