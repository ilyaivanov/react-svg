import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Tree from "./Tree";

it("Tree should render four nodes at x: 20 with step of 10", () => {
  render(<Tree />);

  const circles = document.querySelectorAll("circle");

  areEqual(circles[0].getAttribute("r"), "10");
  fireEvent.click(circles[0]);
  areEqual(circles[0].getAttribute("r"), "11");
  fireEvent.click(circles[0]);
  areEqual(circles[0].getAttribute("r"), "12");
});

const treePage = {};
