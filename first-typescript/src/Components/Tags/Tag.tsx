import React from "react";
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';

import { styled } from '@mui/material/styles';


const Myflex = styled('div')(() => ({
    display: 'flex',
    gap: '5%',
}));



// creating an interface so that I can accept prop of defined type


interface myarr {
    arr: string[]
}


export const Tags: React.FC<myarr> = ({ arr }) => {

    return (

        <Myflex>
            <h3>Tags:</h3>
            {arr.map((e: string) => <Typography sx={{ fontSize: 15, mt: 3 }} key={uuidv4()} color="text.secondary">
                {e}
            </Typography>)}
        </Myflex>

    )

}