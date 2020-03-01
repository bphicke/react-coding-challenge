import React from "react";
import { render } from "@testing-library/react";
import { MessageColumn } from "../MessageColumn";

describe("MessageColumn", () => {
  it("should render a display a message", () => {
    const title = "test title";
    const messages = [
      { id: 1, message: "first message", priority: 1 },
      { id: 2, message: "second message", priority: 1 },
    ];
    const onClick = jest.fn();
    const { getByText } = render(
      <MessageColumn
        title={title}
        handleClearMessage={onClick}
        messages={messages}
      />,
    );
    expect(getByText(title)).toBeVisible();
    expect(getByText(messages[0].message)).toBeVisible();
    expect(onClick).toBeCalled();
  });
});
