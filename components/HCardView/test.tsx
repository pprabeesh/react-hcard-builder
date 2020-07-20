import { render, screen } from "@testing-library/react";
import { HCardView } from "./index";
import { HCARD_VIEW_TITLE } from "./constants";

describe("HCardView", () => {
  const props = {
    hCardState: {
      givenName: "testGivenName",
      surname: "testSurname",
      email: "testEmail@test.com",
      phone: "04324242423",
      houseNameOrNumber: "testHouseName",
      street: "testStreet",
      suburb: "testSuburb",
      state: "testState",
      postcode: "testPostcode",
      country: "testCountry",
    },
    avatarState: {
      file: "",
      previewUrl: "",
    },
  };
  it("renders title", () => {
    render(<HCardView {...props} />);
    expect(screen.getByText(HCARD_VIEW_TITLE)).toBeInTheDocument();
  });

  it("renders email and phone", () => {
    render(<HCardView {...props} />);
    expect(screen.getByText("testEmail@test.com")).toBeInTheDocument();
    expect(screen.getByText("04324242423")).toBeInTheDocument();
  });

  it("renders postcode and country", () => {
    render(<HCardView {...props} />);
    expect(screen.getByText("testPostcode")).toBeInTheDocument();
    expect(screen.getByText("testCountry")).toBeInTheDocument();
  });
});
