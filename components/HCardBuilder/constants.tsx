import { HCardState, FileProps } from "common/types";

export const DEFAULT_IMAGE_URL = "/avatar.png";

export const INITIAL_STATE: HCardState = {
  givenName: "",
  surname: "",
  email: "",
  phone: "",
  houseNameOrNumber: "",
  street: "",
  suburb: "",
  state: "",
  postcode: "",
  country: "",
};

export const IMAGE_PROPS: FileProps = {
  file: "",
  previewUrl: DEFAULT_IMAGE_URL,
};
