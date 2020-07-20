import styled from "styled-components";
import { media } from "common";

interface Props {
  halfWidth?: boolean;
}

export const HCardViewSection = styled.section`
  background-color: #e1e4e7;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px;
  padding: 40px 0;
  justify-content: flex-start;
  max-width: 520px;
  margin: 0 auto;

  @media ${media.tablet} {
    padding: 40px 45px;
  }
`;

export const HCardViewContainer = styled.div`
  width: 100%;
  min-height: 100px;
  margin-top: 70px;
`;

export const HCardViewTitle = styled.div`
  color: #c3c4c3;
  font-size: #1.1em;
  font-weight: 500;
  margin: 0 0 5px 0;
  text-align: end;
  text-transform: uppercase;
`;

export const HCard = styled.div`
  width: 100%;
  min-height: 100px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px;
`;

export const HCardHead = styled.div`
  padding: 20px;
  background-color: #2c3e50;
  position: relative;
`;

export const HCardTitle = styled.h3`
  color: white;
  text-transform: capitalize;
  font-weight: 700;
  text-align: start;
  margin: 30px 0 0 0;
  font-size: 1.5em;
  font-family: $font-family;
`;

export const HCardAvatarContainer = styled.div`
  background-color: white;
  position: absolute;
  right: 15px;
  top: 10px;
  box-shadow: 0px 1px 0px 1px rgba(154, 154, 154, 0.75);
  width: 83px;
  height: 104px;
  z-index: 50;

  > img {
    margin-top: 15px;
    width: 80%;
    height: 80%;
  }
`;

export const HCardContent = styled.div`
  background-color: white;
  min-height: 200px;
`;

export const HCardContentContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const HCardContentItem = styled.div<Props>`
  border-bottom: 0.5px solid #dbe0e2;
  display: flex;
  margin-top: 10px;
  align-items: flex-end;
  min-height: 20px;
  width: ${(props) => (props.halfWidth ? "50%" : "100%")};
  height: auto;

  > span:first-child {
    text-transform: uppercase;
    font-size: 0.65em;
    width: 75px;
    text-align: left;
  }
`;
