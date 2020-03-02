import React from "react";
import { render } from "@testing-library/react";
import { MessageCard } from "../MessageCard";

describe("MessageCard", () => {
  const onClick = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should display a message card", () => {
    const messageParams = {
      id: 1,
      message: "This text should be visible",
      priority: 1,
    };
    const { getByText } = render(
      <MessageCard
        messageParams={messageParams}
        handleClearMessage={onClick}
      />,
    );
    expect(getByText(messageParams.message)).toBeVisible();
  });
});
