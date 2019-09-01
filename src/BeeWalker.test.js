import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BeeWalker from "./BeeWalker";

describe("tracker", () => {
  it("displays a bee species", () => {
    const { getByTestId } = render(<BeeWalker species="bombus hortorum" />);
    expect(getByTestId("greeting-text")).toHaveTextContent("bombus hortorum");
  });

  describe("counts", () => {
    it("queens", () => {
      const { getByTestId, getByText } = render(
        <BeeWalker species="bombus terrestris" />
      );
      expect(getByTestId("queen-counter")).toHaveTextContent("0");
      fireEvent.click(getByText("Count queen"));
      expect(getByTestId("queen-counter")).toHaveTextContent("1");
    });

    it("workers", () => {
      const { getByTestId, getByText } = render(
        <BeeWalker species="bombus terrestris" />
      );
      expect(getByTestId("worker-counter")).toHaveTextContent("0");
      fireEvent.click(getByText("Count worker"));
      expect(getByTestId("worker-counter")).toHaveTextContent("1");
      expect(getByTestId("queen-counter")).toHaveTextContent("0");
    });
  });
});

// // __tests__/fetch.test.js
// import React from 'react'
// import { render, fireEvent, waitForElement } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
// import axiosMock from 'axios'
// import Fetch from '../fetch'

// test('loads and displays greeting', async () => {
//   const url = '/greeting'
//   const { getByText, getByTestId } = render(<Fetch url={url} />)

//   axiosMock.get.mockResolvedValueOnce({
//     data: { greeting: 'hello there' },
//   })

//   fireEvent.click(getByText('Load Greeting'))

//   const greetingTextNode = await waitForElement(() =>
//     getByTestId('greeting-text')
//   )

//   expect(axiosMock.get).toHaveBeenCalledTimes(1)
//   expect(axiosMock.get).toHaveBeenCalledWith(url)
//   expect(getByTestId('greeting-text')).toHaveTextContent('hello there')
//   expect(getByTestId('ok-button')).toHaveAttribute('disabled')
// })
