import React from "react";
import { render } from "@testing-library/react";
import { ButtonsLayout } from "../ButtonsLayout";
import { Button } from "@material-ui/core";

describe("ButtonsLayout", () => {
  it("should render children", () => {
    const ButtonOne = () => <Button>Test 1</Button>;
    const ButtonTwo = () => <Button>Test 2</Button>;
    const { getByText } = render(
      <ButtonsLayout>
        <ButtonOne />
        <ButtonTwo />
      </ButtonsLayout>,
    );
    expect(getByText("Test 1")).toBeVisible();
    expect(getByText("Test 2")).toBeVisible();
  });
});
