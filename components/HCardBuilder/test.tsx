import { render, screen } from "@testing-library/react";
import { HCardBuilder } from "./index";

describe("HCardBuilder", () => {
  it("renders without crashing", () => {
    render(<HCardBuilder />);
    expect(
      screen.getByRole("heading", { name: "hCard Builder" })
    ).toBeInTheDocument();
  });
});
