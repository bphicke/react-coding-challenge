import React from "react";
import { render } from "@testing-library/react";
import { MessageCard } from "../MessageCard";

//TODO: test styles
//TODO: test callback invoked
//TODO: factor out before each

describe("MessageCard", () => {
  it("should render and display a message", () => {
    const messageParams = {
      id: 1,
      message: "This text should be visible",
      priority: 1,
    };
    const onClick = () => jest.fn();
    const { getByText } = render(
      <MessageCard
        messageParams={messageParams}
        handleClearMessage={onClick}
      />,
    );
    expect(getByText(messageParams.message)).toBeVisible();
  });
});
