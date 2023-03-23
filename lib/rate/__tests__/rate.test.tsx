import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Rate from "../rate";

describe("Rate", () => {
  it("renders correctly", () => {
    const { container } = render(<Rate />);
    expect(container).toMatchSnapshot();
  });

  it("renders the correct number of stars", () => {
    const { getAllByRole } = render(<Rate count={5} />);
    const stars = getAllByRole("button");
    expect(stars.length).toBe(5);
  });

  it("fills in the correct number of stars when clicked", () => {
    const onChange = jest.fn();
    const { getAllByRole } = render(<Rate count={5} onChange={onChange} />);
    const stars = getAllByRole("button");
    fireEvent.click(stars[2]);
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it("fills in the correct number of stars when hovered", () => {
    const onChange = jest.fn();
    const { getAllByRole } = render(<Rate count={5} onChange={onChange} />);
    const stars = getAllByRole("button");
    fireEvent.mouseEnter(stars[2]);
    expect(stars[0]).toHaveStyle("color: gold");
    expect(stars[1]).toHaveStyle("color: gold");
    expect(stars[2]).toHaveStyle("color: gold");
    expect(stars[3]).toHaveStyle("color: gray");
    expect(stars[4]).toHaveStyle("color: gray");
  });
});
