import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { StyledSnackbar } from "../StyledSnackbar";

describe("StyledSnackbar", () => {
  const onClose = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should render and display a message in a snackbar", () => {
    const open = true;
    const errorMessage = "There is an error!";
    const { getByText, getByLabelText } = render(
      <StyledSnackbar
        onClose={onClose}
        open={open}
        errorMessage={errorMessage}
      />,
    );
    const renderedSnackbar = getByText(errorMessage);
    expect(renderedSnackbar).toBeVisible();
    expect(onClose).not.toBeCalled();
    fireEvent.click(getByLabelText("Close"));
    expect(onClose).toBeCalled();
  });
  it("should not render a snackbar", () => {
    const open = false;
    const errorMessage = "This should not be visible";
    const { queryByText } = render(
      <StyledSnackbar
        onClose={onClose}
        open={open}
        errorMessage={errorMessage}
      />,
    );
    expect(queryByText(errorMessage)).toBe(null);
  });
});
