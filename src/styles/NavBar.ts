import styled from "styled-components";
import { color, Flex } from "./Global";

export const NavContainer = styled(Flex)`
  width: 100%;
  padding: 2% 4%;
  box-sizing: border-box;
  font-size: clamp(0.625rem, 2.5vw, 1.1rem);
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => (theme ? color.lightPrimary : color.darkPrimary)};
  font-weight: 500;

  @media screen and (max-width: 767px) {
    margin-bottom: 4%;
  }
`;

export const NavImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: auto;
  color: red;
  background-color: red;

  @media screen and (max-width: 479px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const NavIcon = styled(Flex)`
  font-size: 1rem;
  color: ${({ theme }) => (theme ? color.lightPrimary : color.darkPrimary)};
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
  border: 1px solid #e0e3e7;
  font-size: 1rem;
  color: ${({ theme }) => (theme ? color.lightPrimary : color.darkPrimary)};

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavMenu = styled(Flex)`
  display: none;
  margin-left: 3%;
  font-size: 1.5rem;
  color: ${({ theme }) =>
    theme ? color.lightSecondary : color.lightSecondary};

  @media screen and (max-width: 767px) {
    display: flex;
  }

  @media screen and (max-width: 479px) {
    z-index: 10;
  }
`;

export const ToggleMenu = styled.div`
  position: absolute;
  top: 28%;
  right: 4%;
  border-radius: 5px;
  background-color: ${color.white};
  box-shadow: 1px 1px 2px 2px #e0e3e7, -1px -1px 2px 2px #e0e3e7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  font-size: 1rem;

  /* @media screen and (max-width: 600px) {
    top: 22%;
  } */

  @media screen and (max-width: 479px) {
    width: 100vw;
    min-height: 100vh;
    top: 0;
    right: 0;
    box-shadow: none;
    padding: 0;
    font-size: clamp(1.5rem, 4vw, 2rem);
    justify-content: start;
    padding-top: 25%;
  }
`;

export const ToggleNavTheme = styled(NavTheme)`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    margin-top: 20%;
  }

  @media screen and (max-width: 479px) {
    font-size: 1.5rem;
  }
`;
