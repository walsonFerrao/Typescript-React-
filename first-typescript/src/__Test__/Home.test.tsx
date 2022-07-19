import { Mycomponent } from "../Pages/Home";
import { MyCard } from "../Components/Card/Card";
import { findAllByTestId, findByRole, getAllByText, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


interface searchqueries {
  query: string;
}


describe("checking fulldata component", () => {
  test("checking for json",  () => {
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


  


//   test("checking rendering", async ()=>{

//     render(<BrowserRouter>
//           <Mycomponent
//             searchobj={{query:"ab"}}
//           />
//         </BrowserRouter>)
  
//     //    const  myelement=await screen.findByText(/There is No result by this Auther Please change the input/i)
//     //      expect(myelement).not.toBeDisabled()

//     const myelement=await screen.findByTestId('element0')
//     expect(myelement).toBeInTheDocument()
//     })

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


   

    