import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const link = screen.getByRole("main");
    expect(link).toBeInTheDocument();
  });
});
