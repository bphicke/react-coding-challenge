import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MessageList from "../message-list";

describe("message-list", () => {
  it("should render without errors", () => {
    const { container } = render(<MessageList />);
    expect(container).toBeVisible();
  });
  it("should not display messages cleared by the clear all button", async () => {
    const { getAllByText } = render(<MessageList />);
    expect(await getAllByText("Count 0").length).not.toBe(3);
    const [clearAllButton] = getAllByText("CLEAR");
    fireEvent.click(clearAllButton);
    expect(await getAllByText("Count 0").length).toBe(3);
  });
  it("should not display messages cleared by the message card", async () => {
    const { getAllByText } = render(<MessageList />);
    expect(await getAllByText("Count 0").length).not.toBe(3);
    const [_, clearButton] = getAllByText("CLEAR");
    fireEvent.click(clearButton);
    expect(await getAllByText("Count 0").length).toBe(3);
  });
});
