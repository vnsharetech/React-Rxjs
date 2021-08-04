import { render } from "@testing-library/react";
import ViewObject from "./ViewObject";
import { screen } from "@testing-library/dom";

test("Prop is only text of sensor A", () => {
  render(<ViewObject messageA="message A" />);
  const elementA = screen.getByTestId("element-A");
  expect(elementA).toHaveTextContent("message A");
  const elementB = screen.getByTestId("element-B");
  expect(elementB).toHaveTextContent("");
  const elementC = screen.getByTestId("element-C");
  expect(elementC).toHaveTextContent("");
  const elementD = screen.getByTestId("element-D");
  expect(elementD).toHaveTextContent("");
});

test("Prop is only text of sensor B", () => {
  render(<ViewObject messageB="message B" />);
  const elementB = screen.getByTestId("element-B");
  expect(elementB).toHaveTextContent("message B");
  const elementA = screen.getByTestId("element-A");
  expect(elementA).toHaveTextContent("");
  const elementC = screen.getByTestId("element-C");
  expect(elementC).toHaveTextContent("");
  const elementD = screen.getByTestId("element-D");
  expect(elementD).toHaveTextContent("");
});

test("Prop is only text of sensor C", () => {
  render(<ViewObject messageC="message C" />);
  const elementC = screen.getByTestId("element-C");
  expect(elementC).toHaveTextContent("message C");
  const elementB = screen.getByTestId("element-B");
  expect(elementB).toHaveTextContent("");
  const elementA = screen.getByTestId("element-A");
  expect(elementA).toHaveTextContent("");
  const elementD = screen.getByTestId("element-D");
  expect(elementD).toHaveTextContent("");
});

test("Prop is only text of sensor D", () => {
  render(<ViewObject messageD="message D" />);
  const elementD = screen.getByTestId("element-D");
  expect(elementD).toHaveTextContent("message D");
  const elementB = screen.getByTestId("element-B");
  expect(elementB).toHaveTextContent("");
  const elementC = screen.getByTestId("element-C");
  expect(elementC).toHaveTextContent("");
  const elementA = screen.getByTestId("element-A");
  expect(elementA).toHaveTextContent("");
});

test("Prop is 4 messages", () => {
  render(
    <ViewObject
      messageA="message A"
      messageB="message B"
      messageD="message D"
      messageC="message C"
    />
  );
  const elementD = screen.getByTestId("element-D");
  expect(elementD).toHaveTextContent("message D");
  const elementB = screen.getByTestId("element-B");
  expect(elementB).toHaveTextContent("message B");
  const elementC = screen.getByTestId("element-C");
  expect(elementC).toHaveTextContent("message C");
  const elementA = screen.getByTestId("element-A");
  expect(elementA).toHaveTextContent("message A");
});
