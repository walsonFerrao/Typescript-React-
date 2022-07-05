

import { getAllByText, render, screen } from '@testing-library/react';
import React from 'react';
import {Returnerror} from '../Components/Nothingfound/Returnerror'


describe('testing the  component component',()=>{
    test('checking the Tags component', () => {
        render( <Returnerror /> );
        const error=screen.getByText(/There is No result by this Auther Please click on Home Button to go back to home./i)
    expect(error).toBeInTheDocument()
      });
})


