import styled from "styled-components";
import { HeroText, HeroTextSpan } from "./Hero";
import { ProjectCardDesc } from "./Project";

export const ContactContainer = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 0 4%;
  width: 100%;
  color: ${({ theme }) => theme.secondary};
`;
export const ContactMailContainer = styled.div`
  padding: 10% 0;
`;
export const ContactFLex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 1% 0;

  @media screen and (max-width: 479px) {
    flex-direction: column;
  }
`;
export const ContactHeader = styled(HeroText)`
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: clamp(1rem, 5vw, 1.5rem);
  }
`;
export const ContactHeaderSpan = styled(HeroTextSpan)``;
export const ContactText = styled(ProjectCardDesc)`
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  font-weight: 400;
  margin-right: 4%;

  @media screen and (max-width: 479px) {
    margin-right: 0;
    /* margin-bottom: 4%; */
  }
`;
export const ContactIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  box-sizing: border-box;
  color: ${({ theme }) => theme.primary};
  margin-left: 0.5rem;

  @media screen and (max-width: 479px) {
    margin: 1rem 0.3rem;
  }
`;
