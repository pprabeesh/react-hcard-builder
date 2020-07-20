import { render, screen, fireEvent } from "@testing-library/react";
import { HCardForm } from "./index";
import {
  PERSONAL_DETAILS_LEGEND,
  ADDRESS_LEGEND,
  BTN_UPLOAD_AVATAR,
  BTN_CREATE_HACARD,
  INPUT_FIELDS_PERSONAL_DETAILS,
  INPUT_FIELDS_ADDRESS,
} from "./constants";

describe("HCardForm", () => {
  const mockHandleChange = jest.fn();
  const mockSetAvatarState = jest.fn();
  const props = {
    hCardState: {
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
    },
    setAvatarState: mockSetAvatarState,
    handleChange: mockHandleChange,
  };
  it("renders fieldset groups", () => {
    render(<HCardForm {...props} />);
    expect(
      screen.getByRole("group", { name: PERSONAL_DETAILS_LEGEND })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("group", { name: ADDRESS_LEGEND })
    ).toBeInTheDocument();
  });

  it("renders buttons", () => {
    render(<HCardForm {...props} />);
    expect(
      screen.getByRole("button", { name: BTN_UPLOAD_AVATAR })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: BTN_CREATE_HACARD })
    ).toBeInTheDocument();
  });

  it("renders textboxs", () => {
    render(<HCardForm {...props} />);

    INPUT_FIELDS_PERSONAL_DETAILS.map((input) => {
      expect(
        screen.getByRole("textbox", { name: input.label })
      ).toBeInTheDocument();
    });
    INPUT_FIELDS_ADDRESS.map((input) => {
      expect(
        screen.getByRole("textbox", { name: input.label })
      ).toBeInTheDocument();
    });
  });

  it("triggers handleChange on text input change", () => {
    render(<HCardForm {...props} />);

    fireEvent.change(screen.getByRole("textbox", { name: "Surname" }), {
      target: { value: "a", name: "surname" },
    });
    expect(mockHandleChange).toBeCalled();
  });
});
