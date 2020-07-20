import React from "react";

import { HCardState, FileProps } from "common/types";

import {
  HCARD_VIEW_TITLE,
  IMAGE_ALT_TEXT,
  EMAIL_LABEL,
  PHONE_LABEL,
  ADDRESS_LABEL,
  POSTCODE,
  COUNTRY,
} from "./constants";

import {
  HCardViewSection,
  HCardViewContainer,
  HCardViewTitle,
  HCard,
  HCardHead,
  HCardTitle,
  HCardAvatarContainer,
  HCardContent,
  HCardContentContainer,
  HCardContentItem,
} from "./styled";

interface Props {
  hCardState: HCardState;
  avatarState: FileProps;
}

export const HCardView = ({ hCardState, avatarState }: Props) => {
  const {
    givenName,
    surname,
    email,
    phone,
    houseNameOrNumber,
    street,
    suburb,
    state,
    postcode,
    country,
  } = hCardState;

  const { previewUrl } = avatarState;

  return (
    <HCardViewSection>
      <HCardViewContainer>
        <HCardViewTitle>{HCARD_VIEW_TITLE}</HCardViewTitle>
        <HCard>
          <HCardHead>
            <HCardTitle property="fn">
              {givenName || ""} {surname || ""}
            </HCardTitle>
            <HCardAvatarContainer property="hasPhoto">
              <img src={`${previewUrl}`} alt={IMAGE_ALT_TEXT} />
            </HCardAvatarContainer>
          </HCardHead>
          <HCardContent>
            <HCardContentContainer>
              <HCardContentItem>
                <span>{EMAIL_LABEL}</span>
                <span property="hasEmail">{email}</span>
              </HCardContentItem>
              <HCardContentItem>
                <span>{PHONE_LABEL}</span>
                <span property="hasTelephone">{phone}</span>
              </HCardContentItem>
              <HCardContentItem>
                <span property="hasAddress">{ADDRESS_LABEL}</span>
                <span property="street-address">
                  {houseNameOrNumber} {street}
                </span>
              </HCardContentItem>
              <HCardContentItem>
                <span> </span>
                <span property="locality">{`${suburb}${
                  suburb && state && ","
                } ${state}`}</span>
              </HCardContentItem>
              <HCardContentItem halfWidth>
                <span>{POSTCODE}</span>
                <span property="postal-code">{postcode}</span>
              </HCardContentItem>
              <HCardContentItem halfWidth>
                <span>{COUNTRY}</span>
                <span property="country-name">{country}</span>
              </HCardContentItem>
            </HCardContentContainer>
          </HCardContent>
        </HCard>
      </HCardViewContainer>
    </HCardViewSection>
  );
};
