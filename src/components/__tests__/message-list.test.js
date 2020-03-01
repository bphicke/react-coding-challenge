import React from "react";
import { render } from "@testing-library/react";
import MessageList from "../message-list";

describe("message-list", () => {
  it("should render without errors", () => {
    const { container } = render(<MessageList />);
    expect(container).toBeVisible();
  });
});
