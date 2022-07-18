import { Mycomponent } from "../Pages/Home";
import { MyCard } from "../Components/Card/Card";
import { findAllByTestId, findByRole, getAllByText, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Button } from "@mui/material";

interface Data {
  author: string;
  comment_text: null;
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  parent_id: null;
  points: number;
  story_id: null;
  story_text: null;
  story_title: null;
  story_url: null;
  title: string;
  url: string;
  _highlightResult: any;
  _tags: string[];
}

let prop: Data = {
  author: "walson",
  comment_text: null,
  created_at: "2022-07-17T14:04:14.000Z",
  created_at_i: 12,
  num_comments: 12,
  objectID: "123",
  parent_id: null,
  points: 25,
  story_id: null,
  story_text: null,
  story_title: null,
  story_url: null,
  title: "This is my book",
  url: "www.walson.in",
  _highlightResult: 25,
  _tags: ["walson", "mybook", "adventure"],
};

let myown: any = null;

interface searchqueries {
  query: string;
}

let setsearchobj: () => void;

describe("checking fulldata component", () => {
  test("checking for json",  () => {
    let searchobjifnoquery: searchqueries = {
      query: "",
    };

    render(
      <BrowserRouter>
        <Mycomponent
          searchobj={searchobjifnoquery}
          setsearchobj={setsearchobj}
        />
      </BrowserRouter>
    );

    const contentdiv = screen.getByTestId("dataifnoquery");

    expect(contentdiv).toBeInTheDocument();
  });


 


  test("checking rendering", async ()=>{

    render(<BrowserRouter>
          <Mycomponent
            searchobj={{query: "a"}}
            setsearchobj={setsearchobj}
          />
        </BrowserRouter>)
  
       const  myelement=await screen.findByText(/There is No result by this Auther Please change the input/i)
         expect(myelement).toBeInTheDocument()
         
  
    })

});
