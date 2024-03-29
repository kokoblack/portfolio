import styled from "styled-components";

export const TSContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4%;
  box-sizing: border-box;
  margin-top: 10rem;
  width: 100%;

  @media screen and (max-width: 599px) {
    margin-top: 15rem;
  }
`;

export const TSHeader = styled.h3`
  color: ${({ theme }) => theme.secondary};
  font-weight: 700;
  font-size: clamp(1.5rem, 4vw, 2.3rem);
  margin: 0;
`;

export const TSText = styled.p`
  color: ${({ theme }) => theme.primary};
  font-weight: 400;
  font-size: clamp(1.1rem, 4vw, 1.5rem);
  margin: 1% 0;
`;

export const TSIcon = styled.div<{ color: string; w?: number }>`
  color: ${({ color }) => color};
  font-size: clamp(3rem, 5vw, 5rem);
  transition: all ease-in 0.5s;

  @media (hover: hover){
    &:hover {
      transform: rotate(-10deg) scale(1.2);
    }
  }
`;

export const TSIconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  column-gap: 17%;
  row-gap: 6%;
  margin-top: 6%;
  box-sizing: border-box;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 479px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
