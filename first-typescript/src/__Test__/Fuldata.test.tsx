import { Fulldata } from "../Pages/Fulldata";
import { getAllByText, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";




describe("checking fulldata component", () => {
  test("checking for json", () => {
    render(
      <BrowserRouter>
        <Fulldata  />
      </BrowserRouter>
    );

    const heading = screen.getAllByText(/the full data is/i);

    expect(heading[0]).toBeInTheDocument();
  });
});
