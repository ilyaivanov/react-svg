import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Tree from "./Tree";
import { spacings } from "./constants";

it("Tree should render four nodes at x: 20 with step of 10", () => {
  render(<Tree />);

  areEqual(treePage.getItemCircleCoordinated("Home"), {
    x: spacings.focusedNodeOffset,
    y: spacings.focusedNodeOffset,
  });
});

it("Tree should render four nodes at x: 20 with step of 10", () => {
  render(<Tree />);

  areEqual(treePage.getItemCircleCoordinated("Home"), {
    x: spacings.focusedNodeOffset,
    y: spacings.focusedNodeOffset,
  });
});

const treePage = {
  getItemText: (itemTitle: string) => {
    return screen.getByTestId(itemTitle + "-text").textContent;
  },

  getItemCircleCoordinated: (itemTitle: string): Vector => {
    const circle = screen.getByTestId(itemTitle + "-circle");
    return {
      x: Number.parseFloat(circle.getAttribute("cx")!),
      y: Number.parseFloat(circle.getAttribute("cy")!),
    };
  },
};
