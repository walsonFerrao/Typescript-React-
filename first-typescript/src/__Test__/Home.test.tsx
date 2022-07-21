import { Mycomponent } from "../Pages/Home";
import { MyCard } from "../Components/Card/Card";
import { findAllByTestId, findByRole, findByTestId, getAllByText, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


interface searchqueries {
  query: string;
}







describe("checking fulldata component", () => {
  test("checking for json",  async () => {
    let searchobjifnoquery: searchqueries = {
      query: "",
    };
    
    render(
      <BrowserRouter>
        <Mycomponent
          searchobj={searchobjifnoquery}
        />
      </BrowserRouter>
    );

    const contentdiv = screen.getByTestId("dataifnoquery");

    expect(contentdiv).toBeInTheDocument();



    

     

  });


  


  test("checking rendering", async ()=>{

    render(<BrowserRouter>
          <Mycomponent
            searchobj={{query:"a"}}
          />
        </BrowserRouter>)
  
       

    //    const  myelement=await screen.findByText(/There is No result by this Auther Please change the input/i)
    //      expect(myelement).not.toBeDisabled()



    var myelement:any
       setTimeout( async () => {
         myelement=await screen.findByTestId('element0')

       }, 2000);
       setTimeout(() => {
        expect(myelement).toBeInTheDocument()
           
       }, 3000);
    })

});


test("checking rendering ifthere is query", async ()=>{

    render(<BrowserRouter>
          <Mycomponent
            searchobj={{query:"abaaaaaaaaaaaaaaaaaaaa"}}
          />
        </BrowserRouter>)
  
       const  myelement=await screen.findByText(/There is No result by this Auther Please change the input/i)
         expect(myelement).toBeInTheDocument()



    }) 


   

    