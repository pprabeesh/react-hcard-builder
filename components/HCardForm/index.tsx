import React, { useRef } from "react";

import { Props } from "./types";

import {
  HCARD_BUILDER_TITLE,
  PERSONAL_DETAILS_LEGEND,
  ADDRESS_LEGEND,
  INPUT_FIELDS_PERSONAL_DETAILS,
  INPUT_FIELDS_ADDRESS,
  BTN_CREATE_HACARD,
  BTN_UPLOAD_AVATAR,
} from "./constants";

import {
  HCardFormSection,
  HCardFormTitle,
  FieldSet,
  Legend,
  FieldSetContainer,
  Label,
  LabelText,
  Input,
  ButtonsContainer,
  Button,
  UploadButton,
} from "./styled";

export const HCardForm = ({
  hCardState,
  setAvatarState,
  handleChange,
}: Props) => {
  const fileInput = useRef(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    handleChange(value, name);
  };

  const handleOnUploadClick = (e: React.MouseEvent<HTMLInputElement>) => {
    fileInput.current.click();
  };
  const handleOnUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setAvatarState({
        file: file,
        previewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <HCardFormSection>
      <HCardFormTitle>{HCARD_BUILDER_TITLE}</HCardFormTitle>
      <form>
        <FieldSet>
          <Legend>{PERSONAL_DETAILS_LEGEND}</Legend>
          <FieldSetContainer>
            {INPUT_FIELDS_PERSONAL_DETAILS.map((input) => {
              const { label, id, type } = input;
              return (
                <Label htmlFor={id} key={`PD-${id}-${type}`}>
                  <LabelText>{label}</LabelText>
                  <Input
                    id={id}
                    name={id}
                    type={type}
                    value={hCardState[id]}
                    onChange={handleOnChange}
                  />
                </Label>
              );
            })}
          </FieldSetContainer>
        </FieldSet>
        <FieldSet>
          <Legend>{ADDRESS_LEGEND}</Legend>
          <FieldSetContainer>
            {INPUT_FIELDS_ADDRESS.map((input) => {
              const { label, id, type } = input;
              return (
                <Label htmlFor={id} key={`AD-${id}-${type}`}>
                  <LabelText>{label}</LabelText>
                  <Input
                    id={id}
                    name={id}
                    type={type}
                    value={hCardState[id]}
                    onChange={handleOnChange}
                  />
                </Label>
              );
            })}
          </FieldSetContainer>
        </FieldSet>
        <ButtonsContainer>
          <Button type="button" onClick={handleOnUploadClick}>
            {BTN_UPLOAD_AVATAR}
          </Button>
          <UploadButton
            data-testid="hcard-file-input"
            type="file"
            ref={fileInput}
            onChange={handleOnUpload}
          />
          <Button
            type="button"
            buttonStyle="primary"
            onClick={(e) => e.preventDefault()}
          >
            {BTN_CREATE_HACARD}
          </Button>
        </ButtonsContainer>
      </form>
    </HCardFormSection>
  );
};
