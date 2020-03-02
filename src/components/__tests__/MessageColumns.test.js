import React from "react";
import { render } from "@testing-library/react";
import { MessageColumns } from "../MessageColumns";

describe("MessageColumns", () => {
  const messages = [
    { id: 2, message: "second message", priority: 1 },
    { id: 3, message: "third message", priority: 2 },
    { id: 6, message: "sixth message", priority: 3 },
    { id: 1, message: "first message", priority: 1 },
    { id: 4, message: "fourth message", priority: 2 },
    { id: 5, message: "fifth message", priority: 3 },
  ];
  const onClick = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should render three message columns", () => {
    const cleared = {};
    const { getAllByText } = render(
      <MessageColumns
        handleClearMessage={onClick}
        messages={messages}
        cleared={cleared}
      />,
    );
    expect(getAllByText("Count 2").length).toBe(3);
  });
  it("should not render messages that are included in cleared hash", () => {
    const cleared = { 2: true, 3: true, 6: true };
    const { getAllByText, queryByText } = render(
      <MessageColumns
        handleClearMessage={onClick}
        messages={messages}
        cleared={cleared}
      />,
    );
    const [two, three, six] = messages;
    expect(getAllByText("Count 1").length).toBe(3);
    expect(queryByText(two.message)).toBe(null);
    expect(queryByText(three.message)).toBe(null);
    expect(queryByText(six.message)).toBe(null);
  });
});
