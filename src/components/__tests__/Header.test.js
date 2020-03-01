import React from "react";
import { render } from "@testing-library/react";
import { Header } from "../Header";

describe("Header", () => {
  it("should render a header", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Help.com Coding Challenge")).toBeVisible();
  });
});
