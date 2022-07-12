

import { getAllByText, render, screen } from '@testing-library/react';
import React from 'react';
import {Returnerror} from '../Components/Nothingfound/Returnerror'
import {BrowserRouter} from 'react-router-dom'

describe('testing the  component component',()=>{
    test('checking the Tags component', () => {
        render( 
            <BrowserRouter>
        <Returnerror />
        </BrowserRouter>
         );
        const error=screen.getByText(/There is No result by this Auther Please change the input/i)
    expect(error).toBeInTheDocument()
      });
})


