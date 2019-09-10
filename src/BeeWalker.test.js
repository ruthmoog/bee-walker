import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BeeWalker from "./BeeWalker";

describe("bee walker", () => {
  describe("displays total bee count", () => {

    it("when 3 bees are counted", () => {
      const { getByText } = render(<BeeWalker />);
  
      fireEvent.click(getByText("Count queen"));
      fireEvent.click(getByText("Count queen"));
      fireEvent.click(getByText("Count male"));
  
      expect(getByText("Total: 3")).toBeInTheDocument();
    });

    it("when 6 bees are counted", () => {
      const { getByText } = render(<BeeWalker />);
  
      fireEvent.click(getByText("Count queen"));
      fireEvent.click(getByText("Count queen"));
      fireEvent.click(getByText("Count male"));
      fireEvent.click(getByText("Count worker"));
      fireEvent.click(getByText("Count worker"));
      fireEvent.click(getByText("Count unknown"));
      
      expect(getByText("Total: 6")).toBeInTheDocument();
    });
  })

});
// click BeeCounter, click other BeeCounter, expect total to be the same total nubmer of clicks
