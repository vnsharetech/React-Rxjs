import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders Dashboard test", () => {
  render(<Home />);
  const dashboardElement = screen.getByText(/Dashboard/i);
  expect(dashboardElement).toBeInTheDocument();
});
