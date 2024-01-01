import { render, screen } from "@testing-library/react";
import CardModuleContainer from "./CardModuleContainer";
import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import DialogContextProvider from "../context/dialogContext";

describe("Container", () => {
  test("render component correctly", () => {
    render(<CardModuleContainer />);

    const productTitle = screen.getByText("ABS Cap");
    expect(productTitle).toBeInTheDocument();
  });

  test("Update the counter on add to cart click", async () => {
    const user = userEvent.setup();
    render(<CardModuleContainer />, { wrapper: DialogContextProvider });
    const a2cBtn = screen.getByRole("button", { name: "Add to Cart" });
    const counter = screen.getByTestId("a2c-counter");
    expect(a2cBtn).toBeInTheDocument();
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent("0");
    await user.click(a2cBtn);
    expect(counter).toHaveTextContent("1");
    await user.click(a2cBtn);
    expect(counter).toHaveTextContent("2");
  });
});
