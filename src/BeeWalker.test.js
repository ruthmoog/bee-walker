import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BeeWalker from "./BeeWalker";

describe("tracker", () => {
  it("greets you with a bee", () => {
    const { getByTestId, getByText } = render(
      <BeeWalker species="bombus terrestris" />
    );
    expect(getByTestId("greeting-text")).toHaveTextContent("bombus terrestris");
    expect(getByTestId("bee-counter")).toHaveTextContent("0");
    fireEvent.click(getByText("Count bee"));
    expect(getByTestId("bee-counter")).toHaveTextContent("1");
  });

  it("greets you with a different bee", () => {
    const { getByTestId } = render(<BeeWalker species="bombus hortorum" />);
    expect(getByTestId("greeting-text")).toHaveTextContent("bombus hortorum");
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
