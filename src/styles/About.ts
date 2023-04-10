import styled from "styled-components";
import { ProjectCardDesc } from "./Project";
import { TSHeader } from "./TechStack";

export const AboutContainer = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 0 4%;
  width: 70%;
  margin-top: 12%;
  text-align: left;

  @media screen and (max-width: 992px) {
    width: 100%;
  }

  @media screen and (max-width: 599px) {
    margin-top: 50%;
  }

  @media screen and (max-width: 479px) {
    margin-top: 70%;
  }
`;

export const AboutHeader = styled(TSHeader)`
  margin-top: 10%;
  margin-bottom: 5%;
`;
export const AboutText = styled(ProjectCardDesc)``;
export const AboutMedText = styled.p`
  font-weight: 400;
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: ${({ theme }) => theme.primary};
  margin: 0;
`;
export const AboutSmallText = styled.p`
  font-weight: 500;
  margin: 0 0 0 2%;
  font-size: clamp(0.7rem, 1.5vw, 0.8rem);
  color: ${({ theme }) => theme.primaryReverse};
`;
export const AboutIcon = styled(AboutSmallText)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
export const AboutButton = styled(AboutSmallText)`
  font-weight: 600;
  padding: 0.4rem 1.5rem;
  border-radius: 1rem;
  border-right: 1rem;
  color: #018c0f;
  background-color: #d7ffe0;
  margin-left: auto;
  height: fit-content;
  font-size: .7rem;

  @media screen and (max-width: 479px) {
    padding: 0.4rem 1rem;
    font-size: .6rem;
  }
`;
export const AboutFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;
export const AboutMTEnd = styled.div<{ left?: boolean; content?: string }>`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin: 1% 0 0 0; 
`;
export const AboutHR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.primaryReverse};
  margin: 5% 0 
`;
