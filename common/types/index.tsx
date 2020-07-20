export interface HCardState {
  givenName: string;
  surname: string;
  email: string;
  phone: string;
  houseNameOrNumber: string;
  street: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
}

export interface FileProps {
  file: string | File;
  previewUrl: string | ArrayBuffer;
}
