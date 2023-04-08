import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 4%;
  box-sizing: border-box;
  margin-top: 8%;

  @media screen and (max-width: 992px) {
  flex-direction: column;
}
`;

export const HeroBasis = styled.div<{basis: number}>`
width: ${({basis}) => basis}%;

@media screen and (max-width: 992px) {
  width: 100%;
}
`

export const HeroText = styled.p`
  font-weight: 700;
  font-size: clamp(1.5rem, 4vw, 3.5rem);
  color: ${({ theme }) => theme.secondary};
  text-align: left;

  @media screen and (max-width: 992px) {
  text-align: center;
}
`;

export const HeroTextSpan = styled.div`
  background: -webkit-linear-gradient(360deg, #13b0f5 -2.06%, #e70faa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeroImgContainer = styled.div`
padding: .2rem .5rem;
border-radius: 100%;
background: linear-gradient(360deg, #13b0f5 -2.06%, #e70faa 100%);
`

export const HeroImg = styled.img`
width: 60%;
display: block;
margin-left: auto;
border-radius: 100%;
padding: .5%;
background: linear-gradient(360deg, #13b0f5 -2.06%, #e70faa 100%);

@media screen and (max-width: 992px) {
  margin: 0 auto;
  width: 30%;

}

@media screen and (max-width: 480px) {
  width: 45%;
}
`
export const HeroBR = styled.br`
@media screen and (max-width: 992px) {
  display: none;
}
`