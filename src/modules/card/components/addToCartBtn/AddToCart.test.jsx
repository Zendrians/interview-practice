import { render, screen } from "@testing-library/react";
import DialogContextProvider from "../../context/dialogContext";
import AddToCartBtn from "./AddToCartBtn";
import { describe, test, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Container", () => {
  test("render the button correctly", () => {
    render(<AddToCartBtn addProductCount={() => {}} />);

    const a2cButton = screen.getByRole("button", { name: "Add to Cart" });

    expect(a2cButton).toBeInTheDocument();
  });

  test("Fire the addProductCount function on click", async () => {
    const user = userEvent.setup();
    const addProductCount = vi.fn();
    render(<AddToCartBtn addProductCount={addProductCount} />, {
      wrapper: DialogContextProvider,
    });
    await user.click(screen.getByRole("button", { name: "Add to Cart" }));
    expect(addProductCount).toHaveBeenCalledOnce();
  });
});
