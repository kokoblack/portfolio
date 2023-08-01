import styled from "styled-components";
import { Flex } from "./Global";
import { TSHeader, TSText } from "./TechStack";

export const ProjectContainer = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 0 4%;
  width: 100%;
  box-sizing: border-box;
`;
export const ProjectHeader = styled(TSHeader)``;
export const ProjectText = styled(TSText)``;
export const ProjectCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5%;
  row-gap: 3%;
  width: 100%;
  margin-top: 8%;
  box-sizing: border-box;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 599px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 10%;
  }

  @media screen and (max-width: 479px) {
    padding: 2%;
  }
`;
export const ProjectCard = styled.div`
background: #FFFFFF;
box-shadow: 2px 2px 100px  ${({theme}) => theme.cardBS};
border-radius: 20px;
background-color: ${({theme}) => theme.cardBG};
`
export const ProjectCardImg = styled.img`
width: 100%;
height: auto;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
`
export const ProjectCardHolder = styled.div`
padding: 2% 5%;
`
export const ProjectCardHeader = styled.p`
font-weight: 500;
font-size: clamp(1.2rem, 2vw, 1.6rem );
color: ${({theme}) => theme.card};
text-align: left;
`
export const ProjectCardDesc = styled.p`
font-weight: 300;
font-size: clamp(1rem, 2vw, 1.1rem);
color: ${({theme}) => theme.primary};
text-align: left;
`
export const ProjectCardStack = styled.p`
font-weight: 400;
font-size: clamp(.9rem, 2vw, 1rem);
color: ${({theme}) => theme.primary};
text-align: left;
`
export const ProjectCardIcon = styled.div`

`
export const ProjectCardLink = styled.a`
font-weight: 300;
margin-left: .5rem;
text-decoration: underline;
cursor: pointer;
color: ${({theme}) => theme.card};

`
export const ProjectCardLinkFlexContainer = styled(Flex)`
margin-top: 5%;
font-size: clamp(.9rem, 2vw, 1rem);
color: ${({theme}) => theme.card};
`
export const ProjectCardLinkFlex = styled(Flex)<{left?: boolean}>`
margin-left: ${({left}) => left? "auto" : 0};
gap: 0;

`