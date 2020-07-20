import styled from "styled-components";
import { media } from "common";

export const HCardBuilderLayout = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  height: auto;
  margin: auto;
  @media ${media.tablet} {
    flex-direction: row;
  }
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px;
  text-align: center;
  font-family: "Merriweather Sans", sans-serif;
`;
