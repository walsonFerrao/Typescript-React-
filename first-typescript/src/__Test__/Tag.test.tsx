import { getAllByText, render, screen } from '@testing-library/react';
import {Tags} from '../Components/Tags/Tag'

  let  arr: string[]
 arr=["walson","godwin","ferrao"]

describe('testing the card component',()=>{

    test('checking the Tags component', () => {
        render(<Tags arr={arr} />);
      
      const firstindex=screen.getByText(/walson/i)
      const secondindex=screen.getByText(/godwin/i)
      const thirdindex=screen.getByText(/ferrao/i)

       expect(firstindex).toBeInTheDocument()
       expect(secondindex).toBeInTheDocument()
       expect(thirdindex).toBeInTheDocument()

      
      });
})