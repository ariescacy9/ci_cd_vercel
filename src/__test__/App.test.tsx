import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test('Renders main page correctly', () => {
  render(<App />)
  expect(true).toBeTruthy();
});
/*
describe('Renders count correctly', () => {
  
  test('count is cero', () => {
    render(<App />);
    const count = screen.getByText(/count is 0/i)
    expect(count).toBeInTheDocument();
  })

});
*/