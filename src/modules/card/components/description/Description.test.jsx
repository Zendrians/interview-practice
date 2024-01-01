import { render, screen } from "@testing-library/react";
import Description from "./Description";
import { describe, test, expect } from "vitest";

describe("Description", () => {
  test("render product name correctly", () => {
    render(<Description name="abs" description="desc" price={30} />);

    const productTitle = screen.getByText("abs");
    expect(productTitle).toBeInTheDocument();
  });

  test("render product description correctly", () => {
    render(<Description name="abs" description="desc" price={30} />);

    const productDescription = screen.getByText("desc");
    expect(productDescription).toBeInTheDocument();
  });

  test("Format product price correctly", () => {
    render(<Description name="abs" description="desc" price={30} />);

    const productDescription = screen.getByText("$30.00");
    expect(productDescription).toBeInTheDocument();
  });
});
