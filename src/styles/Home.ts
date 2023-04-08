import styled from "styled-components";
import { color } from "./Global";
import { css } from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  position: relative;
  box-sizing: border-box;
  background-color: ${({theme}) => theme.standard};
`;
