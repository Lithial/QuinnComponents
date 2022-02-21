import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App renders", () => {
  test("Is App Rendered", () => {
    render(<App />);
    const h1 = screen.getByText(/hello world/i);
    expect(h1).toBeInTheDocument();
  });
});
