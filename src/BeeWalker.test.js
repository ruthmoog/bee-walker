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

    let getByTestId, getByText

    beforeEach(() => {
      const stuff  = render(
        <BeeWalker species="bombus terrestris" />
      );
      getByTestId = stuff.getByTestId
      getByText = stuff.getByText
    })

    it("queens", () => {
      expect(getByTestId("queen-counter")).toHaveTextContent("0");
      fireEvent.click(getByText("Count queen"));
      expect(getByTestId("queen-counter")).toHaveTextContent("1");
    });

    it("workers", () => {
      expect(getByTestId("worker-counter")).toHaveTextContent("0");
      fireEvent.click(getByText("Count worker"));
      expect(getByTestId("worker-counter")).toHaveTextContent("1");
    });
    
    it("males", () => {
      expect(getByTestId("male-counter")).toHaveTextContent("0");
      fireEvent.click(getByText("Count male"));
      expect(getByTestId("male-counter")).toHaveTextContent("1");
    });

    it("increments only the selected caste", () => {
      fireEvent.click(getByText("Count worker"));
      expect(getByTestId("queen-counter")).toHaveTextContent("0");
      expect(getByTestId("male-counter")).toHaveTextContent("0");
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
