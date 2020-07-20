import styled from "styled-components";
import { media } from "common";

interface Props {
  buttonStyle?: string;
}

export const HCardFormSection = styled.section`
  width: 100%;
  height: auto;
  text-align: left;
  padding: 40px 20px;

  @media ${media.tablet} {
    flex-direction: row;
    width: 50%;
    padding: 40px 20px;
    max-width: 480px;
  }
`;

export const HCardFormTitle = styled.h1`
  margin: 0;
  color: #2c3e50;
  font-size: 1.8em;
  font-weight: 800;
`;

export const FieldSet = styled.fieldset`
  border: none;
  margin: 17px 0;
  padding-block-start: 0;
  padding-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  width: 100%;
`;

export const Legend = styled.legend`
  width: 90%;
  text-transform: uppercase;
  font-size: 0.65em;
  border-bottom: 0.5px solid #dbe0e2;
  color: #b0b8bc;
  margin-bottom: 25px;

  @media ${media.tablet} {
    width: 95%;
  }
`;

export const FieldSetContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 90%;
  min-width: 190px;

  &:nth-child(odd) {
    margin-right: 12px;
  }

  @media ${media.laptop} {
    width: 45%;
  }
`;

export const LabelText = styled.span`
  text-transform: uppercase;
  font-size: 0.8em;
  color: #2c3e50;
`;

export const Input = styled.input`
  padding: 10px 5px;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  @media ${media.tablet} {
    padding: 10px 12px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Button = styled.button<Props>`
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px #3f515d;
  color: white;
  font-size: 1.3em;
  height: 42px;
  width: 90%;
  margin-top: 10px;
  transition: all 0.2s ease-in;

  &:nth-child(odd) {
    margin-right: 12px;
  }

  ${(props) =>
    props.buttonStyle === "primary"
      ? `
      background: #3498db;
      `
      : `
      background: #627b8b;
  `};

  &:hover {
    background-color: #2c3e50;
  }

  @media ${media.laptop} {
    margin: 0;
    min-width: 190px;
    width: 45%;
  }
`;

export const UploadButton = styled.input`
  display: none;
`;
