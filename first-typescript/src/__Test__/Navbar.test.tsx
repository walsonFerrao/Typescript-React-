import React from "react";
import { render, screen ,fireEvent} from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import SearchAppBar from '../Components/Navbar/Navbar'


interface searchqueries {
    query: string;
  } 
  
  interface Myprops {
    searchobj: searchqueries;
    setsearchobj: React.Dispatch<React.SetStateAction<searchqueries>>;
  }



test("renders learn react link", () => {
  render(
    <BrowserRouter>
  <SearchAppBar searchobj={{query:""}} setsearchobj={()=>{}} />
  </BrowserRouter>
  );

  const searchinput = screen.getByPlaceholderText(/Search by author/i);
  expect(searchinput).toBeInTheDocument();

const assignemnt=screen.getByText(/ASSIGNMENT/i)

expect(assignemnt).toBeInTheDocument();

const myicon=screen.getByTestId("my-icon")
expect(myicon).toBeInTheDocument()

const homeicon=screen.getByTestId("HomeIcon")
expect(homeicon).toBeInTheDocument()
fireEvent.click(homeicon)


});


test('finding navsearch',async()=>{

  render(
    <BrowserRouter>
  <SearchAppBar searchobj={{query:""}} setsearchobj={()=>{}} />
  </BrowserRouter> 
  );

const searchinput = screen.getByPlaceholderText(/Search by author/i);
expect(searchinput).toHaveValue('')

fireEvent.change(searchinput , { target: { value: 'test' } })
  
expect(searchinput).toHaveValue('test')



})