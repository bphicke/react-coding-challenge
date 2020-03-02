import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { StyledButton } from "../StyledButton";

describe("StyledButton", () => {
  const onClick = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should render and display a button with text", () => {
    const { getByText } = render(
      <StyledButton onClick={onClick}>Button Text</StyledButton>,
    );
    const renderedButton = getByText("Button Text");
    expect(renderedButton).toBeVisible();
  });
  it("should fire a callback when clicked", () => {
    const { getByText } = render(
      <StyledButton onClick={onClick}>Button Text</StyledButton>,
    );
    const renderedButton = getByText("Button Text");
    expect(onClick).not.toBeCalled();
    fireEvent.click(renderedButton);
    expect(onClick).toBeCalled();
  });
});
