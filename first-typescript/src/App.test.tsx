import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import {BrowserRouter} from 'react-router-dom'

test("renders learn react link", () => {
  render(
    <BrowserRouter>
  <App />
  </BrowserRouter>
  );

  const searchinput = screen.getByPlaceholderText(/Search by author/i);
  expect(searchinput).toBeInTheDocument();
});
